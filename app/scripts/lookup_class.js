/**
 * Change url to OSCAR class look up
 */

'use strict';

var url = 'https://oscar.gatech.edu/pls/bprod/bwskfcls.p_sel_crse_search';
var el = document.querySelector('iframe');

el.src = url;