export type CalcInput = {
  bill: number
  tipPercent: number
  split: number
}

export type CalcResult = {
  tipAmount: number
  total: number
  perPerson: number
}

/** Money rounding: two decimal places via Math.round(x * 100) / 100 */
export function roundMoney(value: number): number {
  return Math.round(value * 100) / 100
}

export function validateInput(input: CalcInput): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!Number.isFinite(input.bill) || input.bill <= 0) {
    errors.push('Bill must be greater than 0')
  }

  if (
    !Number.isInteger(input.tipPercent) ||
    input.tipPercent < 0 ||
    input.tipPercent > 30
  ) {
    errors.push('Tip % must be an integer from 0 to 30')
  }

  if (!Number.isInteger(input.split) || input.split < 1 || input.split > 20) {
    errors.push('Split must be an integer from 1 to 20')
  }

  return { valid: errors.length === 0, errors }
}

export function calculateTip(input: CalcInput): CalcResult {
  const tipAmount = roundMoney(input.bill * (input.tipPercent / 100))
  const total = roundMoney(input.bill + tipAmount)
  const perPerson = roundMoney(total / input.split)

  return { tipAmount, total, perPerson }
}
