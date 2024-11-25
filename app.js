// /* import { fetchPlaces } from "./fetchPlaces.js";

// let map;

// // Initialize the map
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 0, lng: 0 },
//     zoom: 2,
//   });
// }

// // Event listener for search button
// document.getElementById("search-button").addEventListener("click", () => {
//   const cityInput = document.getElementById("city-input").value.trim();
//   const resultsList = document.getElementById("results-list");
//   const loadingSpinner = document.getElementById("loading-spinner");

//   fetchPlaces(cityInput, map, resultsList, loadingSpinner);
// });

// // Expose initMap to the global scope (needed for Google Maps API)
// window.initMap = initMap; */











//  // Target elements
// const searchButton = document.getElementById('search-button');
// const cityInput = document.getElementById('city-input');
// const resultsList = document.getElementById('results-list');
// const loadingSpinner = document.getElementById('loading-spinner');

// // Dummy API data for testing purposes
// function fetchCityData(city) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const dummyResults = [
//         { name: `${city} Central Park`, category: 'Park', rating: 4.5 },
//         { name: `${city} Modern Art Museum`, category: 'Museum', rating: 4.8 },
//         { name: `${city} Grill House`, category: 'Restaurant', rating: 4.3 },
//         { name: `${city} Downtown Coffee`, category: 'Cafe', rating: 4.7 },
//         { name: `${city} Botanical Gardens`, category: 'Garden', rating: 4.9 },
//       ];
//       resolve(dummyResults);
//     }, 1500);
//   });
// }

// // Show  the loading spinner 
// function showLoading() {
//   loadingSpinner.classList.remove('hidden');
// }

// // Hide the loading spinner
// function hideLoading() {
//   loadingSpinner.classList.add('hidden');
// }

// // Render results dynamically with animations
// function renderResults(results) {
//   resultsList.innerHTML = ''; // Clear previous results
//   results.forEach((result, index) => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       <div class="result-item">
//         <h3>${result.name}</h3>
//         <p>Category: <span>${result.category}</span></p>
//         <p>Rating: <span>${result.rating}</span></p>
//       </div>
//     `;

//     // Apply a fade-in effect
//     li.style.opacity = 0;
//     li.style.transform = 'translateY(20px)';
//     setTimeout(() => {
//       li.style.opacity = 1;
//       li.style.transform = 'translateY(0)';
//     }, index * 200); // Staggered animation

//     resultsList.appendChild(li);
//   });
// }

// // Handle search functionality
// searchButton.addEventListener('click', async () => {
//   const city = cityInput.value.trim();

//   if (!city) {
//     alert('Please enter a city name!');
//     return;
//   }

//   showLoading();

//   // Simulate API call
//   const results = await fetchCityData(city);

//   hideLoading();
//   renderResults(results);
// });

// // Add focus animations to the input field
// cityInput.addEventListener('focus', () => {
//   cityInput.style.borderColor = '#4CAF50';
//   cityInput.style.boxShadow = '0 0 8px rgba(76, 175, 80, 0.5)';
// });

// cityInput.addEventListener('blur', () => {
//   cityInput.style.borderColor = '#ddd';
//   cityInput.style.boxShadow = 'none';
// });
 