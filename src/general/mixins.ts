type Constructor<T = {}> = new (...args: any[]) => T;

function applySingleMixin (BaseClass: Constructor) {
  return class extends BaseClass {
    printMe() {
      console.log('I am an applied signle mixin')
    }
  }
}

const NewClass = applySingleMixin(Error)
const newClass = new NewClass()
newClass.printMe()
