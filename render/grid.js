import { drawHexPointy, drawHexFlat } from './hex'
import { hexToPixelPointy, hexToPixelFlat } from '@bockit/hex-coordinates'

export function drawGridPointy (context, grid) {
    for (let { x, y, size } of grid) {
        drawHexPointy(context, x, y, size)
    }
}

export function drawGridFlat (context, grid) {
    for (let { x, y, size } of grid) {
        drawHexFlat(context, x, y, size)
    }
}