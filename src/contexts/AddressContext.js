import { createContext, useContext, useReducer } from "react";
import { AddressReducer } from "reducers/addressReducer";
import { v4 as uuid } from "uuid";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [address, dispatchAddress] = useReducer(AddressReducer, [
    {
      _id: uuid(),
      firstName: "Neha",
      lastName: "Gupta",
      email: JSON.parse(localStorage.getItem("user")).email,
      address: "Flat 55A, Block H, Supertech Apartments",
      city: "Agra",
      state: "Uttar Pradesh",
      pincode: "802302",
      phNo: "9723678954",
    },
  ]);
  return <AddressContext.Provider value={{ address, dispatchAddress }}>{children}</AddressContext.Provider>;
};

const useAddress = () => useContext(AddressContext);

export { useAddress, AddressProvider };
