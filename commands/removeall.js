module.exports = (client, message) => {
	const member = message.mentions.members.first();

	message.delete();

	if (message.member.hasPermission("MANAGE_MESSAGES")) {
		console.log(message.guild.id);
		deleteMessages(message.guild.id, member.id);
	}

	async function deleteMessages(guildID, userID){
	    client.guilds.cache.get(guildID).channels.cache.forEach(ch => {
	        if (ch.type === 'text'){
	            ch.messages.fetch({
	                limit: 100
	            }).then(messages => {
	                const msgs = messages.filter(m => m.author.id === userID)
	                msgs.forEach(m => {
	                    m.delete();
	                })
	            })
	        } else {
	            return;
	        }
	    })
	}
};