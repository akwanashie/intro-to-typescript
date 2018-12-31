import Generator from '../src/random/Generator'
import { RandomString, Null, RandomObject } from '../src/random/RandomType'
import { Gen } from 'verify-it'
import { expect } from 'chai'

describe('RandomObject.generate', () => {
  verify.it('should generate an empty object if no schema is provided', () => {
    return Generator.generate({}).should.eql({})
  })

  verify.it('should generate an object with string properties',
    Gen.string, (key) => {
      const schema = {
        [key]: RandomString()
      }
      const generatedObject = Generator.generate(schema)
      return (typeof generatedObject[key]).should.eql('string')
    }
  )

  verify.it('should generate an object with null properties',
    Gen.string, (key) => {
      const schema = {
        [key]: Null()
      }
      const generatedObject = Generator.generate(schema)
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
      const generatedObject = Generator.generate(schema)
      return (typeof generatedObject[key][subKey]).should.eql('string')
    }
  )

  verify.it('should generate an object with various property types',
    Gen.array(Gen.word, 7), (keys) => {
      const [key1, key2, key3, subKey1, subKey2, subKey3, subSubKey1] = keys
      const schema = {
        [key1]: RandomString(),
        [key2]: Null(),
        [key3]: RandomObject({
          [subKey1]: RandomString(),
          [subKey2]: Null(),
          [subKey3]: RandomObject({
            [subSubKey1]: RandomString()
          })
        })
      }
      const generatedObject = Generator.generate(schema)
      console.log(generatedObject)
      return generatedObject.should.not.be.null
    }
  )

})