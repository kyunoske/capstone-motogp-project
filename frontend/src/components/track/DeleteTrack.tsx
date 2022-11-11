import React from 'react';
import {Track} from "../../models/Track";
import {useNavigate, useParams} from "react-router-dom";

type DeleteTrackProps = {
    track: Track;
    tracks: Track[];
    deleteTrack: (id: string) => void;
}

function DeleteTrack(props: DeleteTrackProps) {

    const params = useParams();
    const id = params.id;

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/homepage`;
        navigate(path);
    }

    const findTrack = props.tracks.find((track) => track.id === id);

    if (id === undefined) {
        return (<>Track not found with this id!</>)
    }

    if (findTrack === undefined) {
        return (<>Sorry no track found!</>)
    }

    const handleRoute = () => {

        if (findTrack && findTrack.id) {
            props.deleteTrack(findTrack.id)
        }

        setTimeout(() => {
            routeChange()
        }, 1000);
    }

    return (
        <div className="modal fade" id="exampleModal12" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Article</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete {findTrack.name}?
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

export default DeleteTrack;