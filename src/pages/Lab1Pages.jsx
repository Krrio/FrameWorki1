// src/pages/Lab1Pages.jsx
import React, { useContext } from "react";
import AppContext from "../data/AppContext";

const Lab1Pages = () => {
  const { items } = useContext(AppContext); // Pobierz items z kontekstu

  return (
    <main>
      <h1>Book List</h1>
      <ul>
        {items.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} (Released: {book.releaseDate})
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Lab1Pages;
