require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('1098023126526328973')
        .setType('STREAMING')
        .setURL(`https://www.youtube.com/watch?v=Ht1wQJTpNAA`)
        .setDetails('jackpot')
        .setName(`sexslave`)
        .setState(`彼女, お借りします`)
        .setParty({
            max: 840,
            current: 689,
            id: Discord.getUUID(),
        })
  .setAssetsLargeImage(`https://cdn.discordapp.com/attachments/1193633391086669894/1245841519038959727/9a40af49-710a-41af-980a-e1e549d84f1f_540x240.gif?ex=665a37d4&is=6658e654&hm=aed46fe9822d9c861d21717615c0d74bcc642fd3bcdf92dcfea982de49338401&`)
        .setAssetsLargeText(`kami`)
        .setAssetsSmallImage(`https://cdn.discordapp.com/attachments/1193633391086669894/1245761226445688985/1B6B3927-FBE9-4519-BAFC-8EB11CD7A5E6.gif?ex=6659ed0d&is=66589b8d&hm=62e803e0c5e7fa466af378e0959cfc37704336ce558aa35b965dbf92a83953d3&`)
        .setAssetsSmallText(`rawr`)
        .addButton(`@👁️‍🗨️`, `https://www.twitch.tv/mhlem`)
        .addButton(`@𖤐`, `https://hanime.tv/`);
    client.user.setActivity(rpc.toJSON()); 
    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);