export default async function handler(req, res) {
  res.status(200).json({
    message: "Google Reviews API is working!",
    reviews: []
  });
}

