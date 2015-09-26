export default class HexGrid {
    constructor () {
        this.store = {}
    }

    set (q, r, data) {
        this.store[hash(q, r)] = data
        return this
    }

    get (q, r) {
        return this.store[hash(q, r)]
    }

    [Symbol.iterator] () {
        let i = 0
        const keys = Object.keys(this.store)
        let self = this
        return {
            next () {
                return {
                    value: self.store[keys[i++]]
                  , done: i > keys.length
                }
            }
        }
    }
}

export function hash (q, r) {
    return q + ',' + r
}