export default async function handler(req, res) {
  const response = await fetch(
    "https://gnews.io/api/v4/search?q=Christianity OR Bible OR Jesus&lang=en&max=5&apikey=YOUR_API_KEY"
  );

  const data = await response.json();

  res.status(200).json(data.articles);
}
