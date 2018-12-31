#! /usr/bin/env ts-node

const TRUE_PROBABILITY = 0.5

function sample (trueProbability: number): boolean {
  return Math.random() <= trueProbability
}

function runMultipleSamples (sampleCount: number, trueProbability: number) {
  const trueSamples = new Array(sampleCount).fill(0)
    .map((_) => sample(trueProbability))
    .filter((isTrue) => isTrue)

  const expectedTrueCount = sampleCount * trueProbability
  const actualTrueCount = trueSamples.length
  const error = Math.abs(actualTrueCount - expectedTrueCount)/expectedTrueCount

  console.log(`Number of true samples: ${actualTrueCount} with error: ${error}`)
}

for (let i=1; i<=5; i++) {
  runMultipleSamples(Math.pow(10, i), TRUE_PROBABILITY)
}