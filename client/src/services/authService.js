import * as request from "./requester";
import { userUrl } from '../constants/constants';

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
