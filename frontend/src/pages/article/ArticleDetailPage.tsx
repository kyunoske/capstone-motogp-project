import React from 'react';
import "./ArticleDetailPage.css";
import {Article} from "../../models/Article";
import {Link, useParams} from "react-router-dom";

type ArticleDetailPageProps = {
    article: Article;
    articles: Article[];
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
                <Link to={"/homepage"} className="link-to-themes">
                    <button className="btn button-add back-to-themes-track">Back to Articles
                    </button>
                </Link>
                <div>
                    <div className="article-detail-title">{article.title}</div>
                    <div className="article-detail-image-container">
                        <img src={article.image} alt={article.image} className="article-detail-image"/>
                    </div>
                    <div className="article-detail-text-container">
                        <div className="article-detail-text">{article.text}</div>
                    </div>
                </div>
            </div>
            <span className="span-filler-right-side"></span>
        </div>
    );
}

export default ArticleDetailPage;