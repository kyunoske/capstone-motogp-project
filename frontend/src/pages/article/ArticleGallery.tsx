import React, {useState} from 'react';
import "./ArticleGallery.css";
import {Article} from "../../models/Article";
import ArticleCard from "../../components/article/ArticleCard";
import {Link} from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

type ArticleGalleryProps = {
    articles: Article[];
    isLoading: boolean;
}

function ArticleGallery(props: ArticleGalleryProps) {
    const [data, setData] = useState("");
    const sorting = [...props.articles].sort((a, b) => +a.articleNumber < +b.articleNumber ? 1 : -1)
    const filteredArticles = sorting.filter((article) => article.title.toLowerCase().includes(data));

    return (
        <div>
            <div className="article-input-container">
                <Link to={"/"} className="link-to-themes-article">
                    <button className="btn button-add back-to-themes-article">Back to Themes
                    </button>
                </Link>
                <div className="input-group input-group-sm mb-3" style={{width: "50%"}}>
                    <input style={{width: "80%", borderRadius: "5px"}} type="text" placeholder="Find an article..."
                           onChange={(event) => setData(event.target.value)}/>
                </div>
            </div>

            <div className="article-gallery-container">
                {filteredArticles.map((article, index) =>
                    <ArticleCard article={article} key={index} isLoading={props.isLoading}/>
                )}
            </div>
        </div>
    );
}

export default ArticleGallery;