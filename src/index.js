require("dotenv").config();
const { Telegraf } = require("telegraf");
const correios = require('./scripts/correios');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on("text", (ctx) => {
    if (!ctx.message.from.is_bot) {
        let args = ctx.message.text.split(" ");
        if (args[0] == "/correios") {
            correios(args[1]);
        }
    }
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
