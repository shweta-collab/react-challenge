import { createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const providerValue = {
    user,
    setUser,
    selectedUserId,
    setSelectedUserId,
  };

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
