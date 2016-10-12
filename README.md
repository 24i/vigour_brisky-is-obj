# brisky-is-obj
Checks whether an object is not null or a function or a [brisky-base](https://www.npmjs.com/package/brisky-base) object
- **obj** (*object*) - the object to check
- **returns** (*boolean*) answer - `true` if *obj* is an object (but not a function or brisky-base object), `false` otherwise

[![Build Status](https://travis-ci.org/vigour-io/brisky-is-obj.svg?branch=master)](https://travis-ci.org/vigour-io/brisky-is-obj)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/brisky-is-obj.svg)](https://badge.fury.io/js/brisky-is-obj)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/brisky-is-obj/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/brisky-is-obj?branch=master)

--

```javascript
const isObj = require('brisky-is-obj')
isObj({}) // true

const base = require('brisky-base')
isObj(base()) // false
```
