import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import * as authService from "../services/authService";

const initialState = {
  _id: '',
  email: '',
  accessToken: '',
  photo: '',
  name: '',
  jobTitle: '',
  bio: '',
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage('auth', initialState);

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const registerUser = (values) => {
    const { confirmPassword, ...registerData} = values;
    if(confirmPassword !== registerData.password) {
      return;
    }

      const result = authService.register(registerData);
      setAuth(result);
  }

  const updateProfile = (profileData) => {
    setAuth({...auth, ...profileData});
  };

  const userLogout = () => {
    authService.logout();
    setAuth(initialState);
  };

  return (
    <AuthContext.Provider value={{
        user: auth,
        userLogin,
        userLogout,
        updateProfile,
        registerUser,
        isAuth: auth.accessToken,
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
