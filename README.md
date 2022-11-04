## What is NFT collab-giveay BOT?

NFT collab-giveaway BOT は自分のDiscordサーバーで他のNFTプロジェクトの宣伝文を投稿する代わりに、他のNFTプロジェクトのDiscordサーバーで自分のプロジェクトの宣伝文を投稿するBOTです。

各NFTプロジェクトに存在する「Collab Maneger」の役割を担います。


## コマンド一覧

/set-collab-channel 【チャンネルリンク】
コラボギブアウェイ用のチャンネルを設定


/set-templete 【メッセージリンク】
コラボギブアウェイテンプレートの設定


## 各ファイルの説明
/discord/deployCommand.js →  Commandを登録しているファイル

/discord/index.js　→          /discord/deployCommand.jsで登録したコマンドを実行するファイル、サーバーの中で常時起動し動かしている

package-lock.json, package.json →    express や discord.js などの、使用するパッケージ（ライブラリやフレームワーク）とそのバージョン等を記録している。大量のモジュールフォルダを共有しなくても他の人や本番環境でも簡単に同じ環境を再現するための情報。


## 備考
使用言語: Javascript, SQL

実行環境: node.js

パッケージ管理: npm

データベース: PostgreSQL

クラウドサービス: Heroku
