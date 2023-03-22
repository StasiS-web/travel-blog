import * as request from "./requester";
import { userUrl, notifications } from '../constants/Constants';

export const login = (email, password) => 
    request.post(`${userUrl}/login`, {email, password});

export const logout = async (accessToken) => {
    try{
        const response = await fetch(`${userUrl}/logout`, {
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
    request.post(`${userUrl}/register`, {email, password});

export const getUserData = () => {
    let user = localStorage.getItem('user');

    if(!user) {
        throw new Error(notifications.userDataNotFound);
    }

    return JSON.parse(user);
}

export function clearUserData(){
    localStorage.removeItem('user');
}

export const isAuth = () => {
    return Boolean(getUserData());
};