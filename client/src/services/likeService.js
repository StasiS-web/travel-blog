const baseUrl = "http://localhost:3030/data";

export const likes = (articleId, userId, token) => {
    return fetch(`${baseUrl}/likes`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ userId, articleId})
    }).then(result => result.json());
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