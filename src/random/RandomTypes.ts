export type RandomType = StringType

export type StringType = {
  readonly type: 'STRING'
  readonly length: number
}

export function RandomString(length: number = 10): StringType {
  return { length, type: 'STRING' }
}

export type Schema = {
  readonly [key: string]: RandomType
}