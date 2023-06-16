import quotes from "../quote";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      res.status(200).json(quotes);
    } catch (error) {
      console.log(error);
    }
  }
}
