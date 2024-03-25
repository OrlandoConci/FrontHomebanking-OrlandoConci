import React, {useEffect} from 'react';
import { useSelector} from 'react-redux'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import authActions from '../redux/actions/auth.actions'

function Dashboard() {
    const user = useSelector((store) => store.authReducer.user)
    const token = localStorage.getItem('token');
    // const token = useSelector((store) => store.authReducer.token)
    const dispatch = useDispatch();
    const { current, login } = authActions

    // console.log(user);
    // console.log(token)

    useEffect(() => {
        if (user.name == "") {
            axios.get('/api/clients/current/', {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                console.log("Entré", res.data);

                dispatch(current(res.data))
            })
            .catch(console.log("No entraste master"))
        }
    }, [])
    console.log("user:", user);

    const username = user.name || 'Guest'


    return (
        <div>
            Welcome to Dashboard, {username}
        </div>
    )
}

export default Dashboard;