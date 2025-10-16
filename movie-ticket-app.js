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
    console.log();

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


nextBtn.addEventListener('click', () => {
  modal.classList.add('open');
  requestAnimationFrame(() => modalContent.classList.add('modal-open'));
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

const movieTitle = document.querySelector('.poster-movie-title').textContent;
const bookedMovieTitle = document.querySelector('.movie-title');

bookedMovieTitle.textContent = movieTitle;

const bookedShowDate = document.querySelector('.show-date');
bookedShowDate.innerHTML = tomorrow.format('dddd, MMM D') + ' - 7:30PM';

