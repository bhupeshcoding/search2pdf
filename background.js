


// filepath: /Users/joshi/Desktop/chrome-extention/background.js

/**
 * background.js
 * Listens for messages (like openTab) from the popup script,
 * and opens a new Chrome tab with the provided URL.
 */

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "openTab" && request.url) {
        chrome.tabs.create({ url: request.url });
    }
});
