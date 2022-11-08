import React from 'react';
import "./ArticleCard.css";
import {Article} from "../models/Article";

type ArticleCardProps = {
    article: Article;
}

function ArticleCard(props: ArticleCardProps) {
    return (
        <div className="card mb-3" style={{marginTop: "20px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.article.image} className="img-fluid rounded-start" alt={props.article.image}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body card-article-text-container">
                        <h5 className="card-title">{props.article.title}</h5>
                        <p className="card-text">{props.article.text}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;