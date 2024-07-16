document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        fullName: document.getElementById('fullName').value,
        companyName: document.getElementById('companyName').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        linkedin: document.getElementById('linkedin').value,
    };

    console.log('Sending email with the following data:', formData);
    
    alert('Your message has been submitted!');
    document.getElementById('contactForm').reset();
});
