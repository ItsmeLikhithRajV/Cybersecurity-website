import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/news')
      .then(response => setNews(response.data))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="news-page">
      <h1>Cyber Security and Cybercrime News</h1>
      {news.length > 0 ? (
        news.map((item, index) => (
          <div key={index} className="news-item">
            {item.urlToImage && <img src={item.urlToImage} alt={item.title} className="news-image" />}
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
}

export default NewsPage;
