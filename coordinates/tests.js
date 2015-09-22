require('babel/register')

var test = require('tape')
var hexCoords = require('./index')
var pixelToHexPointy = hexCoords.pixelToHexPointy
var pixelToHexFlat = hexCoords.pixelToHexFlat
var hexToPixelPointy = hexCoords.hexToPixelPointy
var hexToPixelFlat = hexCoords.hexToPixelFlat

test('Pixels to hexagons', function (t) {
    t.end()
})

test('Hexagons to pixels', function (t) {
    t.end()
})