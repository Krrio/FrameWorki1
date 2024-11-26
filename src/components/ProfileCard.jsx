import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppContext from "../data/AppContext";
import RatingBar from "./RatingBar"; // Import komponentu RatingBar

const ProfileCard = ({ id, name, rating }) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({ type: "delete", id });
  };

  const handleRate = () => {
    dispatch({ type: "rate", id, rating: rating === 10 ? 0 : rating + 1 });
  };

  return (
    <Card style={{ width: "18rem" }} className="border mb-3 mx-2">
      <Card.Body>
        <Card.Title className="text-center">{name || "Brak imienia"}</Card.Title>
        <Card.Text>
          <RatingBar rate={rating} /> {/* Wyświetlanie gwiazdek */}
        </Card.Text>
        <div className="d-flex flex-sm-row flex-column gap-2">
          <Link to={`/lab4/edit/${id}`}>
            <Button variant="primary" className="w-100">Edytuj</Button>
          </Link>
          <Button variant="danger" onClick={handleDelete} className="w-100">Usuń</Button>
          <Button variant="success" onClick={handleRate} className="w-100">Ocen: {rating}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
