import { createContext, useState } from "react";

export const AppContext = createContext();

const ParentContext = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <AppContext.Provider value={{ isLoggedin, setIsLoggedin }}>
      {children}
    </AppContext.Provider>
  );
};

export default ParentContext;
