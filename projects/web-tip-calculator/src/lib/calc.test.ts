import { describe, expect, it } from 'vitest'
import { calculateTip, validateInput, type CalcInput, type CalcResult } from './calc'

describe('calculateTip', () => {
  it.each([
    {
      testName: 'functional_bill100_tip10_split1',
      input: { bill: 100, tipPercent: 10, split: 1 },
      expected: { tipAmount: 10, total: 110, perPerson: 110 },
    },
    {
      testName: 'boundary_tip0',
      input: { bill: 100, tipPercent: 0, split: 1 },
      expected: { tipAmount: 0, total: 100, perPerson: 100 },
    },
    {
      testName: 'boundary_tip30',
      input: { bill: 100, tipPercent: 30, split: 1 },
      expected: { tipAmount: 30, total: 130, perPerson: 130 },
    },
    {
      testName: 'functional_split2',
      input: { bill: 100, tipPercent: 10, split: 2 },
      expected: { tipAmount: 10, total: 110, perPerson: 55 },
    },
  ] satisfies Array<{ testName: string; input: CalcInput; expected: CalcResult }>)(
    '$testName',
    ({ input, expected }) => {
      expect(calculateTip(input)).toEqual(expected)
    },
  )
})

describe('validateInput', () => {
  it.each([
    {
      testName: 'accepts_bill100_tip10_split1',
      input: { bill: 100, tipPercent: 10, split: 1 },
      valid: true,
      error: null,
    },
    {
      testName: 'accepts_boundary_tip0',
      input: { bill: 100, tipPercent: 0, split: 1 },
      valid: true,
      error: null,
    },
    {
      testName: 'accepts_boundary_tip30',
      input: { bill: 100, tipPercent: 30, split: 1 },
      valid: true,
      error: null,
    },
    {
      testName: 'negative_tip31',
      input: { bill: 100, tipPercent: 31, split: 1 },
      valid: false,
      error: 'Tip % must be an integer from 0 to 30',
    },
    {
      testName: 'negative_tip_minus1',
      input: { bill: 40, tipPercent: -1, split: 1 },
      valid: false,
      error: 'Tip % must be an integer from 0 to 30',
    },
    {
      testName: 'negative_split0',
      input: { bill: 100, tipPercent: 10, split: 0 },
      valid: false,
      error: 'Split must be an integer from 1 to 20',
    },
    {
      testName: 'negative_split21',
      input: { bill: 100, tipPercent: 10, split: 21 },
      valid: false,
      error: 'Split must be an integer from 1 to 20',
    },
  ] satisfies Array<{
    testName: string
    input: CalcInput
    valid: boolean
    error: string | null
  }>)('$testName', ({ input, valid, error }) => {
    const result = validateInput(input)
    expect(result.valid).toBe(valid)
    if (error) {
      expect(result.errors).toContain(error)
    } else {
      expect(result.errors).toEqual([])
    }
  })
})
