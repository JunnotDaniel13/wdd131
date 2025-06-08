function updateReviewCounter() {
	const reviewCountSpan = document.getElementById("reviewCount");

	let reviewCount = Number(localStorage.getItem("reviewSubmissionCount")) || 0;

	reviewCount++;

	if (reviewCountSpan) {
		reviewCountSpan.textContent = reviewCount;
	}

	localStorage.setItem("reviewSubmissionCount", reviewCount);
}

function setFooterYear() {
	const yearSpan = document.getElementById("currentYear");
	if (yearSpan) {
		yearSpan.textContent = new Date().getFullYear();
	}
}

document.addEventListener("DOMContentLoaded", () => {
	updateReviewCounter();
	setFooterYear();
});