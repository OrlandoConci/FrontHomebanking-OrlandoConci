import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useDispatch } from "react-redux";
import authActions from '../redux/actions/auth.actions'
import Image from "../components/Image";

function Register() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login, current} = authActions
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [register, setRegister] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })

    function handleSubmit (e) {
        e.preventDefault()
        axios.post("/api/auth/register", register)
        .then(res => {

            setEmail(register.email)
            setPassword(register.password)
            console.log("email: ", email, "password: ", password)

            
            axios.post("/api/auth/login", {"email":register.email, "password":register.password})
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
        })
        .catch(err => console.log(err))
    }

    function handleInput(e) {
        setRegister({...register, [e.target.name]: e.target.value})
        console.log(register);
    }

    return (
        <main className="bg-gray-900">
            <h1 className="text-green-500 font-bold font-serif bg-black max-h-11 text-4xl border-2 border-green-500 px-20 text-center content-center shadow-sm shadow-green-500 m-1">CoinFortress</h1>

            <div className="min-h-screen flex mx-40 gap-5 p-5 bg-gray-900">
                <img className="w-1/2" src="../public/register.png" alt="Man and woman using the bank app" />
                
                <div className="flex bg-gray-200 rounded p-2 gap-1">
                    <div>
                        <Image src={"../../public/logoBanco.png"} className="size-18 border bg-black m-1"></Image>
                        <p>Welcome</p>
                    </div>
                    <form className="flex flex-col gap-11" onSubmit={handleSubmit}>
                        <fieldset className="text-center">
                            <label className="text-center">First Name
                                <input className="w-full border-2 border-black" type="text" name="firstName" value={register.firstName} onInput={handleInput}/>
                            </label>
                            <label className="text-center">Last Name
                                <input className="w-full border-2 border-black" type="text" name="lastName" value={register.lastName} onInput={handleInput} />
                            </label>
                            <label className="text-center">E-mail
                                <input className="w-full border-2 border-black" type="mail" name="email" value={register.email} onInput={handleInput} />
                            </label>
                            <label className="text-center">Password
                                <input className="w-full border-2 border-black" type="Password" name="password" value={register.password} onInput={handleInput} />
                            </label>
                        </fieldset>
                        <div className="flex flex-col">
                            <button type="submit" className="p-2 bg-green-200 border-2 border-black rounded font-bold">Register</button>
                            <span className="text-center">o</span>
                            <Link to="/login" className="text-center text-red-500 font-bold underline">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Register