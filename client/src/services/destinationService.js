import * as request from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/destinations";

export const getAll = () => request.get(baseUrl);

export const getOneById = (destinationId) => request.get(`${baseUrl}/${destinationId}`);

export const getArticleByCategory = (category) => request.get(`${baseUrl}/category/${category}`);

export const create = (destinationData) => request.post(baseUrl, destinationData);

export const update = (destinationId, destinationData) => request.put(`${baseUrl}/${destinationId}`, destinationData);

export const remove = (destinationId) => request.del(`${baseUrl}/${destinationId}`);
