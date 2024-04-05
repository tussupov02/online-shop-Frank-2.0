const PORT = 3000;
const express = require('express');
const app = express();
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '7091557275:AAHb2c1GATD4_tS-Wc7nJbrGFQ9Z18w0Pco';
const CHAT_ID = '444414849';


app.use(express.json());
app.use(cors());

app.listen(PORT,()=>{
    console.log(`порт запущен на ${PORT}`);
});

const bot = new TelegramBot(TOKEN,{
    chat_id:CHAT_ID,
    text
})