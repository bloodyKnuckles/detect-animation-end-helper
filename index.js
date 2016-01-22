module.exports = function (type) {
  var types
  if ( type && ('transition' === type || 'trans' === type) ) {
    types = {
      'OTransition':      'oTransitionEnd',
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition':    'transitionend',
      'transition':       'transitionend'
    }
  }
  else { // animation is default
    types = {
      'OAnimation':      'oAnimationEnd',
      'WebkitAnimation': 'webkitAnimationEnd',
      'MozAnimation':    'animationend',
      'animation':       'animationend'
    }
  }
  var elem = document.createElement('fake')
  return Object.keys(types).reduce(function (prev, trans) {
    return undefined !== elem.style[trans]? types[trans]: prev
  }, '')
}
