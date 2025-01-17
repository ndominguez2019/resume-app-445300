import React, { useState, useEffect } from 'react';
import './marketAuxNews.css'; // Import the CSS file

const MarketAuxNews = () => {
  const [news, setNews] = useState([]); // Initialize news as an empty array
  const apiToken = 'DY3Jm5Kp7wkVpjZShdCp9en1K9zNcbOOOCqdn4Vj';
  const apiUrl = `https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=${apiToken}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Check if data.data is an array before updating the state
        if (Array.isArray(data.data)) {
          setNews(data.data);
        } else {
          console.error('Expected data.data to be an array');
        }
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
        {news.length > 0 ? (
          news.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <p>{article.description}</p>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default MarketAuxNews;