-- serversというテーブルを作成
-- column_name data_type, column_name data_type, ...
-- 主キー: Discord server ID

-- server_id: Discord server ID, template_message: 自分のNFTの宣伝文, post_channel_id: 他のNFTの宣伝文を投稿するchannelのID
-- start_post_at: 投稿開始日時, post_interval: 投稿間隔, plan: 登録中のプラン（無料プラン、有料プランなど）, register_at: BOTへの認証日時
-- posted_templates_servers: 宣伝文を相互投稿したNFTのDiscordサーバー
CREATE TABLE servers (
    server_id varchar(100) primary key,
    template_message TEXT,
    post_channel_id varchar(100),
    start_post_at timestamp,
    post_interval varchar(100),
    plan varchar(100),
    register_at timestamp,
    posted_templates_servers TEXT
)

