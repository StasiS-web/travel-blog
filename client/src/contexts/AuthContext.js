import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage"

export const AuthContext = createContext();

const initialState = {
    _id: "",
    email: "",
    accessToken: "",
    photo: "",
    displayName: "",
    bio: "",
};

export const AuthProvider = ({ children }) =>{
    const [ user, setUser ] = useLocalStorage('user', initialState);

    const userLogin = (authData) => {
        setUser(authData);
    };

    const updateProfileData = (profileData) => {
        setUser({ ...user, ...profileData });
    };

    function userLogout() {
        setUser(initialState);
    };

    return (
        <AuthContext.Provider value={{ user, userLogin, userLogout, updateProfileData, isAuthenticated: Boolean(user.email) }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authState = useContext(AuthContext);
    return authState;
};

