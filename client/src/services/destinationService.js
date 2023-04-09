import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/destinations";

export const destinationServiceFactory = (token) =>{
    const request = requestFactory(token);

    const getAll = () => request.get(baseUrl);

    const getOneDestination = (articleId) => request.get(`${baseUrl}/${articleId}`);

    const getArticleByCategory = (category) => request.get(`${baseUrl}/category/${category}`);

    const create = (destinationData) => request.post(baseUrl, destinationData);

    const edit = (articleId, destinationData) => request.put(`${baseUrl}/${articleId}`, destinationData);

    const remove = (articleId) => request.delete(`${baseUrl}/${articleId}`);

    return{
        getAll,
        getOneDestination,
        getArticleByCategory,
        create,
        edit,
        delete: remove,
    }

}
