import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const initialState = {
  _id: '',
  name: '',
  email: '',
  accessToken: '',
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage('auth', initialState);

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth(initialState);
  };

  return (
    <AuthContext.Provider value={{
        user: auth,
        userLogin,
        userLogout,
        isAuth: auth.name,
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
   const authState = useContext(AuthContext);

   return authState;
}

export const withAuth = (Component) => {
  const AuthWrapper = (props) => {
    const context = useContext(AuthContext);

    return <Component {...props} auth={context} />;
  }

  return AuthWrapper;
}
