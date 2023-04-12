import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/comments";

const request = requestFactory();

export const createComment = (articleId, comment) => request.post(baseUrl, { articleId, text: comment });

export const getComment = (articleId) => {
    return fetch(`${baseUrl}?where=articleId%3D%22${encodeURIComponent(articleId)}%22`);
}

