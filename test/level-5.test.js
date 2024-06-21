import { describe, it } from 'mocha'
import assert from 'assert'
import { transaction } from '../lib/level-5.js'

describe('transaction', function () {
  it('returns the drawer with the right adjustments', function () {
    const cost = 450
    const paid = 1000
    const drawer = [
      { name: 'ten', value: 1000, quantity: 1 },
      { name: 'five', value: 500, quantity: 1 },
      { name: 'one', value: 100, quantity: 2 },
      { name: 'quarter', value: 25, quantity: 3 },
      { name: 'dime', value: 10, quantity: 0 },
      { name: 'nickel', value: 5, quantity: 0 },
      { name: 'penny', value: 1, quantity: 2 }
    ]
    const expectedDrawer = [
      { name: 'ten', value: 1000, quantity: 2 },
      { name: 'five', value: 500, quantity: 0 },
      { name: 'one', value: 100, quantity: 2 },
      { name: 'quarter', value: 25, quantity: 1 },
      { name: 'dime', value: 10, quantity: 0 },
      { name: 'nickel', value: 5, quantity: 0 },
      { name: 'penny', value: 1, quantity: 2 }
    ]
    const testDrawer = transaction(cost, paid, drawer)
    assert.deepStrictEqual(testDrawer, expectedDrawer)
  })

  it('returns the drawer with the right adjustments 2', function () {
    const cost = 1157
    const paid = 1157
    const drawer = [
      { name: 'ten', value: 1000, quantity: 1 },
      { name: 'five', value: 500, quantity: 1 },
      { name: 'one', value: 100, quantity: 2 },
      { name: 'quarter', value: 25, quantity: 3 },
      { name: 'dime', value: 10, quantity: 0 },
      { name: 'nickel', value: 5, quantity: 0 },
      { name: 'penny', value: 1, quantity: 2 }
    ]
    const expectedDrawer = [
      { name: 'ten', value: 1000, quantity: 2 },
      { name: 'five', value: 500, quantity: 1 },
      { name: 'one', value: 100, quantity: 3 },
      { name: 'quarter', value: 25, quantity: 5 },
      { name: 'dime', value: 10, quantity: 0 },
      { name: 'nickel', value: 5, quantity: 1 },
      { name: 'penny', value: 1, quantity: 4 }
    ]
    const testDrawer = transaction(cost, paid, drawer)
    assert.deepStrictEqual(testDrawer, expectedDrawer)
  })

  it('returns the drawer with the right adjustments 3', function () {
    const cost = 777
    const paid = 1157
    const drawer = [
      { name: 'ten', value: 1000, quantity: 1 },
      { name: 'five', value: 500, quantity: 1 },
      { name: 'one', value: 100, quantity: 2 },
      { name: 'quarter', value: 25, quantity: 3 },
      { name: 'dime', value: 10, quantity: 0 },
      { name: 'nickel', value: 5, quantity: 0 },
      { name: 'penny', value: 1, quantity: 2 }
    ]
    const expectedDrawer = [
      { name: 'ten', value: 1000, quantity: 2 },
      { name: 'five', value: 500, quantity: 1 },
      { name: 'one', value: 100, quantity: 0 },
      { name: 'quarter', value: 25, quantity: 2 },
      { name: 'dime', value: 10, quantity: 0 },
      { name: 'nickel', value: 5, quantity: 0 },
      { name: 'penny', value: 1, quantity: 4 }
    ]
    const testDrawer = transaction(cost, paid, drawer)
    assert.deepStrictEqual(testDrawer, expectedDrawer)
  })
})
