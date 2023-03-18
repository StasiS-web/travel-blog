import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage('auth', {});

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };

  const isAuthenticated = Object.keys(auth).length > 0;

  return (
    <AuthContext.Provider value={{
        user: auth,
        userLogin,
        userLogout,
        isAuthenticated,
    }}>
        {children}
    </AuthContext.Provider>
  )
}
