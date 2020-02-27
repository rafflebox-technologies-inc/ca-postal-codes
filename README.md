# ca-postal-codes
Canada postal codes


## Usage

`npm install --save ca-postal-codes`

```javascript
const postalCodes = require('ca-postal-codes');

postalCodes.validate('ON', 'K') // true
postalCodes.validate('ON', 'G') // false
```

## Build

```
npm install
npm run test
```
