type Car = {
  readonly color: string
  readonly maxSpeed: number
}

type House = {
  readonly title: string
}

namespace Car {
  export function isCar(obj: any): obj is Car {
    return (<Car>obj).maxSpeed !== undefined
  }
}

const someRandomObj: Car | House = { color: 'red', maxSpeed: 200 }
if (Car.isCar(someRandomObj)) {
  console.log(someRandomObj.color)
}