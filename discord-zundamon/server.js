const {Client, GatewayIntentBits} = require('discord.js');
const fetch = require('node-fetch');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) {
        return;
    }
    if (message.mentions.users.has(client.user.id)) {

        const text = `ずんだもん「ボクはずんだもんなのだ。ずんだの妖精の女の子なのだ。イタコ、ずん子、きりたんの東北三姉妹と東北で暮らしているのだ。趣味はその辺をふらふらすることなのだ」
「${message.content.replace(/<@\S+>\s*/, "")}」
ずんだもん`

        try {
            // @see https://ai-novel.com/account_api_help.php
            const params = {
                'text': text,
                'length': 50, // 出力するトークン数（1～300）長い返答が欲しい場合は大きくする
                'temperature': 0.7,
                'top_p': 0.7,
                'rep_pen': 1.75
            };
            // console.log(params)

            const response = await fetch('https://api.tringpt.com/api', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.AI_NOVELIST_BEARER}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();
            // console.log(result);
            await message.channel.send(result.data[0].match(/「(.*?)」/)[1]); // 最初の鍵括弧内のみメッセージ送信

        } catch (error) {
            console.error('API error.', error);
        }
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
