import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/destinations";

export const destinationServiceFactory = (token) =>{
    const request = requestFactory(token);

    const getAll = () => request.get(baseUrl);

    const getOneArticle = (postId) => request.get(`${baseUrl}/${postId}`);

    const getArticleByCategory = (category) => request.get(`${baseUrl}/category/${category}`);

    const create = (destinationData) => request.post(baseUrl, destinationData);

    const edit = (postId, destinationData) => request.put(`${baseUrl}/${postId}`, destinationData);

    const remove = (postId) => request.del(`${baseUrl}/${postId}`);

    return{
        getAll,
        getOneArticle,
        getArticleByCategory,
        create,
        edit,
        delete: remove,
    }

}
