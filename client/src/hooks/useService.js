import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useService = (serviceFactory) => {
    const authContext = useContext(AuthContext);
    const service = serviceFactory(authContext);

    return service;
}