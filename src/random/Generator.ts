import { Gen } from 'verify-it'
import { RandomType, Schema, ObjectType } from './RandomType'

export default class Generator {
  constructor (private readonly schema: Schema) { }

  generate (): object {
    return Object.keys(this.schema).reduce((acc, cur) => {
      return {
        ...acc,
        [cur]: this.generateValue(this.schema[cur])
      }
    }, {})
  }

  private generateValue (keyType: RandomType) {
    if (keyType.name === 'NULL') {
      return null
    } else if (keyType.name === 'STRING') {
      return Gen.string()
    } else if (keyType.name === 'OBJECT') {
      const objectSchema = keyType as ObjectType
      const newGenerator = new Generator(objectSchema.schema)
      return newGenerator.generate()
    }
  }
}
