import { setWebhook } from "telebot-vercel";
import bot from "../src/main.js";

const path = "api/telegram.mjs";

export default setWebhook({ bot, path, handleErrors: true });
