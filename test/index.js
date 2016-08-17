'use strict'

var test = require('tape')
var Base = require('vigour-base')
var isObj = require('../')

var testCases = [
  [{}, true],
  [{ a: 'a' }, true],
  [new Base({}), false],
  [[], true],
  [['a'], true],
  [function () {}, false]
]

test('isObj', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isObj(item[0]), item[1], 'isObj(' + JSON.stringify(item[0]) + ') === ' + item[1])
  })
})
