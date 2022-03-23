import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService, signupService } from "toolkit/utils";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("token");
    if (token) return { token, isAuth: true };
    return { token: "", isAuth: false };
  });
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) ?? "");

  const navigate = useNavigate();

  const loginHandler = async (e, email, password) => {
    e.preventDefault();
    const [token, userData] = await loginService("/api/auth/login", email, password);
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("isAuth", true);
    localStorage.setItem("user", JSON.stringify(userData));
    setAuth({ token, isAuth: true });
    navigate("/");
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    setAuth({ token: "", isAuth: false });
    navigate("/login");
  };

  const signupHandler = async (e, email, password, firstName, lastName) => {
    e.preventDefault();
    const [token, userData] = await signupService("/api/auth/signup", email, password, firstName, lastName);
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("isAuth", true);
    localStorage.setItem("user", JSON.stringify(userData));
    setAuth({ token, isAuth: true });
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser, loginHandler, logoutHandler, signupHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
