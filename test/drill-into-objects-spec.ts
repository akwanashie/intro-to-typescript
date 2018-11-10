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
      ['array', Gen.array(Gen.object, 10)()]
    ])

    for (const targetPair of targetPairs.entries()) {
      verify.it(`should return undefined if the target is of type: ${targetPair[0]}`, Gen.string, (key) => {
        chai.expect(drill(targetPair[1], [ key ])).to.be.undefined
      })
    }
  })

  describe('when the path is a single array index', () => {
    verify.it('should return undefined is the array is empty', Gen.integerBetween(0, 100), (index) => {
      chai.expect(drill([], [ index ])).to.be.undefined
    })

    verify.it('should return the correct value if the index exists',
      Gen.array(Gen.object, 10), Gen.integerBetween(0, 10), Gen.object, (target, index, value) => {
        target[index] = value
        drill(target, [ index ]).should.eql(value)
    })

    verify.it('should return undefined if index is out of bounds',
      Gen.array(Gen.object, 10), Gen.integerBetween(11, 20), (target, index) => {
        chai.expect(drill(target, [ index ])).to.be.undefined
    })

    const targetPairs = new Map<string, any>([
      ['string', Gen.string()],
      ['integer', Gen.integer()],
      ['undefined', undefined],
      ['object', Gen.object()]
    ])

    for (const targetPair of targetPairs.entries()) {
      verify.it(`should return undefined if the target is of type: ${targetPair[0]}`,
        Gen.integer, (key) => {
          chai.expect(drill(targetPair[1], [ key ])).to.be.undefined
      })
    }
  })
})
