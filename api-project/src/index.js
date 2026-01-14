async function fetchApiData() {
  const apiUrl = 'https://random-d.uk/api/random';

  try {
    
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    console.log(data);
    return data;

  } catch (error) {
    
    console.error('Error fetching data:', error);
  }
}

fetchApiData();


