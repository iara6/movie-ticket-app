/* DATE */

import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const date = document.querySelector('.date');
const today = dayjs(); 
const tomorrow = today.add(1, 'days');

date.innerHTML = tomorrow.format('MMM D, YYYY');


/* TICKETS */

const availableSeats = document.querySelectorAll('.available');
const tickets = document.querySelector('.tickets');
const total = document.querySelector('.total');

let totalPrice = 0;
total.innerHTML = `$${totalPrice}`;
let ticketsNumber = 0;
tickets.textContent = ticketsNumber;

console.log(availableSeats);

availableSeats.forEach((seat) => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');

    if (seat.classList.contains('selected')) {
      ticketsNumber++;
      totalPrice += 9.5;
    } else {
      ticketsNumber--;
      totalPrice -= 9.5;
    }

    tickets.textContent = ticketsNumber;
    total.innerHTML = `$${totalPrice.toFixed(2)}`;
  });
});


console.log(Number((Math.round(950) / 100).toFixed(2)));
