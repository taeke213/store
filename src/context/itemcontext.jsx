import { createContext, useContext, useState, useEffect } from "react";

const ItemContext = createContext();

export default function ItemContextProvider({ children }) {
  const [item, setItem] = useState([]);


  return (
    <>
    <ItemContext.Provider
      value={{
        item,
        setItem,
      }}
    >
      {children}
    </ItemContext.Provider>
    </>
  );
}

export const UserItems = () => {
  return useContext(ItemContext);
};