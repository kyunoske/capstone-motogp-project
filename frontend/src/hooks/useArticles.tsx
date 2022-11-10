import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Article} from "../models/Article";

function UseArticles() {

    let article!: Article;

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getAllArticles()
    }, [])

    const getAllArticles = () => {
        axios.get("/api/articles")
            .then((response) => response.data)
            .then((articles) => setArticles(articles))
            .catch((error) => console.log(error))
    }

    const getArticleById = (id: string) => {
        axios.get(`/api/articles/${id}`)
            .then(response => response.data)
            .catch((error) => console.log(error));
    }

    const addArticle = (article: Article) => {
        axios.post("/api/articles", article)
            .then(getAllArticles)
            .catch((error) => console.log(error))
    }

    const deleteArticle = (id: string) => {
        axios.delete("/api/articles/" + id)
            .then(() => getAllArticles())
            .catch((error) => console.log(error))
    }

    const editArticle = (id: string, article: Article) => {
        axios.put(`/api/articles/${id}`, article)
            .then(getAllArticles)
            .catch((error) => console.log(error))
    }

    return {article, articles, getAllArticles, getArticleById, addArticle, deleteArticle, editArticle};
}

export default UseArticles;