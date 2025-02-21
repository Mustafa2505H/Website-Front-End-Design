function handleScroll() {
    var header = document.querySelector('header'); // Selects the header element
    var scrollPosition = window.scrollY; // Gets the current vertical scroll position
    
    if (scrollPosition > 0) { // Checks if the user has scrolled down
        if (!header.classList.contains('fixed-header')) { // Prevents redundant class additions
            header.classList.add('fixed-header'); // Adds a CSS class to fix the header
        }
    } else {
        header.classList.remove('fixed-header'); // Removes the fixed header class when at top
    }
}
// Adds an event listener to detect scrolling and trigger the function
window.addEventListener('scroll', handleScroll);