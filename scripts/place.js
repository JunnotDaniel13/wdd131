const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;

const temperature = 4; 
const windSpeed = 15; 

/**
 * Calculates the wind chill factor based on temperature and wind speed.
 * @param {number} temp - Temperature in Celsius
 * @param {number} speed - Wind speed in km/h
 * @returns {number} The calculated wind chill factor.
 */
function calculateWindChill(temp, speed) {
	
	return (
		13.12 +
		0.6215 * temp -
		11.37 * Math.pow(speed, 0.16) +
		0.3965 * temp * Math.pow(speed, 0.16)
	);
}


function displayWindChill(temp, speed) {
	const windChillElement = document.querySelector("#wind-chill");

	
	if (temp <= 10 && speed > 4.8) {
		const windChillValue = calculateWindChill(temp, speed);
		windChillElement.textContent = `${windChillValue.toFixed(1)} °C`;
	} else {
		windChillElement.textContent = "N/A";
	}
}


displayWindChill(temperature, windSpeed);