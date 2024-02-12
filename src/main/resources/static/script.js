let tickets = [];

function buyTicket() {
    // Get form values
    let film = document.getElementById('film').value;
    let number = document.getElementById('number').value;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    // Initialize flag variable
    let isFormValid = true;

    // Validate form values
    if (!film) {
        document.getElementById('filmError').innerText = 'Please select a film.';
        isFormValid = false;
    } else {
        document.getElementById('filmError').innerText = '';
    }
    if (!number) {
        document.getElementById('numberError').innerText = 'Please enter a valid number of tickets.';
        isFormValid = false;
    } else {
        document.getElementById('numberError').innerText = '';
    }
    if (!firstName) {
        document.getElementById('firstNameError').innerText = 'Please enter a valid first name.';
        isFormValid = false;
    } else {
        document.getElementById('firstNameError').innerText = '';
    }
    if (!lastName) {
        document.getElementById('lastNameError').innerText = 'Please enter a valid last name.';
        isFormValid = false;
    } else {
        document.getElementById('lastNameError').innerText = '';
    }
    if (!phone) {
        document.getElementById('phoneError').innerText = 'Please enter a valid phone number.';
        isFormValid = false;
    } else {
        document.getElementById('phoneError').innerText = '';
    }
    if (!email) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isFormValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // If form is valid, add ticket to array and display it
    if (isFormValid) {
        let ticket = {
            film: film,
            number: number,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        };
        tickets.push(ticket);

        let ticketsDiv = document.getElementById('tickets');
        ticketsDiv.innerHTML += `<p>${ticket.film}, ${ticket.number}, ${ticket.firstName}, ${ticket.lastName}, ${ticket.phone}, ${ticket.email}</p>`;
    }
}

function deleteAllTickets() {
    tickets = [];
    document.getElementById('tickets').innerHTML = '';
}