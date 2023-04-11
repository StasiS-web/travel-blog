import { notifications } from "../constants/Constants";

const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
    let response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let result = await response.json();

    if(response.ok){
        return result;
    }
    else {
        throw result.message;
    }
}

export const register = async (email, password) => {
    let response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let result = await response.json();

    if(response.ok) {
        return result;
    } else {
        throw result.message;
    }
}

export const logout = (token) => {
    return fetch(`${baseUrl}/logout`, {
        method: 'POST',
        headers: { 
            'X-Authorization': token
        }
    });
}

export const getProfile = () => {
    return fetch(`${baseUrl}/profile`)
        .then(response => response.json());
}

export const clearUserData = () => localStorage.removeItem('user');

export const getUserData = () => {
    let user = localStorage.getItem('user');

    if(user === null) {
        throw new Error(notifications.userDataNotFound);
    }

    return JSON.parse(user);
}

export const isAuth = () => {
    return Boolean(getUserData());
};


