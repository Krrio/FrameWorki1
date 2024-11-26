import React from "react";

const RatingBar = ({ rate }) => {
  const rating = Math.max(0, Math.min(rate, 10)); // Upewnienie się, że ocena mieści się w przedziale 0–10

  return (
    <div style={{ display: "flex", gap: "0.2em", justifyContent: "center" }}>
      {[...Array(10)].map((_, index) => (
        <span
          key={index}
          style={{
            fontSize: "1.5em",
            color: index < rating ? "#FFD700" : "#ccc", // Złote gwiazdki dla aktywnych ocen, szare dla pozostałych
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingBar;
