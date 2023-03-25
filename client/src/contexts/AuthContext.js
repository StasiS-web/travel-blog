import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const initialState = {
  _id: '',
  email: '',
  accessToken: '',
  photo: '',
  name: '',
  bio: '',
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage('auth', initialState);

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const updateProfile = (profileData) => {
    setAuth({...auth, ...profileData});
  };

  const userLogout = () => {
    setAuth(initialState);
  };

  return (
    <AuthContext.Provider value={{
        user: auth,
        userLogin,
        userLogout,
        updateProfile,
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
