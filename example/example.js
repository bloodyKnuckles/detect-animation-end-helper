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

