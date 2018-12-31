export type StringType = {
  readonly name: 'STRING'
  readonly length: number
}

export type NullType = {
  readonly name: 'NULL'
}

export type ObjectType = {
  readonly name: 'OBJECT',
  readonly schema: Schema
}

export type RandomType = StringType | NullType | ObjectType

export type Schema = {
  readonly [key: string]: RandomType
}

export function RandomString(length: number = 10): StringType {
  return { length, name: 'STRING' }
}

export function RandomNull(): NullType {
  return { name: 'NULL' }
}

export function RandomObject(schema: Schema): ObjectType {
  return { name: 'OBJECT', schema }
}