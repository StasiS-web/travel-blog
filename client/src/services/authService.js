import * as request from "./requester";
import { userUrl, notifications } from '../constants/Constants';

const getUserData = () => {
    let user = localStorage.getItem('user');

    if(!user) {
        throw new Error(notifications.userDataNotFound);
    }

    return JSON.parse(user);
}

const login = (email, password) => 
    request.post(`${userUrl}/login`, {email, password});

const logout = async (accessToken) => {
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

const register = (email, password) =>
    request.post(`${userUrl}/register`, {email, password});

function saveUserData(data){
    let {user: {email, uid} } = data;
    localStorage.setItem('user', JSON.stringify({email, uid}));
}

function clearUserData(){
    localStorage.removeItem('user');
}

const authServices = {
    getUserData,
    login,
    logout,
    register,
    saveUserData,
    clearUserData
}

export default authServices;