// Select all images and modals
const projectImages = document.querySelectorAll('.project-image');
const modals = document.querySelectorAll('.modal');

// Add event listener to each project image
projectImages.forEach((image) => {
  image.addEventListener('click', () => {
    const modalId = image.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';
    }
  });
});

// Add event listener to close buttons
modals.forEach((modal) => {
  const closeBtn = modal.querySelector('.close');
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside of content
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
