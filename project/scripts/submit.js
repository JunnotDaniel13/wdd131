// --- Function to handle form submission ---
function handleFormSubmission() {
	const form = document.getElementById("trail-form");
	const feedbackElement = document.getElementById("form-feedback");

	if (form) {
		form.addEventListener("submit", (event) => {
			// Prevent the default form submission behavior
			event.preventDefault();

			// --- localStorage Interaction ---
			// Get current count from localStorage, default to 0 if not found
			let submissionCount =
				Number(localStorage.getItem("trailSubmissionCount")) || 0;
			submissionCount++; // Increment the count

			// Store the new count back in localStorage
			localStorage.setItem("trailSubmissionCount", submissionCount);

			// --- DOM Modification ---
			// Create a thank you message using a template literal
			const trailName = document.getElementById("trailName").value;
			const thankYouMessage = `
                <h2>Thank You!</h2>
                <p>Your submission for "${trailName}" has been received.</p>
                <p>You have now submitted ${submissionCount} trail(s). We appreciate your contribution!</p>
            `;

			// Display the feedback and hide the form
			feedbackElement.innerHTML = thankYouMessage;
			form.style.display = "none";
		});
	}
}

// --- Function to display submission count on page load ---
function displaySubmissionCount() {
	const counterElement = document.getElementById("submission-counter");
	if (counterElement) {
		const submissionCount =
			Number(localStorage.getItem("trailSubmissionCount")) || 0;

		// Conditional branching to show a different message for returning users
		if (submissionCount > 0) {
			counterElement.textContent = `Welcome back! You've already submitted ${submissionCount} trail(s). Let's find another!`;
		}
	}
}

// --- Run functions on page load ---
document.addEventListener("DOMContentLoaded", () => {
	// Check if we are on the submit page
	if (document.getElementById("trail-form")) {
		handleFormSubmission();
		displaySubmissionCount();
	}
});