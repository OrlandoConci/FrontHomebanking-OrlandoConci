import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return(
        <main className="min-h-screen bg-green-100 p-5">
            <img className="border mb-5" src="../public/inicioSesion.png" alt="" />
            <div className="flex gap-5 bg-gray-300 rounded p-1">
                <div className="mx-2">
                    <img src="../public/logoBanco.png" alt="" />
                    <p>Welcome</p>
                </div>
            
                <form className="flex flex-col w-full gap-5">
                    <label className="flex flex-col text-center font-bold">E-mail
                        <input className="w-full border-2" type="mail" />
                    </label>
                    <label className="flex flex-col text-center font-bold">Password
                        <input className="w-full border-2" type="mail" />
                    </label>
                    <div className="flex flex-col">
                        <button className="border-2 border-black rounded p-2 bg-green-300 font-bold">Login</button>
                        <span className="text-center">o</span>
                        <Link to="/register" className="text-sm text-red-500 text-center font-bold underline">Create Account</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login