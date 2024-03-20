import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
// import {getTokenData} from '../utils/decodeToken'

export const withAuth = (Component) => {

    function Auth(props) {
        const user = useSelector((store) => store.authReducer.user);
        const token = localStorage.getItem('token');
        console.log("withAuth token", token)
        console.log("withAuth loggedIn", user.loggedIn)
        if(!token && !user.loggedIn) {
            return <Navigate to="/login"/>
        }
        // const expiration = getTokenData(token).exp

        // if (expiration < Date.now() / 1000) {
        //     return <Navigate to="login"/>
        // }



        return <Component {...props} />
    }

    return Auth;

}
