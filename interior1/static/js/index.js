function moveCarousel(button, direction) {
    const carousel = button.parentElement; // Get the current carousel (parent of the button)
    const track = carousel.querySelector('.carousel-track'); // Get the track inside this carousel
    const items = track.querySelectorAll('.carousel-item'); // Get all items inside the track
    const itemsPerSlide = 3; // Adjust based on your display (3 items at a time)
    
    const totalItems = items.length;
    const totalVisibleSlides = Math.ceil(totalItems / itemsPerSlide);

    // Keep track of the current index
    let currentIndex = carousel.getAttribute('data-index') || 0;
    currentIndex = parseInt(currentIndex);

    // Update the current index based on direction (1 = next, -1 = previous)
    currentIndex += direction;

    // Loop carousel if index goes out of bounds
    if (currentIndex >= totalVisibleSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalVisibleSlides - 1;
    }

    // Set the new index to the carousel container
    carousel.setAttribute('data-index', currentIndex);

    // Apply transform to the track
    const newTransformValue = `translateX(-${currentIndex * 100}%)`;
    track.style.transform = newTransformValue;
}


document.getElementById('current-year').textContent = new Date().getFullYear();

