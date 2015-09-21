export default grid

export function grid () {
    let store = {}

    return {
        set (q, r, data) {
            store[hash(q, r)] = data
            return this
        }
      , get (q, r) {
            return store[hash(q, r)]
        }
    }
}

export function hash (q, r) {
    return q + ',' + r
}