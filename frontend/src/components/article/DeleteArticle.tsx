import React from 'react';
import {Article} from "../../models/Article";
import {useNavigate, useParams} from "react-router-dom";

type DeleteArticleProps = {
    article: Article;
    articles: Article[];
    deleteArticle: (id: string) => void;
}

function DeleteArticle(props: DeleteArticleProps) {

    const params = useParams();
    const id = params.id;

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/homepage`;
        navigate(path);
    }

    const findArticle = props.articles.find((article) => article.id === id);

    if (findArticle === undefined) {
        return (<>Sorry no article found!</>)
    }
    if (id === undefined) {
        return (<>Article not found with this id!</>)
    }

    const handleRoute = () => {

        if (findArticle && findArticle.id) {
            props.deleteArticle(findArticle.id)
        }

        setTimeout(() => {
            routeChange()
        }, 1000);
    }

    return (
        <div className="modal fade" id="exampleModal6" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Article</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete <span style={{color: "red"}}> {findArticle.title}</span>?
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleRoute}
                            data-bs-dismiss="modal"
                        >Delete
                        </button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteArticle;