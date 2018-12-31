import { Gen } from 'verify-it'
import { RandomType, Schema, ObjectType } from './RandomType'

export default class Generator {
  static generate (schema: Schema): object {
    return Object.keys(schema).reduce((acc, cur) => {
      return {
        ...acc,
        [cur]: this.generateValue(schema[cur])
      }
    }, {})
  }

  private static generateValue (keyType: RandomType) {
    if (keyType.name === 'NULL') {
      return null
    } else if (keyType.name === 'STRING') {
      return Gen.word()
    } else if (keyType.name === 'OBJECT') {
      const objectSchema = keyType as ObjectType
      return Generator.generate(objectSchema.schema)
    }
  }
}
