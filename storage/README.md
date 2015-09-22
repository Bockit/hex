Hex Storage
===========

Store and retrieve values based on the q and r coordinates in a hex grid.

Usage
-----

```javascript
import grid from '@bockit/hex-storage'

let storage = grid()
storage.set(0, 0, { some: 'data' })
storage.get(0, 0) // { some: 'data' }
```