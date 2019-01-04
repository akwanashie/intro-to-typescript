namespace decorators {
  type Constructor<T = {}> = new (...args: any[]) => T;

  function author (name: string) {
    return function (Target: Constructor) {
      console.log(`written by ${name}`)
      return class extends Target {
        authorName () { return name }
      }
    }
  }

  function log (target: Function) {
    console.log(`Logging ${target.name} class`)
  }

  @author('Augustine Kwanashie')
  @log
  class Random { }

  const r: any = new Random()
  console.log(r.authorName())
}