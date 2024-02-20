import React from "react";
import { Link } from "react-router-dom";

function Register() {
    return (
        <main className="bg-green-100 min-h-screen p-5">
            <img src="../public/register.png" alt="Man and woman using the bank app" />
            <div className="flex bg-gray-200 rounded p-2 gap-1">
                <div>
                    <img src="../public/logoBanco.png" alt="logo" />
                    <p>Welcome</p>
                </div>
                <form className="flex flex-col gap-3">
                    <fieldset className="text-center">
                        <label className="text-center">First Name
                            <input className="w-full border-2 border-black" type="text" />
                        </label>
                        <label className="text-center">Last Name
                            <input className="w-full border-2 border-black" type="text" />
                        </label>
                        <label className="text-center">E-mail
                            <input className="w-full border-2 border-black" type="mail" />
                        </label>
                        <label className="text-center">Password
                            <input className="w-full border-2 border-black" type="Password" />
                        </label>
                    </fieldset>
                    <div className="flex flex-col">
                        <button className="p-2 bg-green-200 border-2 border-black rounded font-bold">Register</button>
                        <span className="text-center">o</span>
                        <Link to="/login" className="text-center text-red-500 font-bold underline">Login</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Register