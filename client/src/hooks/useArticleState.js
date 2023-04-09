import { useState, useEffect } from "react";
import { useService } from "../hooks/useService";
import { destinationServiceFactory } from "../services/destinationService";

const useArticleState = (id) => {
    const [article, setArticle] = useState({});
    const destinationService = useService(destinationServiceFactory);

    useEffect(() => {
        destinationService.getOneDestination(id)
            .then(article => {
                setArticle(article)
            })
    }, [id]);

    return [article, setArticle];
}

export default useArticleState;