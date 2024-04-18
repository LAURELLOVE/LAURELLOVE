document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the values from the form
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Simple validation check
    if (!fullName || !email || !message) {
      alert('Please fill out all fields.');
    } else {
      // Process the form data here, such as sending it to a server
      alert('Thank you for your message, ' + fullName + '!');
    }
  });
  