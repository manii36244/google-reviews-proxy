import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const { AIzaSyBVXcr_0j60v6dSN8xWolYaR1-1xzn2l2o
      , ChIJJWHK1--_3zgRpJA50C_TIBc } = process.env;
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&fields=reviews,rating,user_ratings_total,name,url&key=${GOOGLE_API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data.result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
