import React from 'react';
import "./ArticleDetailPage.css";
import {Article} from "../models/Article";
import {useParams} from "react-router-dom";

type ArticleDetailPageProps = {
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
                <div className="article-detail-title">{article.title}</div>
                <div className="article-detail-image-container">
                    <img src={article.image} alt={article.image} className="article-detail-image"/>
                </div>
                <div className="article-detail-text-container">
                    <div className="article-detail-text">{article.text}</div>
                </div>
            </div>
            <span className="span-filler-right-side"></span>
        </div>
    );
}

export default ArticleDetailPage;