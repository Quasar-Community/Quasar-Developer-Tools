const openEmulator = (url, width, height) => {
    const emulatorDetails = {
        url : url,
        type : 'popup',
        top : 10,
        left : 30,
        width : width,
        height :height,
    };
    chrome.windows.create(emulatorDetails);
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.type === 'openEmulator') {
        console.log(message);
        const sendDetails = {
            type : 'pageUrl',
        };
        chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, sendDetails, function(response) {
                if (message.val === 'iphone') {
                    openEmulator(response, 750, 750);
                }
                else {
                    openEmulator(response, 1000, 1000);
                }
            });
        });
    sendResponse('Opening the Emulator');
    }
});