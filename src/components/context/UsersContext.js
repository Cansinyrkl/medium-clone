import React, { createContext, useReducer } from "react";

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [users, usersDispatch] = [
    { id: 1, username: "user", password: "user" },
    { id: 2, username: "user1", password: "user1" },
  ];

  return (
    <UsersContext.Provider value={{ users, usersDispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
