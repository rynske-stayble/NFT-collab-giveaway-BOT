## What is NFT collab-giveay BOT?

NFT collab-giveaway BOT は自分の Discord サーバーで他の NFT プロジェクトの宣伝文を投稿する代わりに、他の NFT プロジェクトの Discord サーバーで自分のプロジェクトの宣伝文を投稿する相互宣伝 BOT です。

この BOT さえあれば、もう「Collab Maneger」を雇う必要はありません。


## コマンド一覧

/set-collab-channel 【チャンネルリンク】
コラボギブアウェイ用 Channel（相互宣伝を投稿する Channel）を設定


/set-templete 【メッセージリンク】
コラボギブアウェイテンプレート(あなたの NFT の宣伝文)の設定


## 各ファイルの説明
/discord/deployCommand.js →  Commands を登録しているファイル

/discord/index.js　→          /discord/deployCommand.js で登録したコマンドを実行するファイル、サーバーの中で常時起動し動かしている

/discord_table.sql →         データベース構造を記述したファイル

package-lock.json, package.json →    express や discord.js などの、使用するパッケージ（ライブラリやフレームワーク）とそのバージョン等を記録している。大量のモジュールフォルダを共有しなくても他の人や本番環境でも簡単に同じ環境を再現するための情報。



## 備考
使用言語:        Javascript, SQL

実行環境:        node.js

パッケージ管理:   npm

データベース:     PostgreSQL

クラウドサービス: Heroku
