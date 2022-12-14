const express = require("express");    // インストールしたExpressを呼び出す
const app = express();                 // Expressを使えるような形でインスタンス化
const port = process.env.PORT || 3000; // 環境変数PORTにあるものすべて、または何もない場合は3000を指定

require("./discord/index");            // ./discord/index.jsの{pool}を呼び出し

// Request: WEB APIのエンドポイントをPortのルートディレクトリに指定してget. ブラウザを読み込む動作
app.get("/", (req, res) => {
    console.log("ルート");              // Responce: コンソールに「ルート」と表示
    res.send("ルート");                 // Responce: ブラウザに「ルート」と表示
})



//  セキュリティの観点からDBへのアクセス用のリスナーをコメントアウト。

// app.get("/create-servers-table", async (req, res) => {
//     try {
//         const client = await pool.connect();
//         const result = await client.query(`CREATE TABLE servers (
//             server_id varchar(100) primary key,
//             template_message TEXT,
//             post_channel_id varchar(100),
//             start_post_at timestamp,
//             post_interval varchar(100),
//             plan varchar(100),
//             register_at timestamp,
//             posted_templates_servers TEXT
//         );`);
//         const results = { 'results': (result) ? result.rows : null};
//         res.json(results);
//         client.release();
//     } catch (err) {
//         console.error(err);
//         res.send("Error " + err);
//     }
// })


// app.get('/get-from-servers-db', async (req, res) => {
//     try {
//         const client = await pool.connect();
//         const result = await client.query('SELECT * FROM servers');
//         const results = { 'results': (result) ? result.rows : null};
//         res.json(results);
//         client.release();
//     } catch (err) {
//         console.error(err);
//         res.send("Error " + err);
//     }
// })



// // testDB関連
// app.get('/get-from-test-db', async (req, res) => {
//     try {
//         const client = await pool.connect();
//         const result = await client.query('SELECT * FROM test_table');
//         const results = { 'results': (result) ? result.rows : null};
//         res.json(results);
//         client.release();
//     } catch (err) {
//         console.error(err);
//         res.send("Error " + err);
//     }
// })


// app.get('/create-test-db', async (req, res) => {
//     try {
//         const client = await pool.connect();
//         const result = await client.query(`create table test_table (id integer, name varchar(10) );`);
//         const results = { 'results': (result) ? result.rows : null};
//         res.json(results);
//         client.release();
//     } catch (err) {
//         console.error(err);
//         res.send("Error " + err);
//     }
// })

// app.get('/add-to-test-db', async (req, res) => {
//     try {
//         console.log(`id: ${req.query.id}, name: ${req.query.name}`);
//         const client = await pool.connect();
//         const result = await client.query({
//             text: `INSERT INTO test_table (id, name) VALUES ($1, $2);`, 
//             values: [req.query.id, req.query.name]
//         });
//         const results = { 'results': (result) ? result.rows : null};
//         res.json(results);
//         client.release();
//     } catch (err) {
//         console.error(err);
//         res.send("Error " + err);
//     }
// })







app.listen(port, () => {
    console.log(`server is listening on port ${3000}`);
})
