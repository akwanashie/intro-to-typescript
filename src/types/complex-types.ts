const simpleConfig: { readonly area: number, color: string } = { area: 100, color: 'red' }
simpleConfig.area = 200 // type error because  the area property is readonly
simpleConfig.color = 'blue'
const config: { readonly area: number } = { area: 100, color: 'blue' } // type error becaues value must be exact match with type

interface Config { readonly area: number, color: string }
function print(config: Config) { }
const biggerConfig = { area: 600, color: 'green', height: 100 }
const biggerTypedConfig: Config = { area: 600, color: 'green', height: 100 } // error! because object literals mut be a complete match declared type
print({ area: 600, color: 'green', height: 100 }) // error! because object literals mut be a complete match with required parameter type
print({ area: 600, color: 'green', height: 100 } as Config) // works because we cast to Config
print(bggerConfig) // works because object references to not need to be an exact match. It works as long as it satisfes the type requirements


const readOnlyArray: ReadonlyArray<string> = ['Mon', 'Tue']
readOnlyArray[0] = 'Wed' // error!
readOnlyArray.push('Wed') // error! ReadonlyArray.push does not exist
const normalArray: string[] = ['Mon', 'Tues']
normalArray[0] = 'Monday'
normalArray.push('Wed')