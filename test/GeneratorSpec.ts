import Generator from '../src/random/Generator'
import { RandomString, RandomNull, RandomObject } from '../src/random/RandomType'
import { Gen } from 'verify-it'
import { expect } from 'chai'

describe('RandomObject.generate', () => {
  verify.it('should generate an empty object if no schema is provided', () => {
    const generator = new Generator({})
    generator.generate().should.eql({})
  })

  verify.it('should generate an object with string properties',
    Gen.string, (key) => {
      const schema = {
        [key]: RandomString()
      }
      const generator = new Generator(schema)
      const generatedObject = generator.generate()
      return (typeof generatedObject[key]).should.eql('string')
    }
  )

  verify.it('should generate an object with null properties',
    Gen.string, (key) => {
      const schema = {
        [key]: RandomNull()
      }
      const generator = new Generator(schema)
      const generatedObject = generator.generate()
      return expect(generatedObject[key]).to.be.null
    }
  )

  verify.it('should generate an object with sub-object properties',
    Gen.string, Gen.string, (key, subKey) => {
      const schema = {
        [key]: RandomObject({
          [subKey]: RandomString()
        })
      }
      const generator = new Generator(schema)
      const generatedObject = generator.generate()
      return (typeof generatedObject[key][subKey]).should.eql('string')
    }
  )

})