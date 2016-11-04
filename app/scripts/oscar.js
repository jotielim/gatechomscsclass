/**
 * Navigate to OSCAR
 */

'use strict';

var elements = document.querySelectorAll('tr.uportal-background-content [id^="col_"]')[1].getElementsByTagName('a');
var url = 'https://buzzport.gatech.edu/render.UserLayoutRootNode.uP?uP_tparam=utf&utf=%2Fcp%2Fip%2Flogin%3Fsys%3Dsct%26url%3Dhttps%3A%2F%2Foscar.gatech.edu/pls/bprod%2Fztgkauth.zp_authorize_from_login';
var el;

for (var i = 0; i < elements.length; i++) {
  el = elements[i];
  if (el.href === url) {
    break;
  }
  el = null;
}

if (el) {
  el.click();
}