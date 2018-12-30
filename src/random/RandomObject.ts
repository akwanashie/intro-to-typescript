import { Gen } from 'verify-it'

export default class RandomObject {
  constructor (private readonly schema: any) { }

  generate (): object {
    return Object.keys(this.schema).reduce((acc, cur) => {
      return {
        ...acc,
        [cur]: Gen.string()
      }
    }, {})
  }
}
