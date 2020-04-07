// Load discord token from enviroment variable
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;

// Require the discord.js module
const Discord = require('discord.js');

// Create a new discord client
const client = new Discord.Client();

// When client is ready run this module
client.once('ready', () => {
	console.log('Ready!');
});

// Login to discord bot
client.login(token);

