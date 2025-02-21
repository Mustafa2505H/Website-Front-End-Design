document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page refresh on submission

    // Updates display elements with user input
    document.getElementById('displayFirstName').textContent = 'First Name: ' + document.getElementById('firstName').value;
    document.getElementById('displayLastName').textContent = 'Last Name: ' + document.getElementById('lastName').value;
    document.getElementById('displayAddress').textContent = 'Address: ' + document.getElementById('address').value;
    document.getElementById('displayCity').textContent = 'City: ' + document.getElementById('city').value;
    document.getElementById('displayPostcode').textContent = 'Postcode: ' + document.getElementById('postcode').value;
    document.getElementById('displayPhone').textContent = 'Phone: ' + document.getElementById('phone').value;
    document.getElementById('displayEmail').textContent = 'Email: ' + document.getElementById('email').value;

    document.getElementById('infoBox').style.display = 'block'; // Makes info box visible
});