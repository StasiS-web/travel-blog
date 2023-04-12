const baseUrl = "http://localhost:3030/data";

export const getAll = () => {
    return fetch(`${baseUrl}/destinations`)
        .then(response => response.json());
}

export const getOneDestination = (articleId) => {
    return fetch(`${baseUrl}/destinations/${articleId}`)
        .then(response => response.json());
}

export const getArticleByCategory = (category) => {
    return fetch(`${baseUrl}/destinations/category/${category}`)
        .then(response => response.json());
}

export const create = async (destinationData, token) => {
    let response = await fetch(`${baseUrl}/destinations`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(destinationData)
    });

    let result = await response.json();

    if (response.ok) {
        return result;
    }
    else {
        throw result.message;
    }
}

export const edit = (articleId, destinationData, token) => {
    return fetch(`${baseUrl}/destinations/${articleId}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(destinationData)
    });
}

export const remove = (articleId, token) =>{ 
    return fetch(`${baseUrl}/destinations/${articleId}`, {
        method: 'DELETE',
        headers: { 
            'X-Authorization': token
        }
    });
}
