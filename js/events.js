// ---------------------------------------------------------------
// Event Handling 
// @Author: Mark McCann
// @License: None, Public Domain
// ---------------------------------------------------------------
 
/**
 * a browser-friendly way to add events
 * @param {object} target - element receiving event
 * @param {string} event - event type
 * @param {function} fn - callback
 */
var addEvent = function( target, event, fn ) {
    if ( target.attachEvent ) {
        target['e'+event+fn] = fn;
        target[event+fn] = function(){ target['e'+event+fn]( window.event ); }
        target.attachEvent( 'on'+event, target[event+fn] );
    } else {
      target.addEventListener( event, fn, false );
    }
}

/**
 * a browser-friendly way to remove events
 * @param {object} target - element losing event
 * @param {string} event - event type
 * @param {function} fn - callback
 */
var removeEvent = function( target, event, fn ) {
    if ( target.detachEvent ) {
        target.detachEvent( 'on'+event, target[event+fn] );
        target[event+fn] = null;
    } else {
    target.removeEventListener( event, fn, false );
    }
}

/**
 * a borwser-friendly way to prevent event defaults
 */
var preventDefault = function(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
}
