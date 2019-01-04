function log (target: Function) {
  console.log('Logging the random class')
}

@log
class Random {

}

new Random()