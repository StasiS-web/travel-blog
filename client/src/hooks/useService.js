import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useService = (serviceFactory) => {
    const authContext = useContext(AuthContext);
    const token = authContext?.token;
    const service = serviceFactory(token);

    return service;
}