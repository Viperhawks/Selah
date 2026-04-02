export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://gnews.io/api/v4/search?q=Christianity&lang=en&max=5&apikey=bc40a860efb1edb7aa69a66a4f207388"
    );

    const data = await response.json();

    return res.status(200).json(data.articles || []);
  } catch (error) {
    return res.status(500).json({ error: "Failed to load news" });
  }
}
