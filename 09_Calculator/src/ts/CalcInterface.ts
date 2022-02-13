
export interface CalcInterface {
  sum: (a: number, b: number) => number
  subtraction: (a: number, b: number) => number
  multiplication: (a: number, b: number) => number
  division: (a: number, b: number) => number
  cube: (a: number) => number
  constantToPower: (a: number) => number
  tenToPower: (a: number) => number
  pi: () => number
  constant: () => number
  clearAll: () => void
}
