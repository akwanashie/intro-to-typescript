
const people: (string| undefined)[] = [
  'Augustine',
  undefined,
  'Matt',
  undefined
]

const realPeople: string[] = people.filter((person) => person !== undefined)

const realPeople2: string[] = people.reduce((acc, val) => {
  if (val) {
    acc.push(val)
  }
  return acc
}, [])

console.log(realPeople)
console.log(realPeople2)