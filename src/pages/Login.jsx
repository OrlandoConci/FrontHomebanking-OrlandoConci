import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useDispatch } from "react-redux";
import authActions from '../redux/actions/auth.actions'
import { useNavigate } from "react-router-dom";
import ButtonMod from "../components/ButtonMod";
import {withAnimation} from '../hocs/withAnimation'
import Image from "../components/Image";
import Footer from "../components/Footer"

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
            swal({
                text: "Session Started",
                icon: "success",
                button: "accept",
                timer: "2000"

            })
            
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
        .catch(err => 
            {console.log(err)
            swal({
                text: err.response.data,
                icon: "error",
                button: "accept",
                timer: "2000"

            })})
    }

    function handleInput(e) {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    console.log(userData)

    const ButtonModWithAnimation = withAnimation(ButtonMod)

    return(
        <main className="min-h-screen bg-gray-900 content-center">
            <div className=" flex justify-center mx-80 gap-5 bg-gray-900 my-40 max-[1024px]:items-center max-[425px]:flex-col max-[425px]:mx-0 max-[425px]:flex-col max-[425px]:my-5 max-[375px]:my-5">
                <img className="border max-w-[700px] bg-gray-900 max-[1024px]:max-w-96 max-[1024px]:max-w-[500px] max-[768px]:max-w-80 max-[768px]:min-h-[500px] max-[768px]:object-cover max-[375px]:min-h-[400px]"  src="../public/inicioSesion.png" alt="" />

                <div className="flex flex-col bg-gray-300 rounded p-1 items-center w-1/2 content-center gap-11 max-[1440px]:min-w-[500px] max-[1024px]:gap-2  max-[1024px]:min-h-[500px] max-[1024px]:min-w-96 max-[375px]:min-w-80 max-[375px]:min-h-[600px]">
                        <img src="../../public/logoHomebanking.png" className="w-80"/>

         
                            <div className="self-start font-bold self-center text-xl underline">
                                <p className="font-bold">Welcome</p>
                            </div>
                            <form className="flex flex-col gap-11 max-[1024px]:gap-5" onSubmit={handleLogin}>
                                <label className="flex flex-col text-center font-bold">E-mail
                                    <input className="w-full border-2 border-black" placeholder="email" type="mail" name="email" value={userData.email} onInput={handleInput}/>
                                </label>
                                <label className="flex flex-col text-center font-bold">Password
                                    <input className="w-full border-2 border-black" placeholder="password" type="mail" name="password" value={userData.password} onInput={handleInput}/>
                                </label>
                                <div className="flex flex-col items-center">
                                    <ButtonModWithAnimation/>
                                    <span className="text-center">o</span>
                                    <Link to="/register" className="min-w-40 min-h-11 text-center content-center text-lg px-4 font-bold text-red-500 border border-red-500 shadow-lg">Create Account</Link>
                                </div>
                            </form>
                    
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}

export default Login