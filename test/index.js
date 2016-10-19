'use strict'
const test = require('tape')
const base = require('brisky-base')
const isObj = require('../')

const testCases = [
  [{}, true],
  [{ a: 'a' }, true],
  [base({}), false],
  [[], true],
  [['a'], true],
  [function () {}, false]
]

test('isObj', t => {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isObj(item[0]), item[1], 'isObj(' + JSON.stringify(item[0]) + ') === ' + item[1])
  })
})
