require("dotenv").config();
const { Telegraf } = require("telegraf");
const correios = require('./scripts/correios');

// telegram bot instance
const bot = new Telegraf(process.env.BOT_TOKEN);

// show this message when a chat start
bot.start((ctx) => {
    ctx.reply("Salve! Eu sou o packagetck bot e posso te ajudar a rastrear suas encomendas!" + "\n\n" +
        "Como usar?" + "\nPara rastrear pacotes enviados pelos Correios, digite /correios e coloque o seu codigo na frente!" + "\n" +
        "Exemplo: /correios AB123456789AB");
});

// listen the chat
bot.on("text", (ctx) => {
    if (!ctx.message.from.is_bot) {
        // args0 equals bot command, and args1 equals the code
        let args = ctx.message.text.split(" ");
        if (args[0] == "/correios") {
            correios(args[1], ctx);
        }
    }
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
