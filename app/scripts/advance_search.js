/**
 * Select CS subject and Online campus
 */

'use strict';

var subject = document.querySelector('#subj_id');
var campus = document.querySelector('#camp_id');
var advanceSearchBtn = document.querySelector('form[action="/pls/bprod/bwskfcls.P_GetCrse_Advanced"] input[type="submit"]');

subject.value = 'CS';
campus.value = 'O';

advanceSearchBtn.click();