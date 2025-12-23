const { ipcRenderer } = require('electron');  // Zugriff auf die Electron-API

const messageInput = document.getElementById('messageInput');
const sendMessageBtn = document.getElementById('sendMessageBtn');
const messagesDiv = document.getElementById('messages');

// Event-Listener für den Senden-Button
sendMessageBtn.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        // Nachricht an den Main-Prozess senden
        ipcRenderer.send('send-message', message);
        messageInput.value = '';  // Eingabefeld leeren
    }
});

// Empfang von Nachrichten vom Main-Prozess
ipcRenderer.on('receive-message', (event, message) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
});
