import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
/* https://day.js.org/ */
import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.module.mjs';
/* https://confetti.js.org/ */


/* DATE */

const date = document.querySelector('.date');
const today = dayjs(); 
const tomorrow = today.add(1, 'days');

date.innerHTML = tomorrow.format('MMM D, YYYY');


/* TICKETS */

const availableSeats = document.querySelectorAll('.available');
const tickets = document.querySelector('.tickets');
const total = document.querySelector('.total');
const bookedSeats = document.querySelector('.booked-seats');

let totalPrice = 0;
total.innerHTML = `$${totalPrice}`;
let ticketsNumber = 0;
tickets.textContent = ticketsNumber;
let row = '';
let seatNumber = 0;
let allBookedSeats = [];

availableSeats.forEach((seat) => {
  seat.addEventListener('click', () => {
    row = seat.closest('[class^="row-"]');
    const rowLetter = seat.parentNode.parentNode.className.slice(-1).toUpperCase();
    const seatsInRow = Array.from(row.querySelectorAll('svg'));

    seatNumber = seatsInRow.indexOf(seat) + 1;
    seat.classList.toggle('selected');

    const seatData = `Row ${rowLetter}, ${seatNumber}`

    if (seat.classList.contains('selected')) {
      ticketsNumber++;
      totalPrice += 9.5;
      allBookedSeats.push(seatData);
    } else {
      ticketsNumber--;
      totalPrice -= 9.5;
      allBookedSeats = allBookedSeats.filter(seat => seat !== seatData);
    }

    tickets.textContent = ticketsNumber;
    total.innerHTML = `$${totalPrice.toFixed(2)}`;
    bookedSeats.innerHTML = allBookedSeats.join('; ');
  });
});


/* CONFETTI */

function launchConfetti() {
  const count = 200;
  const defaults = { origin: { y: 0.7 } };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}


/* SHOW/CLOSE MODAL */

const nextBtn = document.querySelector('.next-button');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close-button');
const movieTitle = document.querySelector('.poster-movie-title').textContent;
const bookedMovieTitle = document.querySelector('.movie-title');
const bookedShowDate = document.querySelector('.show-date');
const bookedTicketsNumber = document.querySelector('.booked-tickets');

function renderBookingDetails() {
  bookedMovieTitle.textContent = movieTitle;
  bookedShowDate.innerHTML = tomorrow.format('dddd, MMM D') + ' - 7:30PM';
  bookedTicketsNumber.innerHTML = Number(tickets.textContent) === 1 ? `${tickets.textContent} ticket` : `${tickets.textContent} tickets`;
};

nextBtn.addEventListener('click', () => {
  if (tickets.textContent > 0) {
    renderBookingDetails();
    modal.classList.add('open');
    requestAnimationFrame(() => modalContent.classList.add('modal-open'));
    launchConfetti();   
  }
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

