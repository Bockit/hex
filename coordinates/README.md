Hex Coordinates
===============

Convert pixel coordinates to hex coordinates and vice versa. Supports flat and pointy topped hexagons.

Logic courtesy of [redblobgames hex grid reference][rbghex]

[rbghex]: http://www.redblobgames.com/grids/hexagons/

Usage
-----

```javascript
import { pixelToHexPointy, pixelToHexFlat } from '@bockit/hex-coordinates'
import { hexToPixelPointy, hexToPixelFlat } from '@bockit/hex-coordinates'

pixelToHexPointy(100, 100, 20) // [ q, r ]
pixelToHexFlat(100, 100, 20) // [ q, r ]

hexToPixelPointy(1, 1, 20) // [ x, y ]
hexToPixelFlat(1, 1, 20) // [ x, y ]
```

Todo
----

- Tests