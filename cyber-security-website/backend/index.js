const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const NEWS_API_KEY = '4547ad67515b4bbc9eb957c3cdb95622'; // Replace with your News API key
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=technology&q=cybersecurity OR cybercrime&apiKey=${NEWS_API_KEY}`;

app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get(NEWS_API_URL);
    const articles = response.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage // Ensure this field is included
    }));
    res.json(articles);
  } catch (error) {
    res.status(500).send('Error fetching news');
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
