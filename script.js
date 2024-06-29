function generateMessage(type) {
    let message = '';
    switch(type) {
        case 'message1':
            message = 'This is the first generated message.';
            break;
        case 'message2':
            message = 'This is the second generated message.';
            break;
        case 'message3':
            message = 'This is the third generated message.';
            break;
        default:
            message = 'Unknown message type.';
    }
    document.getElementById('output').value = message;
}

function copyToClipboard() {
    const textarea = document.getElementById('output');
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Message copied to clipboard!');
}

