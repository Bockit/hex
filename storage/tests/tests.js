import test from 'tape'
import HexGrid, { hash } from '../index'

test('Hashing', function (t) {
    t.plan(1)
    t.equals(hash(0, 0), '0,0', 'Standard hash')
    t.end()
})

test('Storage and Retrieval', function (t) {
    t.plan(2)
    let grid = new HexGrid()
    grid.set(0, 0, 'foo')
    t.equals(grid.get(0, 0), 'foo', 'Can store and retrieve')
    grid.set(0, 0, 'bar')
    t.equals(grid.get(0, 0), 'bar', 'Can override')
    t.end()
})

test('Iteration', function (t) {
    t.plan(1)
    let grid = new HexGrid()
    grid.set(0, 0, 'foo')

    for (let hex of grid) {
        t.equals(hex, 'foo', 'Can iterate')
    }

    t.end()
})