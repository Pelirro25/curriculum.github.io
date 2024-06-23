document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {

        document.getElementById('form-message').textContent = 'Mensaje enviado con éxito';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-message').textContent = 'Por favor, complete todos los campos';
        document.getElementById('form-message').style.color = 'red';
    }
});
