import RandomObject from '../src/random/RandomObject'
import { RandomString } from '../src/random/RandomTypes'
import { Gen } from 'verify-it'

describe('RandomObject.generate', () => {
  verify.it('should generate an empty object if no schema is provided', () => {
    const generator = new RandomObject({})
    generator.generate().should.eql({})
  })

  verify.it('should generate an object with the string properties',
    Gen.string, (key) => {
      const schema = {
        [key]: RandomString()
      }
      const generator = new RandomObject(schema)
      const generatedObject = generator.generate()
      return (typeof generatedObject[key]).should.eql('string')
    }
  )
})