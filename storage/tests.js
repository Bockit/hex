require('babel/register')

var test = require('tape')
var storage = require('./index')
var hash = storage.hash
var storage = storage.grid

test('Hashing', function (t) {
    t.plan(1)
    t.equals(hash(0, 0), '0,0', 'Standard hash')
    t.end()
})

test('Storage and Retrieval', function (t) {
    t.plan(2)
    var store = storage()
    store.set(0, 0, 'foo')
    t.equals(store.get(0, 0), 'foo', 'Can store and retrieve')
    store.set(0, 0, 'bar')
    t.equals(store.get(0, 0), 'bar', 'Can override')
    t.end()
})