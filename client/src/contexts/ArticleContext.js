import { createContext, useReducer, useEffect } from "react";
import { Navigate } from "react-router-dom";
import * as destinationService from "../services/destinationService";

export const ArticleContext = createContext();

const articleReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ARTICLES":
            return action.payload.map(x => ({ ...x, comments: []}));
        case "ADD_ARTICLE":
            return [...state, action.payload];
        case "FETCH_ARTICLE_DETAILS":
        case "EDIT_ARTICLE":
            return state.map(x => x._id === action.articleId ? action.payload : x);
        case "ADD_COMMENT":
            return state.map(x => x._id === action.articleId ? { ...x, comments: [...x.comments, action.payload]} : x);
        case "REMOVE_ARTICLE":
            return state.filter(x => x._id !== action.articleId);
        default: 
            return state;
    }
};

export const ArticleProvider = ({children }) => {
    const [articles, dispatch] = useReducer(articleReducer, []);

    useEffect(() => {
        destinationService.getAll()
            .then(result => {
                const action = {
                    type: "ADD_ARTICLES",
                    payload: result
                };

                dispatch(action);
            });
    }, []);

    const selectArticle = (articleId) => {
        return articles.find(x => x._id === articleId) || {};
    };

    const fetchArticleDetails = (articleId, articleDetails) => {
         dispatch({
            type: "FETCH_ARTICLE_DETAILS",
            payload: articleDetails ,
            articleId,
        });
    };

    const articleAdd = (articleData) => {
        dispatch({
            type: "ADD_ARTICLE",
            payload: articleData,
        });

        return <Navigate to="/destinations" />;
    };

    const articleEdit = (articleId, articleData) => {
        dispatch({
            type: "EDIT_ARTICLE",
            payload: articleData,
            articleId,
        });
    };

    const articleRemove = (articleId) => {
        dispatch({
            type: "REMOVE_ARTICLE",
            articleId,
        });
    }
    
    const addComment = (articleId, comment) => {
        dispatch({
            type: "ADD_COMMENT",
            payload: comment, 
            articleId
        });
    };


    return (
        <ArticleContext.Provider value={{
            articles,
            articleAdd,
            articleEdit,
            addComment ,
            fetchArticleDetails,
            selectArticle,
            articleRemove
        }}>
            {children}
       </ArticleContext.Provider>
    );
}