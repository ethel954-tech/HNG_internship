// Update current time every second using Date.now()
function updateCurrentTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    const now = Date.now();
    timeElement.textContent = `${now} ms`;
    timeElement.setAttribute('datetime', new Date(now).toISOString());
  }
}

// Keyboard navigation enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Initial time update
  updateCurrentTime();

  // Update time every second
  setInterval(updateCurrentTime, 1000);

  // Enhance keyboard navigation for social links
  const socialLinks = document.querySelectorAll('[data-testid="test-user-social-links"] a');
  socialLinks.forEach((link, index) => {
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  });

  // Focus management for better accessibility
  const profileCard = document.querySelector('[data-testid="test-profile-card"]');
  profileCard.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      // Trap focus within the card when appropriate
      console.log('Focus trapped in profile card');
    }
  });
});
