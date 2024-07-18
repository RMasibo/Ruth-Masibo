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
    
    alert('Please send your email message via ruthnyongesa466@gmail.com or reach via linkedIn');
    document.getElementById('contactForm').reset();
});
