# is-obj

<!-- VDOC.badges travis; standard; npm; coveralls -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/is-obj.svg?branch=master)](https://travis-ci.org/vigour-io/is-obj)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/brisky-is-obj.svg)](https://badge.fury.io/js/brisky-is-obj)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/is-obj/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/is-obj?branch=master)

<!-- VDOC END -->

<!-- VDOC.jsdoc isObj -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var answer = isObj(obj)

Checks whether an object is not null or a function or a [vigour-base](https://www.npmjs.com/package/vigour-base) object
- **obj** (*object*) - the object to check
- **returns** (*boolean*) answer - `true` if *obj* is an object (but not a function or vigour-base object), `false` otherwise

<!-- VDOC END -->

```javascript
var isObj = require('brisky-is-obj')
isObj({}) // true
```