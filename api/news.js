export default async function handler(req, res) {
  try {
    const apiKey = "bc40a860efb1edb7aa69a66a4f207388";

    const url = `https://gnews.io/api/v4/search?q=Christianity&lang=en&max=5&apikey=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      return res.status(500).json({ error: "API request failed" });
    }

    const data = await response.json();

    if (!data.articles) {
      return res.status(200).json([]);
    }

    return res.status(200).json(data.articles);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
