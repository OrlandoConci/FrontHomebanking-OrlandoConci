import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useDispatch } from "react-redux";
import authActions from '../redux/actions/auth.actions'
import { useNavigate } from "react-router-dom";
import ButtonMod from "../components/ButtonMod";
import {withAnimation} from '../hocs/withAnimation'

function Login() {
    const [userData, setUserData] = useState({email: "", password: ""})
    const dispatch = useDispatch()
    const {login, current} = authActions
    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault()
        axios.post("/api/auth/login", userData)
        .then((res) => {
            console.log("token", res.data)
            dispatch(login(res.data))
            
            if(res.data) {
                axios.get('/api/clients/current/', {
                    headers:{
                        Authorization: `Bearer ${res.data}`
                    }
                })
                .then((res) => {
                    console.log("Entré", res.data);

                    dispatch(current(res.data))
                    navigate('/')
                })
                .catch(console.log("No entraste master"))
            }
        })
        .catch(err => {console.log(err)
        return alert("The data entered does not match")})
    }

    function handleInput(e) {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    console.log(userData)

    const ButtonModWithAnimation = withAnimation(ButtonMod)

    return(
        <main className="min-h-screen bg-green-100 p-5">
            <img className="border mb-5" src="../public/inicioSesion.png" alt="" />
            <div className="flex gap-5 bg-gray-300 rounded p-1">
                <div className="mx-2">
                    <img src="../public/logoBanco.png" alt="" />
                    <p>Welcome</p>
                </div>
            
                <form className="flex flex-col w-full gap-5" onSubmit={handleLogin}>
                    <label className="flex flex-col text-center font-bold">E-mail
                        <input className="w-full border-2" type="mail" name="email" value={userData.email} onInput={handleInput}/>
                    </label>
                    <label className="flex flex-col text-center font-bold">Password
                        <input className="w-full border-2" type="mail" name="password" value={userData.password} onInput={handleInput}/>
                    </label>
                    <div className="flex flex-col">
                        <ButtonModWithAnimation/>
                        <span className="text-center">o</span>
                        <Link to="/register" className="text-sm text-red-500 text-center font-bold underline">Create Account</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login