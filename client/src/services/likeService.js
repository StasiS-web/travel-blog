const baseUrl = "http://localhost:3030/data";

export const likes = async (articleId, article, token) => {
    let response = fetch(`${baseUrl}/likes/${articleId}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(article),
    });

    let result = await response.json();
    return result;
}

export const getLikes = (articleId,) => {
    const search = encodeURIComponent(`articleId="${articleId}"`);

    return fetch(`${baseUrl}/likes?select=userId&where=${search}`)
        .then(result => result.map(x => x.userId));
};

export const dislike = (userId, token) => {
    return fetch(`${baseUrl}/dislike/${userId}`, {
        method: 'DELETE',
        headers: { 
            'X-Authorization': token
        },
    });
}