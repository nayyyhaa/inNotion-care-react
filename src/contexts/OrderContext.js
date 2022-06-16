import { useState, createContext, useContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { useAuth } from "./AuthContext";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const { user } = useAuth();
  const [order, setOrder] = useState({});
  return <OrderContext.Provider value={{ order, setOrder }}>{children}</OrderContext.Provider>;
};

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };
