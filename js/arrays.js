// ---------------------------------------------------------------
// Arrays
// @Author: Mark McCann
// @License: None, Public Domain
// ---------------------------------------------------------------

/**
 * removes duplicates from an array
 * @param  {array} array
 * @return {array} 
 */
var uniqueArray = function (array) {
    var a = array.concat();
    for(var i=0; i < a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j]) {
                a.splice(j--, 1);
            }
        }
    }
    return a;
}

/**
 * check to see if object exists in an array
 * @param {array} array - haystack
 * @param {anything} obj - needle
 * @return {array} 
 */
var contains = function (a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}

/**
 * checks to see if variable is an array
 * @param  {array} a
 * @return {boolean} 
 */
var isArray = function ( a ) {
    return (Object.prototype.toString.call( a ) === '[object Array]');
}
// IE9+ Version
Array.isArray( a );
