import {Navigate, Outlet} from "react-router-dom";

type ProtectedProps = {
    isLoggedIn: boolean;
}


const Protected = (props: ProtectedProps) => {
    if (!props.isLoggedIn) {
        return <Navigate to="/" replace/>;
    }
    return <Outlet/>;
};
export default Protected;