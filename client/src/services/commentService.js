const baseUrl = "http://localhost:3030/data/comments";

export const createComment = (articleId, comment, token) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         "X-Authorization": token
        },
        body: JSON.stringify({comment, articleId})
    }).then(response => response.json());
}

export const getComment = (articleId) => {
    return fetch(`${baseUrl}?where=articleId%3D%22${encodeURIComponent(articleId)}%22`)
        .then(result => result.json());
}

