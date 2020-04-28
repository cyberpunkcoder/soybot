module.exports = message => {
	const member = message.mentions.members.first();

	message.delete();

	if (message.member.hasPermission("ADMINISTRATOR")) {
		if (!member) {
			return message.reply(`Who are you trying to ban? You must mention a user.`);
		}
		else if (message.member === member)
		{
			return message.reply(`You can't ban yourself!`);
		}
		
		return member
			.ban()
			.then(() => message.reply(`${member.user.tag} was banned.`))
			.catch(error => message.reply(`Sorry, an error occured.`));
	}
	
	return message.reply(`You don't have permission to banned members!`)
};