/**
 * Navigate to student page
 */

'use strict';

var elements = document.getElementById('utilityNav').getElementsByClassName('dragTab');
var el;

for (var i = 0; i < elements.length; i++) {
  el = elements[i];
  if (el.childNodes[0].innerHTML.toLowerCase().indexOf('student') !== -1) {
    break;
  }
  el = null;
}

if (el) {
  el.childNodes[0].click();
}