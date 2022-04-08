const openEmulator = (url, width, height) => {
    const windowDetails = {
        url : url,
        type : 'popup',
        top : 10,
        left : 300,
        width : width,
        height : height,
        focused : true,
    };
    chrome.windows.create(windowDetails);
};

const getSize = (phoneName) => {
    let size = '';
    switch(phoneName) {
        case 'iPhone 6S Plus' : 
            size = {
                width : 414,
                height : 736,                
            }
            break;
        case 'iPhone 12 mini' : 
            size = {
                width : 360,
                height : 780,                
            }
            break;
        case 'iPhone 12' : 
            size = {
                width : 390,
                height : 844,                
            }
            break;
        case 'iPhone 12 Pro Max' : 
            size = {
                width : 428,
                height : 926,                
            }
            break;
        case 'iPad Pro' : 
            size = {
                width : 1024,
                height : 1366,                
            }
            break;
        case 'Apple iPad 10.2' : 
            size = {
                width : 810,
                height : 1080,                
            }
            break;
        case 'Samsung S22 ultra' : 
            size = {
                width : 360,
                height : 772,                
            }
            break;
        case 'Galaxy S9' : 
            size = {
                width : 360,
                height : 740,                
            }
            break;
        case 'Galaxy Note 9' : 
            size = {
                width : 414,
                height : 846,                
            }
            break;
        case 'Galaxy A30' : 
            size = {
                width : 412,
                height : 892,                
            }
            break;
        case 'Galaxy S20 Ultra' : 
            size = {
                width : 412,
                height : 915,                
            }
            break;
        case 'OnePlus 6T' : 
            size = {
                width : 412,
                height : 892,                
            }
            break;
        case 'OnePlus 8T' : 
            size = {
                width : 412,
                height : 914,                
            }
            break;
        case 'OnePlus 8' : 
            size = {
                width : 412,
                height : 915,                
            }
            break;
        case 'Xperia L4' : 
            size = {
                width : 360,
                height : 840,                
            }
            break;
        case 'Xperia Z5' : 
            size = {
                width : 360,
                height : 640,                
            }
            break;
        case 'LG Nexus 5' : 
            size = {
                width : 360,
                height : 640,                
            }
            break;
        case 'LG G6' : 
            size = {
                width : 360,
                height : 720,                
            }
            break;
        case 'LG W30' : 
            size = {
                width : 360,
                height : 760,                
            }
            break;
        case 'LG G7 Fit' : 
            size = {
                width : 360,
                height : 780,                
            }
            break;
        case 'MatePad Pro' : 
            size = {
                width : 1280,
                height : 800,                
            }
            break;
        case 'Huawei P9' : 
            size = {
                width : 360,
                height : 640,                
            }
            break;
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
            break;
        case 'Nova 7i' : 
            size = {
                width : 360,
                height : 770,                
            }
            break;
        case 'Huawei P40' : 
            size = {
                width : 360,
                height : 780,                
            }
            break;
        case 'Redmi Note 7' : 
            size = {
                width : 393,
                height : 851,                
            }
            break;
        case 'Redmi Mi 3' : 
            size = {
                width : 360,
                height : 780,                
            }
            break;
        case 'Redmi Note 9 Pro' : 
            size = {
                width : 393,
                height : 873,                
            }
            break;
        case 'Poco X4 Pro' : 
            size = {
                width : 360,
                height : 780,                
            }
            break;
        case 'Pixel' : 
            size = {
                width : 412,
                height : 732,                
            }
            break;
        case 'Pixel 3' : 
            size = {
                width : 412,
                height : 732,                
            }
            break;
        case 'Pixel 3 XL' : 
            size = {
                width : 412,
                height : 732,                
            }
            break;
        case 'Pixel 4' : 
            size = {
                width : 393,
                height : 851,                
            }
            break;
        case 'Pixel 4 XL' : 
            size = {
                width : 412,
                height : 780,                
            }
            break;
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
    else if(message.type === 'openRequest') {
        openEmulator('../html/request.html', 800, 600);
        sendResponse('Opening the Request Viewer');
    }
});