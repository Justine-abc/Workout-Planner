export async function fetchPlaces(cityInput, map, resultsList, loadingSpinner) {
    if (!cityInput) {
      alert("Please enter a city name.");
      return;
    }
  
    loadingSpinner.classList.remove("hidden");
    resultsList.innerHTML = ""; 
  
    try {
      const geocodeResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          cityInput
        )}&key=n`
      );
      const geocodeData = await geocodeResponse.json();
  
      if (geocodeData.results.length === 0) {
        throw new Error("City not found.");
      }
  
      const cityLocation = geocodeData.results[0].geometry.location;
  
      map.setCenter(cityLocation);
      map.setZoom(12);
      const placesResponse = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${cityLocation.lat},${cityLocation.lng}&radius=5000&type=tourist_attraction&key=YOUR_GOOGLE_API_KEY`
      );
      const placesData = await placesResponse.json();
      if (placesData.results.length === 0) {
        resultsList.innerHTML = "<li>No places found.</li>";
        return;
      }
  
      placesData.results.forEach((place) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <strong>${place.name}</strong><br>
          Rating: ${place.rating || "N/A"}<br>
          Address: ${place.vicinity || "N/A"}
        `;
        resultsList.appendChild(listItem);
        new google.maps.Marker({
          position: place.geometry.location,
          map: map,
          title: place.name,
        });
      });
    } catch (error) {
      console.error("Error fetching places:", error);
      alert("Failed to fetch places. Please try again.");
    } finally {
      loadingSpinner.classList.add("hidden");
    }
  } 
  