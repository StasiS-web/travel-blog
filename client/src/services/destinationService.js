import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/destinations";

export const destinationServiceFactory = (accessToken) =>{
    const request = requestFactory(accessToken);

    const getAll = () => request.get(baseUrl);

    const getOneArticle = (destinationId) => request.get(`${baseUrl}/${destinationId}`);

    const getArticleByCategory = (category) => request.get(`${baseUrl}/category/${category}`);

    const getLatestArticle = (createOn) => request.get(`${baseUrl}/records?sortBy=${createOn}%20desc%2C_createdOn`);

    const create = (destinationData) => request.post(baseUrl, destinationData);

    const update = (destinationId, destinationData) => request.put(`${baseUrl}/${destinationId}`, destinationData);

    const removeArticle = (destinationId) => request.del(`${baseUrl}/${destinationId}`);

    return{
        getAll,
        getOneArticle,
        getArticleByCategory,
        getLatestArticle,
        create,
        update,
        delete: removeArticle,
    }

}
