// Add event listener to navigation menu links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = form.querySelector('input[type="text"]');
  alert(`You entered: ${input.value}`);
});

// Add animation to image on hover
const img = document.querySelector('img');
img.addEventListener('mouseover', (event) => {
  event.target.style.transform = 'scale(1.2)';
});
img.addEventListener('mouseout', (event) => {
  event.target.style.transform = 'scale(1)';
});
