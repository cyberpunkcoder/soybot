module.exports = (client, message) => {

	if (message.member.hasPermission("MANAGE_MESSAGES")) {

		const member = message.mentions.members.first();
		const channel = message.channel;

		if(member || message.content.split(' ')[1] === 'all')
		{
			purge();

			async function purge() {
			    const sum_messages = [];
			    let limit = 500;
			    let last_id;

			    while (true) {
			        const options = { limit: 100 };

			        if (last_id) {
			            options.before = last_id;
			        }

			        const messages = await channel.messages.fetch(options);
			        sum_messages.push(...messages.array());
			        last_id = messages.last().id;

			        if (messages.size != 100 || sum_messages >= limit) {
			            break;
			        }
			    }

			    sum_messages.forEach(m => {
			    	if(!member || m.author.id === member.id) {
			    		m.delete();
			    	}
			    })
			}
		} else {
			return message.reply(`Who are you trying to purge? You must mention a user or use keyword all.`);
		}
	} else {
		return message.reply(`You don't have permission to purge messages!`);
	}
};