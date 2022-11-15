// Command を登録
// .env: トークンなどが登録された別ファイル
// const { Client, GatewayIntentBits } = require('discord.js');
// clientID: Discord BOTのclient ID
require('dotenv').config();
const token = process.env.DISCORD_BOT_TOKEN; // 登録時に発行されたBOTトークン
const clientId = process.env.clientId;
const guildId = process.env.guildId;

const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest'); // Discord にアクセスする
// const { clientId, guildId, token } = require('./config.json');


const commands = [
	// コラボギブアウェイ投稿を行うchannelを設定するCommand
	new SlashCommandBuilder()
		.setName('set-channel') // Command 名
		.setDescription('set channel to post') // Command の説明
		.addChannelOption(option => option.setName('post-channel').setDescription('channel to post').setRequired(true)), // Command の Option

	// コラボギブアウェイ用のテンプレートを設定するCommand
	new SlashCommandBuilder()
		.setName('set-template')
		.setDescription('set template message')
		.addStringOption(option => option.setName("message").setDescription("template message to post").setRequired(true)),

	// ダッシュボードにアクセスするCommand
	new SlashCommandBuilder().setName('dashboard').setDescription('access to dashboard'),

	// コラボギブアウェイ投稿を行う間隔を設定するCommand
	new SlashCommandBuilder().setName('set-timer').setDescription('set timer to post'),
	new SlashCommandBuilder().setName('register').setDescription('register to this service'),
].map(command => command.toJSON()) // Class から文字列に変える

const rest = new REST({ version: '10' }).setToken(token); // トークンとversionを指定してhttpアクセスするための設定

// コマンドを全て削除
// rest.put(Routes.applicationCommands(clientId, guildId), { body: [] })
// 	.then(() => console.log('Successfully deleted all guild commands.'))
// 	.catch(console.error);


// clientIDのBOTのbodyに対してcommandsを追加
rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);


