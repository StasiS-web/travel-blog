const baseUrl = "http://localhost:3030/data";

export const likes = async (articleId, userId) => {
    let userItem = localStorage.getItem("user");
    let user = JSON.parse(userItem);
    user = user.accessToken

    let response = await fetch(`${baseUrl}/likes/`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'X-Authorization': user,
        },
        body: JSON.stringify({ userId, articleId }),
    });

    let result = await response.json();
    return Object.values(result);
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