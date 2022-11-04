// indes.js: deployCommand.jsで設定したコマンドを動かすためにサーバーの中で常時起動させて動かしている
// GatewayIntentBitsを使うことでURLでなくローカルサーバでも直接Clientに接続できる、ローカルから本番環境につなげて動かせる
const { Client, GatewayIntentBits } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// PostgreSQLと接続するための設定
// DATABASE_URLと接続
// https://devcenter.heroku.com/ja/articles/getting-started-with-nodejs?singlepage=true
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
const token = process.env.DISCORD_BOT_TOKEN;

console.log("DATABASE_URL:");
console.log(process.env.DATABASE_URL);

// const clientId = process.env.clientId;
// const guildId = process.env.guildId;

// "Client"というインスタンスを生成
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Readyを実行する必要があるので一回だけ実行
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// 〜というイベントに対して〜を実行
// '/'などのinteractionに対して〜を返す
client.on('interactionCreate', async interaction => {
    
    if (!interaction.isChatInputCommand()) return; // chatから入った'/'で打たれたCommandでなければreturn

    const { commandName } = interaction;

    const guildId = interaction.guildId;　// guildID: どのサーバのものかを確認するもの
    console.log(guildId);

	// commmandNameごとの処理を記述
    switch(commandName) { 
        case 'set-channel':
            const postChannel = interaction.options.getChannel("post-channel") // deployCommand.jsで設定したoption "post-channel"に入っているChannelを取得
            const channelID = postChannel.id // postChannelに入っているIDを指定
            console.log(channelID);
            await interaction.reply(`set post channel to ${postChannel}`); // Commandを実行後BOTから返ってくるMessage

            client.channels.cache.get(channelID).send("This channel was set to post messages from other severs!");

            break;

        case 'set-template': 
            const message = interaction.options.getString("message"); // "message"というoptionで指定したStringを取得
            console.log(message);

            // https://scrapbox.io/discordjs-japan/Message%E3%82%AF%E3%83%A9%E3%82%B9
            // メッセージIDとチャンネルIDからメッセージを取得。

            // 実際にはチャンネルIDとメッセージID両方が必要だから メッセージURL をもらうのが良いか。

            await interaction.reply(`set template as ${message}`);

            break;

        case 'dashboard':
            await interaction.reply('"dashboard" is getting ready.');
            break;

        case 'set-timer':
            await interaction.reply('"set-timer" is getting ready.');
            break;

        case 'register':
            await interaction.reply('"register" is getting ready.');
            break;
    }
});

// TokenのBOTの開発者であることを示しログイン。これをしないと拒否されるセキュリティ対策になっている
// Login to Discord with your client's token
client.login(token);



module.exports = {pool};

