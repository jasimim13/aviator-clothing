import React, { createContext, useState } from "react";


//Yahaan par context ki bunyaad hogi
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});


//Yahaan par yeh Provider doosre components ko batayega keh yahaan se value lo aur bhejo
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
