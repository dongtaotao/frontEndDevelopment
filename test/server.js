const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/scrape', async (req, res) => {
    try {
        const response = await axios.get('https://juejin.im/tag/Vue.js');
        const $ = cheerio.load(response.data);
        const list = $('.article-list .article-item');
        const arr = [];

        list.each((index, item) => {
            const title = $(item).find('.title').text().trim();
            const href = $(item).find('.title').attr('href');
            const like = $(item).find('.meta .like').text();
            arr.push({
                title,
                href,
                like
            });
        });

        const sorted = arr.sort((a, b) => b.like - a.like);
        res.json(sorted);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
