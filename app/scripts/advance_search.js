/**
 * Select CS subject and Online campus
 */

'use strict';

var subject = document.querySelector('#subj_id');
var campus = document.querySelector('#camp_id');
var advanceSearchBtn = document.querySelector('form[action="/pls/bprod/bwskfcls.P_GetCrse_Advanced"] input[type="submit"]');

var subjectsToSelect = ['CS','CSE'];

for(var i = 0; i < subject.length; i++) {
  for (var k = 0; k < subjectsToSelect.length; k++){
    if(subject.options[i].value == subjectsToSelect[k]) {
      subject.options[i].selected = true;
    }
  }
}
campus.value = 'O';

advanceSearchBtn.click();
