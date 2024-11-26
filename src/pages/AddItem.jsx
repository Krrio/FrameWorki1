import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import AppContext from "../data/AppContext";

const AddItem = () => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const rating = formData.get("rating");

    // Walidacja danych
    const validationErrors = [];
    if (!name || name.length > 50) {
      validationErrors.push("Nazwa jest wymagana i nie może przekraczać 50 znaków.");
    }
    if (rating === "" || isNaN(rating) || rating < 0 || rating > 10) {
      validationErrors.push("Ocena musi być liczbą z zakresu od 0 do 10.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Dodanie nowego obiektu
    const newItem = {
      id: Date.now(), // Generowanie unikalnego ID
      name,
      rating: Number(rating),
    };
    dispatch({ type: "add", item: newItem }); // Wysłanie akcji do funkcji redukującej
    navigate("/lab4"); // Powrót do strony Lab4
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center mb-4">Dodaj obiekt</h1>
          {errors.length > 0 && (
            <Alert variant="danger">
              <ul className="mb-0">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </Alert>
          )}
          <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nazwa:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Wprowadź nazwę"
                maxLength={50}
                required
              />
              <Form.Text className="text-muted">
                Maksymalnie 50 znaków.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Ocena (0-10):</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                placeholder="Wprowadź ocenę"
                min="0"
                max="10"
                step="1"
                required
              />
              <Form.Text className="text-muted">
                Wprowadź liczbę z zakresu od 0 do 10.
              </Form.Text>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100"
            >
              Dodaj
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddItem;
