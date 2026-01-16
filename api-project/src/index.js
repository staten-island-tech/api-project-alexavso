/* import "./style.css";

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
    
    console.error('Error fetching data:', error);
  }
}

fetchApiData(); */

document.getElementById("loadBtn").addEventListener("click", () => {
  const num = parseInt(document.getElementById("numberInput").value);
  if (isNaN(num) || num < 1) {
    alert("Enter a number greater than 0");
    return;
  }

  const cardContainer = document.getElementById("cardContainer");

  const card = document.createElement("div");
  card.className = "bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-200 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3";


  const img = document.createElement("img");
  img.src = `https://picsum.photos/seed/${num}/300/200`;
  img.className = "w-full block";
  card.appendChild(img);

  const label = document.createElement("p");
  label.textContent = `Image #${num}`;
  label.className = "p-2 font-semibold text-center";
  card.appendChild(label);

  cardContainer.appendChild(card);
});
