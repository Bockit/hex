require('babel/register')

var test = require('tape')
var round = require('./index')
var hexRoundAxial = round.hexRoundAxial
var hexRoundCube = round.hexRoundCube

test('Rounding axial', function (t) {
    t.plan(1)
    t.deepEquals(hexRoundAxial(1.1, 1), [ 1, 1 ], '(1.1, 1)')
    t.end()
})

test('Rounding cube', function (t) {
    t.plan(1)
    t.deepEquals(hexRoundCube(1.1, 1, -2), [ 1, 1, -2 ], '(1.1, 1, -2)')
    t.end()
})