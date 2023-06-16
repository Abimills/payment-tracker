// src/AppState.js
import React, { createContext, useState } from "react";

// Create the initial state
const initialState = {
  // Add your initial state values here
};

// Create the context
export const AppContext = createContext(initialState);

// Create the context provider
export const AppProvider = ({ children }) => {
  const [thisWeek, setThisWeek] = useState([]);
  const [thisMonth, setThisMonth] = useState([]);

  // Add your state manipulation functions here

  return (
    <AppContext.Provider
      value={{ thisWeek, setThisWeek, thisMonth, setThisMonth }}
    >
      {children}
    </AppContext.Provider>
  );
};
