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

availableSeats.forEach((seat) => {
  seat.addEventListener('click', () => {
    console.log(seat.parentNode.parentNode.className.slice(-1).toUpperCase());

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
;

/* SHOW/CLOSE MODAL */

const nextBtn = document.querySelector('.next-button');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close-button');

const movieTitle = document.querySelector('.poster-movie-title').textContent;
const bookedMovieTitle = document.querySelector('.movie-title');
const bookedShowDate = document.querySelector('.show-date');
const bookedTicketsNumber = document.querySelector('.booked-tickets');

nextBtn.addEventListener('click', () => {
  if (tickets.textContent > 0) {
    modal.classList.add('open');
    requestAnimationFrame(() => modalContent.classList.add('modal-open'));   
  }
  renderBookingDetails();
});

function closeModal() {
  modal.classList.remove('open');
  modalContent.classList.remove('modal-open');
};

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

closeBtn.addEventListener('click', closeModal);

/* BOOKING DETAILS */

/* const movieTitle = document.querySelector('.poster-movie-title').textContent;
const bookedMovieTitle = document.querySelector('.movie-title');

bookedMovieTitle.textContent = movieTitle;

const bookedShowDate = document.querySelector('.show-date');
bookedShowDate.innerHTML = tomorrow.format('dddd, MMM D') + ' - 7:30PM';

const bookedTicketsNumber = document.querySelector('.booked-tickets');

bookedTicketsNumber.innerHTML = `${tickets.textContent} tickets`; */



function renderBookingDetails() {
  bookedMovieTitle.textContent = movieTitle;
  bookedShowDate.innerHTML = tomorrow.format('dddd, MMM D') + ' - 7:30PM';
  bookedTicketsNumber.innerHTML = Number(tickets.textContent) === 1 ? `${tickets.textContent} ticket` : `${tickets.textContent} tickets`;

};