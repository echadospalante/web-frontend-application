import React from "react";
import useFetchVentures from "../../../modules/principal/ventures/hooks/useFetchVentures";
import { Venture } from "echadospalante-domain";
import { Col, Row } from "reactstrap";
import VentureCard from "../card/VentureCard";

export interface VenturesListProps {
  ventures: Venture[]
}

const VenturesList: React.FC<VenturesListProps> = ({ ventures }) => {
  const leftColumn = ventures.filter((_, index) => index % 2 === 0);
  const rightColumn = ventures.filter((_, index) => index % 2 !== 0);

  return (
    <Row>
      <Col md={6}>
        {leftColumn.map((venture, index) => (
          <VentureCard
            key={`left-${index}`}
            ownerButtons={false}
            venture={venture}
          />
        ))}
      </Col>

      <Col md={6}>
        {rightColumn.map((venture, index) => (
          <VentureCard
            key={`right-${index}`}
            ownerButtons={false}
            venture={venture}
          />
        ))}
      </Col>
    </Row>
  );

};

export default VenturesList;