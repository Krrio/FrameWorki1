// src/data/AppReducer.js
export default function AppReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.item]; // Dodanie nowego obiektu do istniejącej tablicy
    case "edit":
      return state.map((item) =>
        item.id === action.item.id ? action.item : item
      );
    case "delete":
      return state.filter((item) => item.id !== action.id);
    case "rate":
      return state.map((item) =>
        item.id === action.id ? { ...item, rating: action.rating } : item
      );
    default:
      return state;
  }
}
