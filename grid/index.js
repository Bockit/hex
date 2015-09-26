import HexGrid from '@bockit/hex-storage'
import { hexToPixelPointy, hexToPixelFlat } from '@bockit/hex-coordinates'

export function gridPointy ({ size, width, height }) {
    let grid = new HexGrid()

    const numRows = Math.ceil(height / pointyVerticalDistance(size)) + 1
    const numCols = Math.ceil(width / pointyWidth(size)) + 1

    let cumulativeHeight = -size
    for (let row = 0; row < numRows; row++) {
        if (cumulativeHeight >= height) continue
        let cumulativeWidth = row % 2 ? 0 : -(pointyWidth(size) / 2)
        for (let col = 0; col < numCols; col++) {
            if (cumulativeWidth >= width) continue
            let q = col - Math.floor(row / 2)
            let r = row
            let [ x, y ] = hexToPixelPointy(q, r, size)
            grid.set(q, r, { q, r, x, y, size })
            cumulativeWidth += pointyWidth(size)
        }
        cumulativeHeight += pointyVerticalDistance(size)
    }

    return grid
}

export function gridFlat ({ size, width, height }) {
    let grid = new HexGrid()

    const numRows = Math.ceil(height / flatHeight(size)) + 1
    const numCols = Math.ceil(width / flatHorizontalDistance(size)) + 1

    let cumulativeWidth = -size
    for (let col = 0; col < numCols; col++) {
        if (cumulativeWidth >= width) continue
        let cumulativeHeight = col % 2 ? 0 : -(flatHeight(size) / 2)
        for (let row = 0; row < numRows; row++) {
            if (cumulativeHeight >= height) continue
            let q = col
            let r = row - Math.floor(col / 2)

            let [ x, y ] = hexToPixelFlat(q, r, size)
            grid.set(q, r, { q, r, x, y, size })
            cumulativeHeight += flatHeight(size)
        }
        cumulativeWidth += flatHorizontalDistance(size)
    }

    return grid
}

export function pointyHeight (size) {
    return size * 2
}

export function pointyWidth (size) {
    return Math.sqrt(3) / 2 * pointyHeight(size)
}

export function flatWidth (size) {
    return size * 2
}

export function flatHeight (size) {
    return Math.sqrt(3) / 2 * flatWidth(size)
}

export function pointyVerticalDistance (size) {
    return pointyHeight(size) * 3 / 4
}

export function flatHorizontalDistance (size) {
    return flatWidth(size) * 3 / 4
}