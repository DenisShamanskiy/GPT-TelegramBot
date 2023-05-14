import bot from "../src/main.js";

async function handler(req, res) {
  try {
    await bot.handleUpdate(req.body);
    res.status(200).end();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing update");
  }
}

export default handler;
