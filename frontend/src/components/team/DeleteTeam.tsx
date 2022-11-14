import React from 'react';
import {Team} from "../../models/Team";
import {useNavigate, useParams} from "react-router-dom";

type DeleteTeamProps = {
    team: Team;
    teams: Team[];
    deleteTeam: (id: string) => void
}

function DeleteTeam(props: DeleteTeamProps) {

    const params = useParams();
    const id = params.id;

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/homepage`;
        navigate(path);
    }

    const findTeam = props.teams.find((team) => team.id === id);

    if (id === undefined) {
        return (<>Team not found with this id!</>)
    }

    if (findTeam === undefined) {
        return (<>Sorry no team found!</>)
    }

    const handleRoute = () => {

        if (findTeam && findTeam.id) {
            props.deleteTeam(findTeam.id)
        }

        setTimeout(() => {
            routeChange()
        }, 1000);
    }

    return (
        <div className="modal fade" id="exampleModal10" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Team</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete <span style={{color: "red"}}> {findTeam.name}</span>?
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

export default DeleteTeam;