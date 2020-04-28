module.exports = message => {

	message.delete();
	
	if (message.member.hasPermission("KICK_MEMBERS")) {

		const member = message.mentions.members.first();
		
		if (!member) {
			return message.reply(`Who are you trying to kick? You must mention a user.`);
		}
		else if (message.member === member)
		{
			return message.reply(`You can't kick yourself!`);
		}
		else if (!member.kickable) {
			return message.reply(`I can't kick this user. Sorry!`);
		}
		
		return member
			.kick()
			.then(() => message.reply(`${member.user.tag} was kicked.`))
			.catch(error => message.reply(`Sorry, an error occured.`));
	}
	
	return message.reply(`You don't have permission to kick members!`);
};