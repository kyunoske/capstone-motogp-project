import {useEffect, useState} from 'react';
import axios from "axios";
import {Article} from "../models/Article";
import toast from 'react-hot-toast';

function UseArticles() {

    let article!: Article;

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllArticles()
    }, [])

    const getAllArticles = () => {
        axios.get("/api/articles")
            .then((response) => response.data)
            .then((articles) => setArticles(articles))
            .catch((error) => toast.error(error.message))
        setIsLoading(false)
    }

    const getArticleById = (id: string) => {
        axios.get(`/api/articles/${id}`)
            .then(response => response.data)
            .catch((error) => toast.error(error.message))
        setIsLoading(false)
    }

    const addArticle = (article: Article) => {
        axios.post("/api/articles", article)
            .then(getAllArticles)
            .then(() => toast.success("A new article has been added!"))
            .catch((error) => toast.error(error.message))
    }

    const deleteArticle = (id: string) => {
        axios.delete("/api/articles/" + id)
            .then(() => getAllArticles())
            .then(() => toast.success("Article has been deleted"))
            .catch((error) => toast.error(error.message))
    }

    const editArticle = (id: string, article: Article) => {
        axios.put(`/api/articles/${id}`, article)
            .then(getAllArticles)
            .then(() => toast.success("Article has been updated"))
            .catch((error) => toast.error(error.message))
    }

    return {article, articles, getAllArticles, getArticleById, addArticle, deleteArticle, editArticle, isLoading};
}

export default UseArticles;