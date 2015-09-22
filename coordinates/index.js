import hexRound from '@bockit/hex-round'

export function pixelToHexPointy (x, y, size) {
    let q = (x * Math.sqrt(3) / 3 - y / 3) / size
    let r = y * (2/ 3) / size
    return hexRound(q, r)
}

export function pixelToHexFlat (x, y, size) {
    let q = x * (2 / 3) / size
    let r = (-x / 3 + Math.sqrt(3) / 3 * y) / size
    return hexRound(q, r)
}

export function hexToPixelPointy (q, r, size) {
    let x = size * Math.sqrt(3) * (q + r / 2)
    let y = size * (3 / 2) * r
    return [ x, y ]
}

export function hexToPixelFlat (q, r, size) {
    let x = size * (3 / 2) * q
    let y = size * Math.sqrt(3) * (r + q / 2)
    return [ x, y ]
}