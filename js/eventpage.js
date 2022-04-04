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

const getSize = (phoneName) => {
    let size = '';
    switch(phoneName) {
        case 'iPhone 6S Plus' : 
            size = {
                width : 414,
                height : 736,                
            }
        case 'iPhone 12 mini' : 
            size = {
                width : 360,
                height : 780,                
            }
        case 'iPhone 12' : 
            size = {
                width : 390,
                height : 844,                
            }
        case 'iPhone 12 Pro Max' : 
            size = {
                width : 428,
                height : 926,                
            }
        case 'iPad Pro' : 
            size = {
                width : 1024,
                height : 1366,                
            }
        case 'Apple iPad 10.2' : 
            size = {
                width : 810,
                height : 1080,                
            }
        case 'Samsung S22 ultra' : 
            size = {
                width : 360,
                height : 772,                
            }
        case 'Galaxy S9' : 
            size = {
                width : 360,
                height : 740,                
            }
        case 'Galaxy Note 9' : 
            size = {
                width : 414,
                height : 846,                
            }
        case 'Galaxy A30' : 
            size = {
                width : 412,
                height : 892,                
            }
        case 'Galaxy S20 Ultra' : 
            size = {
                width : 412,
                height : 915,                
            }
        case 'OnePlus 6T' : 
            size = {
                width : 412,
                height : 892,                
            }
        case 'OnePlus 8T' : 
            size = {
                width : 412,
                height : 914,                
            }
        case 'OnePlus 8' : 
            size = {
                width : 412,
                height : 915,                
            }
        case 'Xperia L4' : 
            size = {
                width : 360,
                height : 840,                
            }
        case 'Xperia Z5' : 
            size = {
                width : 360,
                height : 640,                
            }
        case 'LG Nexus 5' : 
            size = {
                width : 360,
                height : 640,                
            }
        case 'LG G6' : 
            size = {
                width : 360,
                height : 720,                
            }
        case 'LG W30' : 
            size = {
                width : 360,
                height : 760,                
            }
        case 'LG G7 Fit' : 
            size = {
                width : 360,
                height : 780,                
            }
        case 'MatePad Pro' : 
            size = {
                width : 1280,
                height : 800,                
            }
        case 'Huawei P9' : 
            size = {
                width : 360,
                height : 640,                
            }
        case 'Huawei Mate 10 Lite' : 
            size = {
                width : 360,
                height : 720,                
            }
        case 'Huawei P20 lite' : 
            size = {
                width : 360,
                height : 760,                
            }
        case 'Nova 7i' : 
            size = {
                width : 360,
                height : 770,                
            }
        case 'Huawei P40' : 
            size = {
                width : 360,
                height : 780,                
            }
        case 'Redmi Note 7' : 
            size = {
                width : 393,
                height : 851,                
            }
        case 'Redmi Mi 3' : 
            size = {
                width : 360,
                height : 780,                
            }
        case 'Redmi Note 9 Pro' : 
            size = {
                width : 393,
                height : 873,                
            }
        case 'Poco X4 Pro' : 
            size = {
                width : 360,
                height : 780,                
            }
        case 'Pixel' : 
            size = {
                width : 412,
                height : 732,                
            }
        case 'Pixel 3' : 
            size = {
                width : 412,
                height : 732,                
            }
        case 'Pixel 3 XL' : 
            size = {
                width : 412,
                height : 732,                
            }
        case 'Pixel 4' : 
            size = {
                width : 393,
                height : 851,                
            }
        case 'Pixel 4 XL' : 
            size = {
                width : 412,
                height : 780,                
            }
        default :
            size = {
                width : 360,
                height : 700,
            }
    }
    return size;
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.type === 'openEmulator') {
        const sendDetails = {
            type : 'pageUrl',
        };
        chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, sendDetails, function(response) {
                size = getSize(message.val);
                openEmulator(response, size.width, size.height);
            });
        });
    sendResponse('Opening the Emulator');
    }
});