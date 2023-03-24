import * as request from "./requester";
import { notifications } from '../constants/Constants';

const baseUrl = "http://localhost:3030/users";

export const login = (email, password) => 
    request.post(`${baseUrl}/login`, {email, password});

export const logout = async (accessToken) => {
    try{
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization':  accessToken
            }
        });

        return response;
    }
    catch(error){
        console.log(error);
    }
}

export const register = (email, password) =>
    request.post(`${baseUrl}/register`, {email, password});

export const getUserData = () => {
    let user = localStorage.getItem('user');

    if(!user) {
        throw new Error(notifications.userDataNotFound);
    }

    return JSON.parse(user);
}

export const getProfile = () => request.get(`${baseUrl}/profile`);

export function clearUserData(){
    localStorage.removeItem('user');
}

export const isAuth = () => {
    return Boolean(getUserData());
};