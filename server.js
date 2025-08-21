const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

const PORT = process.env.PORT || 3000;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const PLACE_ID = process.env.PLACE_ID;

app.use(cors());

// Endpoint to get reviews
app.get("/reviews", async (req, res) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&fields=reviews,rating,user_ratings_total,name,url&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data.result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
