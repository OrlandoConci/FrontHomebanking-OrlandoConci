import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useDispatch } from "react-redux";
import authActions from '../redux/actions/auth.actions'
import { useNavigate } from "react-router-dom";
import ButtonMod from "../components/ButtonMod";
import {withAnimation} from '../hocs/withAnimation'
import Image from "../components/Image";

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
        <main className="min-h-screen bg-gray-900 content-center">
            <div className=" flex justify-center mx-80 gap-40 bg-gray-900">
                <div className="flex bg-gray-300 rounded p-1 items-center">
                    
                    <div className="mx-2 ">
                        <h1 className="text-green-500 font-bold font-serif bg-black max-h-11 text-4xl border-2 border-green-500 px-20 text-center content-center shadow-sm shadow-green-500 m-1">CoinFortress</h1>
                        <div className="">
                            <Image src={"../../public/logoBanco.png"} className="size-18 border bg-black m-1"></Image>
                            <p>Welcome</p>
                        </div>
                        <form className="flex flex-col gap-11 " onSubmit={handleLogin}>
                            <label className="flex flex-col text-center font-bold">E-mail
                                <input className="w-full border-2" placeholder="email" type="mail" name="email" value={userData.email} onInput={handleInput}/>
                            </label>
                            <label className="flex flex-col text-center font-bold">Password
                                <input className="w-full border-2" placeholder="password" type="mail" name="password" value={userData.password} onInput={handleInput}/>
                            </label>
                            <div className="flex flex-col items-center">
                                <ButtonModWithAnimation/>
                                <span className="text-center">o</span>
                                <Link to="/register" className="min-w-60 min-h-11 text-center content-center text-lg px-4 font-bold text-green-500 border border-green-500 shadow-lg shadow-green-500">Create Account</Link>
                            </div>
                        </form>
                    </div>
                    
                </div>
                <img className="border mb-5 max-w-[700px] bg-gray-900" src="../public/inicioSesion.png" alt="" />
            </div>
        </main>
    )
}

export default Login