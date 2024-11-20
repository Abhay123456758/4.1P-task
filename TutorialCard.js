import React from "react";
import { Card, Image } from "semantic-ui-react";

const TutorialCard = ({ title, level, description, image }) => {
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{level}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default TutorialCard;
