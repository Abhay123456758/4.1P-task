import React from "react";
import { CardGroup } from "semantic-ui-react";
import ArticleCard from "./ArticleCard";

const FeaturedSection = ({ articles }) => {
  return (
    <CardGroup>
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </CardGroup>
  );
};

export default FeaturedSection;
