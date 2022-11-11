import React from 'react';
import {Rider} from "../../models/Rider";
import {useNavigate, useParams} from "react-router-dom";

type DeleteRiderProps = {
    rider: Rider;
    riders: Rider[];
    deleteRider: (id: string) => void;
}

function DeleteRider(props: DeleteRiderProps) {

    const params = useParams();
    const id = params.id;

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/homepage`;
        navigate(path);
    }

    const findRider = props.riders.find((rider) => rider.id === id);

    if (findRider === undefined) {
        return (<>Sorry no rider found!</>)
    }
    if (id === undefined) {
        return (<>Rider not found with this id!</>)
    }

    const handleRoute = () => {
        if (findRider && findRider.id) {
            props.deleteRider(findRider.id)
        }

        setTimeout(() => {
            routeChange()
        }, 1000);
    }

    return (
        <div className="modal fade" id="exampleModal8" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Article</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete <span
                        style={{color: "red"}}> {findRider.firstName}&nbsp;{findRider.lastName}</span>?
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleRoute}
                            data-bs-dismiss="modal"
                        >Delete
                        </button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteRider;