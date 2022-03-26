// Send the Current URL to background worker.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'pageUrl') {
        sendResponse(window.location.href);
    }
});