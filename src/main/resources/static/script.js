let tickets = [];

function buyTicket() {
    // Get form values
    let film = document.getElementById('film').value;
    let number = document.getElementById('number').value;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    // Validate form values
    if (!film) {
        document.getElementById('filmError').innerText = 'Please select a film.';
    }
    if (!number) {
        document.getElementById('numberError').innerText = 'Please enter number of tickets.';

    if (!firstName) {
            document.getElementById('numberError').innerText = 'Please enter your first name.';
        }

    if (!lastName) {
            document.getElementById('numberError').innerText = 'Please enter your last name.';
        }

    if (!phone) {
            document.getElementById('numberError').innerText = 'Please enter your phone number.';
        }

    if (!email) {
            document.getElementById('numberError').innerText = 'Please enter your email address.';
        }

    // If form is valid, add ticket to array
    if (film && number && firstName && lastName && phone && email) {
        let ticket = {
            film: film,
            number: number,
            firstName: firstName,
            lastName : lastName,
            phone : phone,
            email : email
        };
        tickets.push(ticket);

        // Display tickets
        let ticketsDiv = document.getElementById('tickets');
        ticketsDiv.innerHTML = '';
        for (let i = 0; i < tickets.length; i++) {
            let ticket = tickets[i];
            ticketsDiv.innerHTML += `<p>${ticket.film}, ${ticket.number}, ${ticket.firstName},
            ${ticket.lastName},${ticket.phone},${ticket.email}</p>`;
        }
    }
}

function deleteAllTickets() {
    tickets = [];
    document.getElementById('tickets').innerHTML = '';
}};