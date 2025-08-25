// We are using wger API for weightlifting exercises and various other fitness topics
const WGER_API_KEY = "f9aa30cbbf5ea1baf1aa9cb24be1615030a722bc"
const WGER_BASE_URL = "https://wger.de/api/v2";

export const searchWger = async (wgerQuery) => {
   const response = await fetch(`${WGER_BASE_URL}/${wgerQuery}/?language=2`);
   const data = await response.json();

   return data.results;
};




// Using GIPHY API for the image gallery exercise
const GIPHY_API_KEY = "NGt9TIMRypT37J2TmGLL4QnL252zM0nL";
const GIPHY_BASE_URL = "https://api.giphy.com/v1/gifs/search";

export const searchImages = async (giphyQuery) => {
  const response = await fetch(`${GIPHY_BASE_URL}?api_key=${GIPHY_API_KEY}&limit=9&q=${giphyQuery}&lang=en`);
  const data = await response.json();

  return data.data;
};

