document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const navMenu = document.querySelector("header nav ul");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      if (navMenu.classList.contains("open")) {
        menuButton.textContent = "x"; 
        menuButton.setAttribute("aria-expanded", "true");
      } else {
        menuButton.textContent = "☰"; 
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];

const templeGrid = document.querySelector(".gallery");
const pageTitle = document.querySelector("main h2");
const navLinks = document.querySelectorAll("nav a");

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

function createTempleCard(temple) {
	const card = document.createElement("figure");
	card.innerHTML = `
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
    <figcaption>
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    </figcaption>
  `;
	return card;
}

function displayTemples(filteredTemples) {
	templeGrid.innerHTML = ""; 
	filteredTemples.forEach((temple) => {
		const card = createTempleCard(temple);
		templeGrid.appendChild(card);
	});
}

navLinks.forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();
		const filter = event.target.id;
		let filteredTemples;
		let title;

		switch (filter) {
			case "old":
				title = "Old Temples (Dedicated before 1900)";
				filteredTemples = temples.filter(
					(temple) =>
						new Date(temple.dedicated).getFullYear() < 1900
				);
				break;
			case "new":
				title = "New Temples (Dedicated after 2000)";
				filteredTemples = temples.filter(
					(temple) =>
						new Date(temple.dedicated).getFullYear() > 2000
				);
				break;
			case "large":
				title = "Large Temples (Over 90,000 sq ft)";
				filteredTemples = temples.filter(
					(temple) => temple.area > 90000
				);
				break;
			case "small":
				title = "Small Temples (Under 10,000 sq ft)";
				filteredTemples = temples.filter(
					(temple) => temple.area < 10000
				);
				break;
			case "home":
			default:
				title = "Home";
				filteredTemples = temples;
				break;
		}

		pageTitle.textContent = title;
		displayTemples(filteredTemples);
	});
});

displayTemples(temples);