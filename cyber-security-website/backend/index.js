const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const NEWS_DATA_API_KEY = 'pub_51906db0158c043aba1ac28a7b0a54b97106e';
const NEWS_DATA_API_URL = `https://newsdata.io/api/1/news?apikey=${NEWS_DATA_API_KEY}&country=us&category=technology&q=cybersecurity,cybercrime`;

app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get(NEWS_DATA_API_URL);
    // Adjusting the mapping according to the NewsData.io response structure
    const articles = response.data.results.map(article => ({
      title: article.title,
      description: article.description,
      url: article.link,
      urlToImage: article.image_url
    }));
    res.json(articles);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).send('Error fetching news');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
