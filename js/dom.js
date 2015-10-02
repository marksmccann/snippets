// -----------------------------------------------------------------
// DOM Traversal and Manipulation
// @author: Mark McCann (www.markmccann.me)
// @license: None, Public Domain
// -----------------------------------------------------------------

/**
 * has class
 * @param {object} target
 * @param {string} className
 * @return {boolean} 
 */
var hasClass = function( target, className ) {
    return target.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
}

/**
 * add class
 * @param {object/array} target
 * @param {string} className
 * @require hasClass()
 */
var addClass = function( target, className ) {
    if( ! hasClass(target, className) ) {
        target.className += target.className.length == 0 ? className : " " + className;
    }
}

/**
 * remove class
 * @param {object/array} target
 * @param {string} className
 * @require hasClass()
 */
var removeClass = function( target, className ) {
    if( hasClass(target, className) ) {
        var re = new RegExp("(\\s|^)" + className + "(\\s|$)", "g");
        target.className = target.className.replace(re , '');
    }
}

/**
 * toggle a class
 * @param {object} target
 * @param {string} className
 * @require hasClass(), addClass(), removeClass()
 */
var toggleClass = function( target, className ) {
    hasClass(target,className) ? removeClass(target,className) : addClass(target,className);
}

// IE10+ Versions:
document.getElementById("MyElement").classList.contains('class');
document.getElementById("MyElement").classList.remove('class');
document.getElementById("MyElement").classList.toggle('class');
document.getElementById("MyElement").classList.add('class');

/**
 * inserts element after target element
 * @param  {dom object} newElement
 * @param  {dom object} target
 */
var insertAfter = function ( newElement, target ) {
    var parent = target.parentNode;
    if( parent.lastchild == target ) {
        parent.appendChild( newElement );
    } else {
        parent.insertBefore( newElement, target.nextSibling );
    }
    element.parentNode.replaceChild( container, element );
}
 
/**
 * replaces node
 * @param  {dom object} newElement
 * @param  {dom object} target
 */
var replace = function( newElement, target ) {
    target.parentNode.replaceChild( newElement, target );
}

/**
 * removes attribute
 * @param  {dom object} target
 * @param  {string} attr
 */
var removeAttr = function ( target, attr ) {
    if ( target.hasAttribute( attr ) ) target.removeAttribute( attr );
},

/**
 * retrieves value
 * @param  {dom object} target
 * @param  {string} attr
 */
var getAttr = function ( target, attr ) {
    if ( target.hasAttribute( attr ) ) return target.getAttribute( attr );
},

/**
 * wraps an element with another
 * @param {object} the element doing the wrapping
 * @param {object} the element being wrapped
 */
var wrapElement = function( wrapper, element ) {
                
    // Cache the current parent and sibling.
    var parent  = element.parentNode;
    var sibling = element.nextSibling;
                
    // Wrap the element (is automatically removed from its current parent).
    wrapper.appendChild( element );
                
    // If the element had a sibling, insert the wrapper before
    // the sibling to maintain the HTML structure; otherwise, just
    // append it to the parent.
    if ( sibling ) {
        parent.insertBefore( wrapper, sibling );
    } else {
        parent.appendChild( wrapper );
    }

    // return the container
    return wrapper;
}
