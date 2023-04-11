import { requestFactory } from "./requester.js";

const baseUrl = "http://localhost:3030/data/comments";

const request = requestFactory();

export const createComment = (articleId, commentData) => {
    return request.put(`${baseUrl}/${articleId}`, commentData);
}

export const getComment = (articleId) => {
    return fetch(`${baseUrl}?where=articleId%3D%22${encodeURIComponent(articleId)}%22`);
}
