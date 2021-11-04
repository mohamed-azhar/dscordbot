const Discord = require("discord.js");

const client = new Discord.Client({
	intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.once("ready", () => console.log("moaz_tg is online!"));

client.on("ready", () => {
	// This event will run if the bot starts, and logs in, successfully.
	console.log(
		`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`
	);
});

client.on("message", (msg) => {
	msg.reply("Yo what up?");
});

const token =
	process.env.TOKEN ||
	require("fs")
		.readFileSync(__dirname + "/.env", {
			encoding: "utf-8",
		})
		.split("\n")
		.filter((x) => x.startsWith("TOKEN="))[0]
		.replace("TOKEN=", "");

client.login(token);
