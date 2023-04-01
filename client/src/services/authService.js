import {requestFactory} from "./requester";
import { notifications } from "../constants/Constants";

const baseUrl = "http://localhost:3030/users";

const request = requestFactory();

export const login = (email, password) => request.post(`${baseUrl}/login`, {email, password});

export const register = (email, password) => request.post(`${baseUrl}/register`, {email, password});

export const logout = () => request.get(`${baseUrl}/logout`);

export const getProfile = () => request.get(`${baseUrl}/profile`);

export const clearUserData = () => localStorage.removeItem('user');

export const getUserData = () => {
    let user = localStorage.getItem('user');

    if(!user) {
        throw new Error(notifications.userDataNotFound);
    }

    return JSON.parse(user);
}

export const isAuth = () => {
    return Boolean(getUserData());
};
