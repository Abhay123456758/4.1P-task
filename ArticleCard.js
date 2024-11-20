import React from "react";
import { Card, Image } from "semantic-ui-react";

const ArticleCard = ({ title, author, description, image }) => {
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{author}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ArticleCard;
