import { drawer } from '../drawer.js'

// Level 4

/**
 * Returns true if it is possible to make the target amount out of the cash in the drawer
 * Returns false if it is not possible
 * @param {number} target - the amount of money to try and make
 * @param {object[]} drawer
 * @returns {boolean} whether it is possible to make the amount from the drawer
 */
export function canMakeAmount(target, drawer) {
  let remainder = target
  for (let i = 0; i < drawer.length; i++) {
    const denomination = drawer[i]

    const neededAmount = Math.floor(remainder / denomination.value)

    remainder -= denomination.value * Math.min(neededAmount, denomination.quantity)
    if (remainder === 0) {
      return true
    }
  }

  return false
}
