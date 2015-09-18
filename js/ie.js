// ---------------------------------------------------------------
// IE-friendly JS
// @Author: Mark McCann
// @License: None, Public Domain
// ---------------------------------------------------------------
 
/**
 * add event
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
 * remove events
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
 * prevent default
 */
var preventDefault = function(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
}

/**
 * ajax
 * @param {string} method - request type, get or post
 * @param {string} url - url to be called
 * @param {boolean} async - asynchronous call or not
 */
var ajax = function ( method, url, async ) {
    var xmlhttp;
    if ( window.XMLHttpRequest ) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject( "Microsoft.XMLHTTP" );
    }
    xmlhttp.onreadystatechange = function () {
      if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
        var response = JSON.parse( xmlhttp.responseText );  
        // do something ...
      }
    }
    xmlhttp.open( method, url, async);
    xmlhttp.send();
}

/**
 * determines if browser is IE and which version
 * @return {int,false}
 */
var isIE = function () {
    var myNav = navigator.userAgent.toLowerCase();
    return ( myNav.indexOf('msie') != -1 ) ? parseInt( myNav.split('msie')[1] ) : false;
}
