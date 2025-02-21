document.addEventListener('DOMContentLoaded', () => { // Ensures script runs after page loads
    const reviewForm = document.getElementById('review-form'); // Grabs the review form
    const reviewsContainer = document.getElementById('reviews-container'); // Container for reviews

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents page reload on form submission

        // Retrieves user input values
        const name = document.getElementById('reviewer-name').value;
        const rating = document.getElementById('review-rating').value;
        const comments = document.getElementById('review-comments').value;

        // Creates a review container element
        const review = document.createElement('div');
        review.classList.add('review');

        // Creates and appends name
        const reviewName = document.createElement('h2');
        reviewName.textContent = name;
        review.appendChild(reviewName);

        // Creates and appends rating using stars
        const reviewRating = document.createElement('p');
        reviewRating.textContent = '⭐'.repeat(rating);
        review.appendChild(reviewRating);

        // Creates and appends comments
        const reviewComments = document.createElement('p');
        reviewComments.textContent = comments;
        review.appendChild(reviewComments);

        // Adds review to the container
        reviewsContainer.appendChild(review);

        reviewForm.reset(); // Clears the form after submission
    });
});