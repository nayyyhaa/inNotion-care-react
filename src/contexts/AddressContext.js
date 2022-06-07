import { createContext, useContext, useReducer } from "react";
import { AddressReducer } from "reducers/addressReducer";
import { v4 as uuid } from "uuid";
import { useAuth } from "./AuthContext";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const { user } = useAuth();
  const [address, dispatchAddress] = useReducer(AddressReducer, [
    {
      _id: uuid(),
      firstName: "Neha",
      lastName: "Gupta",
      email: user?.email,
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
