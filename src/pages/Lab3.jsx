import React from "react";
import FlexContainer from "../components/FlexContainer";
import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard";

// const data = [
//   { name: "Ala", id: 1, rating: 8 },
//   { name: "Ela", id: 2, rating: 2 },
//   { name: "Karol", id: 3, rating: 6 },
//   { name: "Ola", id: 4, rating: 5 },
//   { name: "Monika", id: 5, rating: 1 },
//   { name: "Robert", id: 6, rating: 0 },
// ];

const Lab3Page = () => {
  return (
    <div>
      <Row className="justify-content-center my-4">
        <Col xs="12" className="text-center">
          <h1>Laboratorium 3</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <FlexContainer element={ProfileCard} />
      </Row>
    </div>
  );
};

export default Lab3Page;
