const countdown = ()=> {

  const jubileeDate = new Date('December 15, 2024 10:00:00').getTime();
const now = new Date().getTime();
const distance = jubileeDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById('days').innerText = days;
document.getElementById('hours').innerText = hours;
document.getElementById('minutes').innerText = minutes;
document.getElementById('seconds').innerText = seconds;


setInterval(countdown, 1000);
countdown();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
});
});

}