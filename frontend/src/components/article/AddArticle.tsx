import React, {FormEvent, useState} from 'react';
import {Article} from "../../models/Article";

type AddArticleProps = {
    article: Article;
    addArticle: (article: Article) => void;
}

function AddArticle(props: AddArticleProps) {

    const [article, setArticle] = useState(props.article)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [image, setImage] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [articleNumber, setArticleNumber] = useState("")

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        let article = {
            title,
            text,
            image,
            image2,
            image3,
            articleNumber
        }

        setArticle(article);
        if (article) {
            props.addArticle(article);
        }
    }

    return (
        <div className="modal fade" id="exampleModal4" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Article</h5>
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
                                placeholder="Article Title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <textarea
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="text"
                                required={true}
                                rows={3}
                                placeholder="Article Text"
                                onChange={(e) => setText(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image"
                                type="text"
                                placeholder="image"
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image2"
                                type="text"
                                placeholder="image2"
                                onChange={(e) => setImage2(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image3"
                                type="text"
                                placeholder="image3"
                                onChange={(e) => setImage3(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="articleNumber"
                                required={true}
                                type="text"
                                placeholder="Article Number"
                                onChange={(e) => setArticleNumber(e.target.value)}
                            />
                            <div className="button-group" style={{display: "flex", justifyContent: "space-evenly"}}>
                                <button type="submit" className="btn btn-success" data-bs-dismiss="modal"
                                        style={{width: "200px"}}>Add Article
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

export default AddArticle;