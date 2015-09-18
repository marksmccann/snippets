// -----------------------------------------------------------------
// Numbers
// @Author:  Mark McCann
// @License: None, Public Domain
// -----------------------------------------------------------------

/**
 * checks if variable is an integer
 * @param {any} data
 * @return {boolean}
 */
var isInt = function ( data ) {
    return data === parseInt(data, 10);
}

/**
 * returns a random float within a range
 * @param {float} min
 * @param {float} max
 * @return {float}
 */
var randomFloat = function( min, max ) {
    return Math.random() * (max - min) + min;
}

/**
 * returns a random Int within a range
 * @param {int} min
 * @param {int} max
 * @return {int}
 */
var randomInt = function( min, max ) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}
