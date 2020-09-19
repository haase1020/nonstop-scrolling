// unsplash API
const count = 2;
const apiKey = 'BVOW1tvn3HZnngHTrtObANuigqWMe18VX5lNgWIZ2F4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photos from unsplash
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //catch error
  }
}

//on load
getPhotos();
