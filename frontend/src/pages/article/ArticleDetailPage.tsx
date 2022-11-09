import React from 'react';
import "./ArticleDetailPage.css";
import {Article} from "../../models/Article";
import {useParams} from "react-router-dom";
import EditArticle from "../../components/article/EditArticle";
import DeleteArticle from "../../components/article/DeleteArticle";

type ArticleDetailPageProps = {
    article: Article;
    articles: Article[];
    editArticle: (id: string, article: Article) => void;
    deleteArticle: (id: string) => void;
}

function ArticleDetailPage(props: ArticleDetailPageProps) {

    const params = useParams();
    const id = params.id;

    if (id === undefined) {
        return (<>Article not found with this id!</>)
    }

    const article = props.articles.find((article) => article.id === id);

    if (article === undefined) {
        return (<>Sorry no article found!</>)
    }

    return (
        <div className="article-detail-container">
            <span className="span-filler-left-side"></span>
            <div className="article-detail-container-image-text">
                <div>
                    <div className="article-detail-title">{article.title}</div>
                    <div className="article-detail-image-container">
                        <img src={article.image} alt={article.image} className="article-detail-image"/>
                    </div>
                    <div className="article-detail-text-container">
                        <div className="article-detail-text">{article.text}</div>
                    </div>
                </div>
                <div className="article-modal-button-group">
                    <EditArticle article={props.article} articles={props.articles} editArticle={props.editArticle}/>
                    <button type="button"
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal5"
                            style={{
                                width: "30%",
                                justifyContent: "center",
                            }}
                    >
                        Edit Article
                    </button>
                    <DeleteArticle article={props.article} deleteArticle={props.deleteArticle}
                                   articles={props.articles}/>
                    <button
                        className="btn me-md-2 btn-outline-danger"
                        style={{
                            width: "30%",
                            justifyContent: "center",
                        }}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal6"
                    >Delete
                    </button>
                </div>
            </div>
            <span className="span-filler-right-side"></span>
        </div>
    );
}

export default ArticleDetailPage;