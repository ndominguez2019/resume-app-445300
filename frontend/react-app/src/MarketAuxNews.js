// MarketAuxNews.js
import React, { useState, useEffect } from 'react';
import './marketAuxNews.css'; // Import the CSS file

const MarketAuxNews = () => {
  const [news, setNews] = useState([]);
  const apiToken = 'DY3Jm5Kp7wkVpjZShdCp9en1K9zNcbOOOCqdn4Vj';
  const apiUrl = `https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=${apiToken}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setNews(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="market-aux-news-container dark-mode">
      <h2>Market News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketAuxNews;