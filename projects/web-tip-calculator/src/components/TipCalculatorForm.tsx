import { useMemo, useState } from 'react'
import { calculateTip, validateInput } from '../lib/calc'

const DEFAULT_TIP = 0
const DEFAULT_SPLIT = 1

function formatMoney(value: number): string {
  return value.toFixed(2)
}

export function TipCalculatorForm() {
  const [billText, setBillText] = useState('')
  const [tipPercent, setTipPercent] = useState(DEFAULT_TIP)
  const [split, setSplit] = useState(DEFAULT_SPLIT)

  const bill = billText.trim() === '' ? 0 : Number(billText)

  const validation = useMemo(
    () =>
      validateInput({
        bill: Number.isFinite(bill) ? bill : 0,
        tipPercent,
        split,
      }),
    [bill, tipPercent, split],
  )

  const result = useMemo(() => {
    if (!validation.valid) {
      return { tipAmount: 0, total: 0, perPerson: 0 }
    }
    return calculateTip({ bill, tipPercent, split })
  }, [bill, tipPercent, split, validation.valid])

  function handleReset() {
    setBillText('')
    setTipPercent(DEFAULT_TIP)
    setSplit(DEFAULT_SPLIT)
  }

  return (
    <form
      className="tip-form"
      onSubmit={(event) => event.preventDefault()}
      noValidate
    >
      <label className="field">
        <span>Bill ($)</span>
        <input
          type="number"
          inputMode="decimal"
          min="0"
          step="0.01"
          placeholder="0.00"
          value={billText}
          onChange={(event) => setBillText(event.target.value)}
        />
      </label>

      <label className="field">
        <span>Tip (%)</span>
        <input
          type="number"
          inputMode="numeric"
          min="0"
          max="30"
          step="1"
          value={tipPercent}
          onChange={(event) => setTipPercent(Number(event.target.value))}
        />
      </label>

      <label className="field">
        <span>Split (people)</span>
        <input
          type="number"
          inputMode="numeric"
          min="1"
          max="20"
          step="1"
          value={split}
          onChange={(event) => setSplit(Number(event.target.value))}
        />
      </label>

      {!validation.valid && (
        <ul className="errors" aria-live="polite">
          {validation.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <section className="results" aria-live="polite">
        <div className="result-row">
          <span>Tip amount</span>
          <strong>${formatMoney(result.tipAmount)}</strong>
        </div>
        <div className="result-row">
          <span>Total</span>
          <strong>${formatMoney(result.total)}</strong>
        </div>
        <div className="result-row">
          <span>Per person</span>
          <strong>${formatMoney(result.perPerson)}</strong>
        </div>
      </section>

      <button type="button" className="reset" onClick={handleReset}>
        Reset
      </button>
    </form>
  )
}
