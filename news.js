export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://gnews.io/api/v4/search?q=Christianity&lang=en&max=5&apikey=2db2b5d6f2b15d84ca9f982b19c56d43"
    );

    const data = await response.json();

    if (!data.articles) {
      return res.status(200).json([]);
    }

    res.status(200).json(data.articles);

  } catch (error) {
    res.status(500).json({ error: "API failed" });
  }
}
