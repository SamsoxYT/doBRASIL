document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Merci ${name} pour votre message. Nous vous répondrons bientôt à ${email}.`);

    // Réinitialisation du formulaire
    document.getElementById('contact-form').reset();
});
