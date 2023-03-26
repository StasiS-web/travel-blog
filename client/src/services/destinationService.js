import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data";

export const destinationServiceFactory = (accessToken) =>{
    const request = requestFactory(accessToken);

    const getAll = () => request.get(`${baseUrl}/destinations`);

    const getOneArticle = (postId) => request.get(`${baseUrl}/destinations/${postId}`);

    const getArticleByCategory = (category) => request.get(`${baseUrl}/destinations/category/${category}`);

    const getLatestArticle = (createOn) => request.get(`${baseUrl}/destinations?sortBy=${createOn}%20desc%2C_createdOn`);

    const create = (destinationData) => request.post(`${baseUrl}/destinations`, destinationData);

    const edit = (postId, destinationData) => request.put(`${baseUrl}/destinations/${postId}`, destinationData);

    const remove = (postId) => request.del(`${baseUrl}/destinations/${postId}`);

    return{
        getAll,
        getOneArticle,
        getArticleByCategory,
        getLatestArticle,
        create,
        edit,
        delete: remove,
    }

}
