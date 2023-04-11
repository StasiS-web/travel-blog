const baseUrl = "http://localhost:3030/data/destinations";

export const getAll = () => {
    return fetch(`${baseUrl}`)
        .then(response => response.json());
}

export const getOneDestination = (articleId) => {
    return fetch(`${baseUrl}/${articleId}`)
        .then(response => response.json());
}

export const create = (destinationData, token) => {
    let response = fetch(`${baseUrl}`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(destinationData)
    });

    let result = response.json();

    if (response.ok) {
        return result;
    }
    else {
        throw result.message;
    }
}

export const edit = (articleId, destinationData, token) => {
    return fetch(`${baseUrl}/${articleId}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(destinationData)
    });
}

export const remove = (articleId, token) =>{ 
    return fetch(`${baseUrl}/${articleId}`, {
        method: 'DELETE',
        headers: { 
            'X-Authorization': token
        }
    });
}
