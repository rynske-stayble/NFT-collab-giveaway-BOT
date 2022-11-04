const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const token = process.env.DISCORD_BOT_TOKEN;
// const clientId = process.env.clientId;
// const guildId = process.env.guildId;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
    client.channels.cache.get("1026021761915035688").send(`Want to earn monthly rentals in Ethereum? :moneybag:
    :money_with_wings: Become one of the few LOL LandLord and start your rentals TODAY!:money_with_wings:
    
    :rocket: Lords of the Lands is a utility-driven metaverse focused on increasing the accessibility and improving the experience of live music events, festivals, and E-shopping and in a Game-Fi environment! :video_game: 
    
    :white_check_mark:  Lords of the Lands is a collection of 3000 Land NFTs and 2000 Lords NFTs
    :white_check_mark:  Play LOL Tournaments bi-weekly & win exclusive NFTs & prizes up to 10,000$ by playing your Fav games like PubG, Freefire, etc
    :white_check_mark:  Build, publish and monetize your own experiences on the Land NFT!
    :white_check_mark:  Listed on CoinMarketCap! @everyone`
    )
});




// Login to Discord with your client's token
client.login(token)
    // .then(() => console.log(client.channels.cache));




