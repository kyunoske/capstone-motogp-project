import React from 'react';
import "./ArticleCard.css";
import {Article} from "../../models/Article";
import {Link} from "react-router-dom";

type ArticleCardProps = {
    article: Article;
    isLoggedIn: boolean;
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
                        {props.isLoggedIn ?
                            <Link to={"/admin/articles/" + props.article.id} style={{textDecoration: "none"}}>
                                <h4 className="card-title">{props.article.title}</h4>
                            </Link> :
                            <Link to={"/articles/" + props.article.id} style={{textDecoration: "none"}}>
                                <h4 className="card-title">{props.article.title}</h4>
                            </Link>}
                        <p className="card-text">{props.article.text}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;