export default async function handler(req, res) {
  try {
    const apiKey = "2db2b5d6f2b15d84ca9f982b19c56d43";

    const response = await fetch(
      `https://gnews.io/api/v4/search?q=Christianity&lang=en&max=5&apikey=${apikey}`
    );

    const data = await response.json();

    if (!data.articles) {
      return res.status(200).json([]);
    }

    return res.status(200).json(data.articles);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
