#numsys.js

[![Build Status](https://travis-ci.org/plasmashadow/numsys.svg)](https://travis-ci.org/plasmashadow/numsys)
[![NPM Version](http://img.shields.io/npm/v/numsys.svg?style=flat)](https://www.npmjs.org/package/numsys)
[![NPM Downloads](https://img.shields.io/npm/dm/numsys.svg?style=flat)](https://www.npmjs.org/package/numsys)
[![Join the chat at https://gitter.im/plasmashadow/numsys](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/plasmashadow/numsys?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

##Description:
   
   Predict the next value of ap and gp sequences. Convert from one number system to another number system.
   More docs will be given once done.
   
## Number System:
   
   Supports 4 major number systems such as
   - Decimal
   - Octal
   - Hexadecimal
   - Binary
   
   ```javascript
   var ns = require('numsys');
   
   var num = ns.Number(3);
   console.log(num.toBinary().getValue());
   
   var num = ns.Number("1110", "binary");
   console.log(num.getValue()) // returns a decimal
   
   var num = ns.Number("34", "octal");
   console.log(num.toHex().getValue()); // return a hex value
   
   ```

## RoadMap

- [x] Implement Number System
- []  Predicting AP patterns
- []  Predicting GP patterns
   