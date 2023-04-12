import { useState, useEffect } from "react";
import * as destinationService from "../services/destinationService";

const useArticleState = (id) => {
    const [article, setArticle] = useState({});

    useEffect(() => {
        destinationService.getOneDestination(id)
            .then(article => {
                setArticle(article)
            })
    }, [id]);

    return [article, setArticle];
}

export default useArticleState;