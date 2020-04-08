// Load discord token from enviroment variable
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;

// Require the discord and file system module
const Discord = require('discord.js');
const fs = require("fs");

// Create a new discord client
const client = new Discord.Client();

// Import events
fs.readdir("./events/", (err, files) => {
	files.forEach(file => {
		console.log(`Importing event ${file}`);

		const eventHandler = require(`./events/${file}`);
		const eventName = file.split(".")[0];
		client.on(eventName, arg => eventHandler(client, arg));
	});
});

// Login to discord bot
client.login(token);

