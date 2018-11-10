import { drill } from '../src/drill-into-object'
import { Gen } from 'verify-it'
import * as chai from 'chai'
chai.should()

describe('drill', () => {
  verify.it('should return the same object if the path is empty', Gen.object, (target) => {
    drill(target, []).should.eql(target)
  })

  describe('when the path is a single string', () => {
    verify.it('should return the correct value if the path matches',
      Gen.object, Gen.string, Gen.string, (targetSeed, key, value) => {
        const target = { ...targetSeed, [key]: value }
        drill(target, [ key ]).should.eql(value)
    })

    verify.it('should return undefined if the path does not match',
      Gen.object, Gen.string, (target, key) => {
        chai.expect(drill(target, [ key ])).to.be.undefined
    })

    const targetPairs = new Map<string, any>([
      ['string', Gen.string()],
      ['integer', Gen.integer()],
      ['undefined', undefined],
      ['number', Gen.array(Gen.object, 10)()]
    ])

    for (const targetPair of targetPairs.entries()) {
      verify.it(`should return undefined if the target is of type: ${targetPair[0]}`, Gen.string, (key) => {
        chai.expect(drill(targetPair[1], [ key ])).to.be.undefined
      })
    }
  })
})
