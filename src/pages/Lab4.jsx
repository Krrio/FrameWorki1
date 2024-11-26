import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../data/AppContext";
import ProfileCard from "../components/ProfileCard";
import { Button } from "react-bootstrap";


const Lab4 = () => {
  const { items } = useContext(AppContext); // Pobierz obiekty z kontekstu

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      <h1 className="mt-5">Laboratorium 4</h1>
      <Link to="/lab4/add" className="">
        <Button variant="primary" size="lg" className="ml-2 mt-5">Dodaj nowy obiekt</Button>
      </Link>
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-5">
        {items.map((item) => (
            <ProfileCard key={item.id} {...item} />
        ))}
    </div>
    </div>
  );
};

export default Lab4;
