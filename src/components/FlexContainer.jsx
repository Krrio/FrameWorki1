import React, { useContext } from "react";
import AppContext from "../data/AppContext";
import { Container, Row, Col } from "react-bootstrap";

function FlexContainer({ element: Element }) {
  const { items } = useContext(AppContext); // Pobierz items z kontekstu

  return (
    <Container className="my-4">
      <Row className="justify-content-center" style={{ width: "100%" }}>
        {items.map((item) => (
          <Col
            key={item.id}
            xs={12}
            sm={6}
            md={4}
            lg={4} // Zwiększ rozmiar kolumn, aby karty były szersze
            className="d-flex justify-content-center mb-4"
          >
            <div style={{ width: "100%", maxWidth: "350px" }}> {/* Ograniczenie szerokości */}
              <Element {...item} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FlexContainer;
