const trails = [
	{
		name: "Riverbend Walk",
		image: "images/trails-1.webp",
		description:
			"A gentle, scenic walk along the river. Perfect for families and bird watching. The path is mostly flat and well-maintained.",
		length: "2.5 miles",
		difficulty: "Easy",
	},
	{
		name: "Pine Ridge Trail",
		image: "images/trails-2.webp",
		description:
			"A beautiful trail that winds through a dense pine forest. Features some rolling hills and beautiful viewpoints.",
		length: "3.8 miles",
		difficulty: "Moderate",
	},
	{
		name: "Summit Challenge",
		image: "images/trails-3.webp",
		description:
			"A steep and strenuous climb to the highest peak in the area. Recommended for experienced hikers seeking a challenge.",
		length: "6.2 miles",
		difficulty: "Hard",
	},
	{
		name: "Meadow View Path",
		image: "images/trails-4.webp",
		description:
			"An easy, accessible loop through beautiful open meadows, famous for their wildflowers in the spring and summer.",
		length: "1.8 miles",
		difficulty: "Easy",
	},
	{
		name: "Canyon Trek",
		image: "images/trails-5.webp",
		description:
			"Descend into a stunning canyon with unique rock formations. The trail has several switchbacks and uneven terrain.",
		length: "4.5 miles",
		difficulty: "Moderate",
	},
];

function renderTrails(trailArray) {
	const gallery = document.getElementById("trail-gallery");
	// Clear existing content
	gallery.innerHTML = "";

	trailArray.forEach((trail) => {
		const cardHTML = `
            <div class="trail-card">
                <img src="${trail.image}" alt="A scenic view of the ${trail.name}." loading="lazy">
                <div class="trail-card-info">
                    <h3>${trail.name}</h3>
                    <p>${trail.description}</p>
                    <div class="trail-meta">
                        <span>${trail.length}</span>
                        <span>${trail.difficulty}</span>
                    </div>
                </div>
            </div>
        `;
		gallery.innerHTML += cardHTML;
	});
}

function setupFiltering() {
	const filterButtons = document.querySelectorAll(".filter-controls button");

	filterButtons.forEach((button) => {
		button.addEventListener("click", () => {
			document
				.querySelector(".filter-controls button.active")
				.classList.remove("active");
			button.classList.add("active");

			const filter = button.id.replace("filter-", "");
			let filteredTrails;

			if (filter === "all") {
				filteredTrails = trails;
			} else {
				filteredTrails = trails.filter(
					(trail) => trail.difficulty.toLowerCase() === filter
				);
			}

			renderTrails(filteredTrails);
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	if (document.getElementById("trail-gallery")) {
		renderTrails(trails); 
		setupFiltering(); 
	}
});