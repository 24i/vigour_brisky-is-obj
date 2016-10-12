'use strict'

/**
 * @id isObj
 * @function isObj
 * Checks whether an object is not null or a function or a [vigour-base](https://www.npmjs.com/package/vigour-base) object
 * @param {object} obj - the object to check
 * @returns {boolean} answer - `true` if *obj* is an object (but not a function or vigour-base object), `false` otherwise
 */
module.exports = obj => obj && typeof obj === 'object' && !obj.isBase
