import React, {useState} from 'react';
import "./ArticleGallery.css";
import {Article} from "../../models/Article";
import ArticleCard from "../../components/article/ArticleCard";
import {Link} from "react-router-dom";

type ArticleGalleryProps = {
    articles: Article[];
}

function ArticleGallery(props: ArticleGalleryProps) {
    const [data, setData] = useState("");
    const sorting = [...props.articles].sort((a, b) => +a.articleNumber < +b.articleNumber ? 1 : -1)
    const filteredArticles = sorting.filter((article) => article.title.toLowerCase().includes(data));

    return (
        <div>
            <div className="article-input-container">
                <Link to={"/"} className="link-to-themes">
                    <button className="btn button-add back-to-themes">Back to Themes
                    </button>
                </Link>
                <div className="input-group input-group-sm mb-3" style={{width: "50%"}}>
                    <input style={{width: "80%", borderRadius: "5px"}} type="text" placeholder="Find a rider..."
                           onChange={(event) => setData(event.target.value)}/>
                </div>
            </div>

            <div>
                {filteredArticles.map((article, index) =>
                    <ArticleCard article={article} key={index}/>
                )}
            </div>
        </div>
    );
}

export default ArticleGallery;