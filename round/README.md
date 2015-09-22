Hex Round
=========

Round hex coordinates to their nearest hex. Support cube and axial grid systems.

Logic courtesy of [redblobgames hex grid reference][rbghex]

[rbghex]: http://www.redblobgames.com/grids/hexagons/#rounding

Usage
-----

```javascript
import { hexRoundAxial, hexRoundCube } from '@bockit/hex-round'

hexRoundAxial(1.1, 1) // [ 1, 1 ]
hexRoundCube(1.1, 1, -2) // [ 1, 1, -2 ]
```