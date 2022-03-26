$('#emulator').change(function() {
    const $option = $(this).find('option:selected');
    const value = $option.val();
    const sendDetails = {
        val : value,
        type : 'openEmulator',
    };
    chrome.runtime.sendMessage(sendDetails, (response) => {
        console.log('Sending Your Code');
    });
});