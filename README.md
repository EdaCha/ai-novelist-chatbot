# ai-novelist-chatbot

[Glitch](https://glitch.com/) 上で動作する、[AIのべりすとの試験公開中API](https://ai-novel.com/account_api.php) を利用したシンプルなチャットボットのサンプルコードです。
利用にはAIのべりすとのアカウントが必要なほか、問い合わせ毎に有償ポイント「ルミナ」が消費される点に注意ください。

## 説明
それぞれ対象サービス上で各種設定およびBOTアカウントを作成、適切な権限を付与のうえ、
Glitchにpackage.json、server.jsファイルを設置し、.envファイルにTokenなどの必要な情報を追加することで動作します。

また、Glitch上のアプリは時間が経つとダウンするので、維持したい場合はGoogle Apps Scriptとかでなんかしてください。

こちらの [Glitch プロフィール](https://glitch.com/@Edacha) からプロジェクトを選択し、「Remix Your Own」で自分のGlitchプロジェクト上にコピーするのが一番楽です。


個別の質問には応じませんが、何かあれば [Twitter](https://twitter.com/teawands) に連絡ください

### slack
Slackで動作するチャットボットです。
[bolt-js](https://github.com/slackapi/bolt-js) を利用しています。
質問文はドキュメント記載の指示チューニングの形で渡しています。求める内容に応じて質問文やパラメータは適宜調整してください。

Botアカウントにメンションと質問文を投げると、AIのべりすとが回答を返します。DM上ではメンションを付けても動作しない点に注意ください。

Botアカウントには以下の権限が必要です
- app_mentions:read
- chat:write

.envファイルに以下の名前で情報追加が必要です
- AI_NOVELIST_BEARER: AIのべりすとのAPIキー
- SLACK_SIGNING_SECRET: SlackのSigning Secret
- SLACK_BOT_TOKEN: SlackのOAuth Tokens

またEventのSubscription設定も必要です

#### 参考
- https://api.slack.com/lang/ja-jp/hello-world-bolt

### discord
discordで動作するチャットボットです。
[discord.js](https://discord.js.org/) を利用しています。
質問文はドキュメント記載の指示チューニングの形で渡しています。求める内容に応じて質問文やパラメータは適宜調整してください。

Botアカウントにメンションと質問文を投げると、AIのべりすとが回答を返します。
メンションはロール名でなくBotユーザ名を指定する点に注意してください(Role名とは別のBot名をつける必要がある)。

Botアカウントには以下の権限が必要です
- MESSAGE CONTENT INTENT
- メッセージを送信

.envファイルに以下の名前で情報追加が必要です
- AI_NOVELIST_BEARER: AIのべりすとのAPIキー
- DISCORD_BOT_TOKEN: DiscordのBot Token

#### 参考
 - https://note.com/exteoi/n/nf1c37cb26c41

### slack-zundamon, discord-zundamon
上記チャットボットを、 東北のキャラクター「ずんだもん」が回答してくれるように
パラメータを工夫してみたものです。
指示チューニングではなく、会話文でキャラクターの特徴を与えるとある程度実現できます
