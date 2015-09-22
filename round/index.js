export function hexRoundAxial (q, r) {
    var [ q, s, r ] = hexRoundCube(q, -q - r, r)
    return [ q, r ]
}

export function hexRoundCube (x, y, z) {
    let rx = Math.round(x)
    let ry = Math.round(y)
    let rz = Math.round(z)

    let dx = Math.abs(rx - x)
    let dy = Math.abs(ry - y)
    let dz = Math.abs(rz - z)

    if (dx > dy && dx > dz) {
        rx = -ry - rz
    }
    else if (dy > dz) {
        ry = -rx - rz
    }
    else {
        rz = -rx - ry
    }

    return [ rx, ry, rz ]
}