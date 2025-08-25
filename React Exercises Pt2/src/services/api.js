// We are using wger API for weightlifting exercises and various other fitness topics
const API_KEY = "f9aa30cbbf5ea1baf1aa9cb24be1615030a722bc"
const BASE_URL = "https://wger.de/api/v2";

export const searchWger = async (query) => {
   const response = await fetch(`${BASE_URL}/${query}/?language=2`);
   const data = await response.json();
   console.log(data);
   console.log(data.results);
   return data.results;
};

/*
export async function onRequest(context) {
  const url = `https://wger.de/api/v2${context.request.url}`;
  const response = await fetch(url, {
    headers: { Authorization: `Token ${context.env.WGER_API_KEY}` },
  });
  return new Response(await response.text());
}
*/