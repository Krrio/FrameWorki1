import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import AppContext from "../data/AppContext";

const EditItem = () => {
  const { id } = useParams();
  const { items, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const item = items.find((item) => item.id === parseInt(id, 10));
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: item?.name || "",
      rating: item?.rating || 0,
    },
  });

  const onSubmit = (data) => {
    const updatedItem = {
      ...item,
      name: data.name,
      rating: Number(data.rating),
    };
    dispatch({ type: "edit", item: updatedItem }); // Wysłanie akcji do funkcji redukującej
    navigate("/lab4"); // Powrót do strony Lab4
  };

  if (!item) {
    return (
      <Container className="py-5 text-center">
        <h1>Nie znaleziono obiektu do edycji</h1>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center mb-4">Edytuj obiekt</h1>
          <Form onSubmit={handleSubmit(onSubmit)} className="shadow p-4 rounded bg-light">
            <input type="hidden" name="id" value={item.id} />
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nazwa:</Form.Label>
              <Form.Control
                type="text"
                {...register("name", {
                  required: "Nazwa jest wymagana.",
                  maxLength: {
                    value: 50,
                    message: "Nazwa nie może przekraczać 50 znaków.",
                  },
                })}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Ocena (0-10):</Form.Label>
              <Form.Control
                type="number"
                {...register("rating", {
                  required: "Ocena jest wymagana.",
                  min: {
                    value: 0,
                    message: "Ocena musi być liczbą od 0 do 10.",
                  },
                  max: {
                    value: 10,
                    message: "Ocena musi być liczbą od 0 do 10.",
                  },
                })}
                isInvalid={!!errors.rating}
              />
              <Form.Control.Feedback type="invalid">
                {errors.rating?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Zapisz zmiany
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditItem;
