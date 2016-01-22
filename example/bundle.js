(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var eventType = require('../')

var anim = document.querySelector('#anim')
var trans = document.querySelector('#trans')

var animevent = eventType() // animation is default
animevent && anim.addEventListener(animevent, function(evt) {
  document.getElementById('animmessage').innerText = 'animation complete'
})

var transevent = eventType('transition')
transevent && trans.addEventListener(transevent, function(evt) {
  document.getElementById('transmessage').innerText = 'transition complete'
})
setTimeout(function () {
  trans.className = 'hide'
}, 0)


},{"../":1}]},{},[2]);
