export default async function handler(req, res) {
  const response = await fetch(
    "2db2b5d6f2b15d84ca9f982b19c56d43"
  );

  const data = await response.json();
  res.status(200).json(data.articles);
}
