// script.js

const token = '8296204957:AAHo2pSYYwpzAfmDz_mxdI-fE_m9Fev7TqE';
const chatId = '-1003852154101';

// Function to send message
function sendMessage(message) {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: message,
    };

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log('Message sent:', data))
    .catch(error => console.error('Error:', error));
}

// Smooth animations
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);
    const message = `Name: ${formData.get('name')} \nMessage: ${formData.get('message')}`;

    sendMessage(message);

    // Smooth animation for the form
    form.style.transition = 'opacity 0.5s ease';
    form.style.opacity = '0';

    setTimeout(() => {
        form.reset();
        form.style.opacity = '1';
    }, 500);
});