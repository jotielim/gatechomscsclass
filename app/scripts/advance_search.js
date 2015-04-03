/**
 * Select CS subject and Online campus
 */

'use strict';

var subject = document.querySelector('#subj_id');
var campus = document.querySelector('#camp_id');
var advanceSearchBtn = document.querySelector('form[action="/pls/bprod/bwskfcls.P_GetCrse_Advanced"] input[type="submit"]');

var target_subjects = ['CS','CSE'];

for(var i = 0; i < subject.length; i++) {
    for (var k = 0; k < target_subjects.length; k++){
        if(subject.options[i].value == target_subjects[k]) {
            subject.options[i].selected = true;
        }
    }
}

campus.value = 'O';

advanceSearchBtn.click();
