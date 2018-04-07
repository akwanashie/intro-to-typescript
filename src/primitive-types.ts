// random ramblings on Typescript types

// can use a tuple to describe various properties of an entity
const mortgageAsTuple: [number, string, boolean] = [700, 'mortgage', true]

// but will it not be better to use a complex type?
const mortgageAsObject: { amount: number, title: string, isActive: boolean } = {
  amount: 700,
  title: 'mortgage',
  isActive: true
}

// what's up with null and undefined?
// same as for js
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null and
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
// undefined is a property of the global object that indicates a variable has not been assigned a value
// null is an assignment value that inidcates a variable that should have an object assigned to it has none
const a: null = null
const b: undefined = null
const c: null = undefined
const d: undefined = undefined

// what's element?
const y: Element = undefined
