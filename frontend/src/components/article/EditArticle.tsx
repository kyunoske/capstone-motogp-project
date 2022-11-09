import React, {FormEvent, useState} from 'react';
import {Article} from "../../models/Article";
import {useParams} from "react-router-dom";

type EditArticleProps = {
    article: Article;
    articles: Article[];
    editArticle: (id: string, article: Article) => void;
}

function EditArticle(props: EditArticleProps) {

    const params = useParams();
    const id = params.id;

    const findArticle = props.articles.find((article) => article.id === id);

    const [article, setArticle] = useState(findArticle)

    const [title, setTitle] = useState(findArticle ? findArticle.title : "")
    const [text, setText] = useState(findArticle ? findArticle.text : "")
    const [image, setImage] = useState(findArticle ? findArticle.image : "")
    const [image2, setImage2] = useState(findArticle ? findArticle.image2 : "")
    const [image3, setImage3] = useState(findArticle ? findArticle.image3 : "")
    const [articleNumber, setArticleNumber] = useState(findArticle ? findArticle.articleNumber : "")

    if (id === undefined) {
        return (<>Article not found with this id!</>)
    }

    if (findArticle === undefined) {
        return (<>Sorry no article found!</>)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        let updatedArticle: Article = {
            id,
            title,
            text,
            image,
            image2,
            image3,
            articleNumber
        }

        setArticle(updatedArticle);

        props.editArticle(id, updatedArticle);
    }

    return (
        <div className="modal fade" id="exampleModal5" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Article</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} style={{
                            margin: "auto",
                            width: "95%"
                        }}>
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="title"
                                required={true}
                                type="text"
                                value={title}
                                placeholder="Article Title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <textarea
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="text"
                                required={true}
                                rows={3}
                                value={text}
                                placeholder="Article Text"
                                onChange={(e) => setText(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image"
                                type="text"
                                value={image}
                                placeholder="image"
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image2"
                                type="text"
                                value={image2}
                                placeholder="image2"
                                onChange={(e) => setImage2(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image3"
                                type="text"
                                value={image3}
                                placeholder="image3"
                                onChange={(e) => setImage3(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="articleNumber"
                                required={true}
                                type="text"
                                value={articleNumber}
                                placeholder="Article Number"
                                onChange={(e) => setArticleNumber(e.target.value)}
                            />
                            <div className="button-group" style={{display: "flex", justifyContent: "space-evenly"}}>
                                <button type="submit" className="btn btn-success" data-bs-dismiss="modal"
                                        style={{width: "200px"}}>Edit Article
                                </button>
                                <button type="button" className="btn btn-secondary" style={{width: "200px"}}
                                        data-bs-dismiss="modal">Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditArticle;