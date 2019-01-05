const a: any = {
  'name': 'Mike',
  'age': 5,
  4: 'random-value',
  class: 3
}

// console.log(Object.getPrototypeOf(a))
// console.log(Object.getOwnPropertyNames(a))
// console.log(a.__proto__)

class B {
  constructor (private x: number = 10, private name: string = '') {}

  toJsonStr () {
    return `{ x: ${this.x}, name: ${this.name}}`
  }
}
const b = new B()
// console.log((b as any).__proto__)
// console.log(Object.getPrototypeOf(new B()).constructor)
// console.log(Object.getOwnPropertyNames(new B()))
// console.log(b)


function printChain (obj: object) {
  if (obj !== Object.prototype) {
    const proto = Object.getPrototypeOf(obj)
    const properties: string[] = Object.getOwnPropertyNames(obj)
    return {
      properties: properties.map(property => {
        return `${property}: ${Object.getOwnPropertyDescriptor(obj, property).value}`
      }),
      prototype: printChain(proto)
    }
  } else {
    return 'Object.prototype'
  }
}

// console.log(JSON.stringify(printChain(new B(10, 'Augustine')), null, 2))

const b1: any = new B()
Object.getPrototypeOf(b1).hello = () => console.log('hello')
b1.hello()
b1.hi = function () { console.log('hi') }
b1.hi()

// console.log(JSON.stringify(printChain(b1), null, 2))


const C = function (location: string = 'london') {
  this.name = 'Aug',
  this.age = 100
}

// console.log(JSON.stringify(printChain(C.prototype), null, 2))
// console.log(JSON.stringify(printChain(new C()), null, 2))
