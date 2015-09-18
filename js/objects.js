// -----------------------------------------------------------------
// Objects
// @author:  Mark McCann (www.markmccann.me)
// @license: None, Public Domain
// -----------------------------------------------------------------

/**
 * combines javascript objects.
 * @param {object} - collects values (usually an empty object)
 * @param {object}[1-?] - the objects you want to add values from
 * @return {object}
 */
var extend = function () {
    var a = arguments;
    for( var i = 1; i < a.length; i++ )
        for( var key in a[i] )
            if(a[i].hasOwnProperty(key))
                a[0][key] = a[i][key];
    return a[0];
}
