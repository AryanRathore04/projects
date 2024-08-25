import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Buletin.css";

const BuletinData = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch("..//..//..//..//public/newData.json");
        const data = await response.json();

        // Find the article by id in various categories
        const allArticles = [
          data.featured_article,
          ...data.latest_news,
          ...data.must_read,
          data.editors_pick,
          ...data.additional_news,
          ...data.business,
          ...data.sport_news,
        ];

        const foundArticle = allArticles.find((article) => article.id === id);

        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError("Article not found");
        }
      } catch (error) {
        setError("Error fetching the data");
      }
    };

    fetchArticle();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-container">
      <img width={"400px"} src={article.imgSrc} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.full_description}</p>
      <small>
        {article.time} - {article.category} - {article.reading_time}
      </small>
    </div>
  );
};

export default BuletinData;
