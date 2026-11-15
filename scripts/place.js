// 1. Footer update (Current year and last modified date)
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// 2. Static variables for temperature (°C) and wind speed (km/h)
const temperature = 8; // <= 10 °C
const windSpeed = 12;  // > 4.8 km/h

// 3. One-line function to calculate Wind Chill (Metric system)
function calculateWindChill(temp, wind) {
  return 13.12 + 0.6215 * temp - 11.37 * (wind ** 0.16) + 0.3965 * temp * (wind ** 0.16);
}

// 4. Conditional check before displaying wind chill
const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  const chillValue = calculateWindChill(temperature, windSpeed);
  windChillElement.textContent = `${chillValue.toFixed(1)} °C`;
} else {
  windChillElement.textContent = "N/A";
}