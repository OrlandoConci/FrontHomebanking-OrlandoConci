import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useDispatch } from "react-redux";
import authActions from '../redux/actions/auth.actions'
import Image from "../components/Image";
import Footer from "../components/Footer";

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
            swal({
                text: res.data,
                icon: "success",
                button: "accept",
                timer: "2000"

            })

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
            .catch(err => {console.log(err) })
        })
        .catch(err => {
            console.log(err)
            swal({
                text: err.response.data,
                icon: "error",
                button: "accept",
                timer: "2000"

            })
        })
    }

    function handleInput(e) {
        setRegister({...register, [e.target.name]: e.target.value})
        console.log(register);
    }

    return (
        <main className="bg-gray-900">
            <div className="min-h-screen flex mx-40 gap-5 p-5 bg-gray-900 max-[1024px]:mx-0 max-[768px]:flex-col">
                <img className="w-1/2 max-[768px]:min-w-full max-[768px]:max-h-80 max-[768px]:object-cover" src="../public/register.png" alt="Man and woman using the bank app" />
                
                <div className="flex flex-col bg-gray-200 rounded p-2 gap-1 items-center">
                    <img src="../../public/logoHomebanking.png" className="w-80"/>
                    <div>
                        <div>
                            <p className="font-bold text-xl text-center mb-3 underline">Welcome</p>
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
                            <div className="flex flex-col justify-center gap-5">
                                <button type="submit" className="p-2 bg-green-200 border-2 border-black rounded font-bold">Register</button>
                                <span className="text-center">o</span>
                                <Link to="/login" className=" max-w-20 min-h-11 self-center text-center text-lg px-4 font-bold text-red-500 border border-red-500 shadow-sm shadow-red-500">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}

export default Register