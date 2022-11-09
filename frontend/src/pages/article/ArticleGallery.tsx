import React from 'react';
import {Article} from "../../models/Article";
import ArticleCard from "../../components/article/ArticleCard";

type ArticleGalleryProps = {
    articles: Article[];
}

function ArticleGallery(props: ArticleGalleryProps) {

    const sorting = [...props.articles].sort((a, b) => +a.articleNumber < +b.articleNumber ? 1 : -1)

    return (
        <div>
            {sorting.map((article, index) =>
                <ArticleCard article={article} key={index}/>
            )}
        </div>
    );
}

export default ArticleGallery;