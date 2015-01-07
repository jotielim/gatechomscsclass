'use strict';

chrome.browserAction.setBadgeText({text: 'OMS'});

/**
 * Navigate to student page
 */
var studentTab = function (tab) {
  chrome.tabs.executeScript(null, { file: 'scripts/student_tab.js', runAt: 'document_end' }, function () {
    chrome.tabs.onUpdated.addListener(function studentTabListener (_tabId, info) {
      if (tab.id === _tabId && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(studentTabListener);
        oscar(tab);
      }
    });
  });
};

/**
 * Navigate to OSCAR
 */
var oscar = function (tab) {
  chrome.tabs.executeScript(null, { file: 'scripts/oscar.js', runAt: 'document_end' }, function () {
    chrome.tabs.onUpdated.addListener(function oscarListener (_tabId, info) {
      if (tab.id === _tabId && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(oscarListener);
        lookupClass(tab);
      }
    });
  });
};

/**
 * Change url to OSCAR class look up
 */
var lookupClass = function (tab) {
  chrome.tabs.update(tab.id, {
    url: 'https://oscar.gatech.edu/pls/bprod/bwskfcls.p_sel_crse_search'
  }, function () {
    chrome.tabs.onUpdated.addListener(function lookupClassListener (_tabId, info) {
      if (tab.id === _tabId && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(lookupClassListener);
        selectTerm(tab);
      }
    });
  });
};

/**
 * Select the most recent term
 */
var selectTerm = function (tab) {
  chrome.tabs.executeScript(null, { file: 'scripts/select_term.js', runAt: 'document_end' }, function () {
    chrome.tabs.onUpdated.addListener(function selectTermListener (_tabId, info) {
      if (tab.id === _tabId && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(selectTermListener);
        courseSearch(tab);
      }
    });
  });
};

/**
 * Navigate to advance search
 */
var courseSearch = function (tab) {
  chrome.tabs.executeScript({
    code: 'document.querySelectorAll(\'form[action="/pls/bprod/bwskfcls.P_GetCrse"] input[type="submit"]\')[1].click()'
  }, function () {
    chrome.tabs.onUpdated.addListener(function courseSearchListener (_tabId, info) {
      if (tab.id === _tabId && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(courseSearchListener);
        advanceSearch(tab);
      }
    });
  });
};

/**
 * Select CS subject and Online campus
 */
var advanceSearch = function (tab) {
  chrome.tabs.executeScript(null, { file: 'scripts/advance_search.js', runAt: 'document_end' }, function () {
    chrome.tabs.onUpdated.addListener(function advanceSearchListener (_tabId, info) {
      if (tab.id === _tabId && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(advanceSearchListener);
      }
    });
  });
};

/**
 * On browser icon clicked
 */
chrome.browserAction.onClicked.addListener(function (tab) {
  if (tab.url.indexOf('http://buzzport.gatech.edu') !== -1) {
    studentTab(tab);
  } else if (tab.url.indexOf('https://oscar.gatech.edu') !== -1) {
    lookupClass(tab);
  }
});