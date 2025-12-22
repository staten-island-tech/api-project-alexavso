// Use async function to handle promises cleanly
async function fetchApiData() {
  const apiUrl = 'https://api.artic.edu/api/v1/artworks';

  try {
    
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    console.log(data);
    return data;

  } catch (error) {
    // handle error
    console.error('Error fetching data:', error);
  }
}

// Call the function
fetchApiData();
