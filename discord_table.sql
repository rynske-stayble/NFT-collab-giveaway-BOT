

-- serversというテーブルを作成
-- column_name data_type, column_name data_type, ...
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

