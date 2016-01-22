# detect-animation-end-helper

A helper script to detect the event type that fires on end when using either css animation or transition methods.

Inspired by [Detecting CSS Animation Completion with JavaScript](https://davidwalsh.name/css-animation-callback) .

### example

```
var eventType = require('detect-animation-end-helper')

var anim = document.querySelector('#anim')

var animevent = eventType() // animation is default
animevent && anim.addEventListener(animevent, function(evt) {
  console.log('animation complete')
})

var trans = document.querySelector('#trans')

var transevent = eventType('transition')
transevent && trans.addEventListener(transevent, function(evt) {
  console.log('transition complete')
})

```

### install

`npm install detect-animation-end-helper`

### license

MIT
