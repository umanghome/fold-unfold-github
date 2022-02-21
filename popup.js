/**
 * Generate the code.
 * @param {String} bool
 * @return {String}
 */
function generateCode (bool) {
  return "document.querySelectorAll('.btn-octicon.js-details-target[aria-expanded=" + bool + "]').forEach(e => e.click());";
}

/**
 * Generate the listener.
 * @param {String} code 
 * @return {Function}
 */
function generateListener (code) {
  return function () {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: code
        }
      );
    });
  }
}

const fold = generateCode('true');
const unfold = generateCode('false');

document.querySelector('#fold').addEventListener('click', generateListener(fold));
document.querySelector('#unfold').addEventListener('click', generateListener(unfold));