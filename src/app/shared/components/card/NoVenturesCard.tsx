import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

export interface NoItemsFoundCardProps {
  title: string;
  message: string;
  imageUrl?: string;
}

const NoItemsFoundCard: React.FC<NoItemsFoundCardProps> = ({
  title,
  message,
  imageUrl = '/empty.jpg',
}) => {
  return (
    <Card className="text-center shadow-sm border-0">
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{message}</CardText>

        <CardImg src={imageUrl} className="w-25 rounded-3 my-3" />
      </CardBody>
    </Card>
  );
};

export default NoItemsFoundCard;
