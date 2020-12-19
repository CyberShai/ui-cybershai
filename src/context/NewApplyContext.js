import React, { useState } from "react";

const NewApplyContext = React.createContext({});

export function NewApplyContextProvider({ children }) {
  const [showed, setShowed] = useState("hidden");
  return (
    <NewApplyContext.Provider value={{ showed, setShowed }}>
      {children}
    </NewApplyContext.Provider>
  );
}

export default NewApplyContext;
