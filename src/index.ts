/**
 * The function calculates the length of the wood
 *
 * @param {number} height  - height number
 * @param {number} width  - width number
 * @returns {number} Return value
 */
function lengthCalculation(height: number, width: number): number {
  const volume = 144
  const length = volume / (height * width)
  return length
}

const prompt = promptSync()
try {
  const widthString = prompt('Enter the width(inch): ')
  const widthNumber = parseInt(widthString)
  const heightString = prompt('Enter the height(inch): ')
  const heightNumber = parseInt(heightString)
  if (isNaN(+widthNumber) || isNaN(+heightNumber)) {
    throw new Error()
  }
  const woodLength = lengthCalculation(heightNumber, widthNumber)
  console.log(`The wood length should be ${woodLength} inch(es)`)
} catch (e) {
  console.log('\nInvalid. Input.')
}
console.log('\nDone.')
