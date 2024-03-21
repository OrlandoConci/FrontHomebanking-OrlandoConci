import React from "react";
import Anchor from "./Anchor.jsx";
import { LINKS_HEADER } from "../utils/links.js";
import Image from "./Image.jsx"
import { Link } from "react-router-dom";
import cerrarSesion from "../../public/cerrarSesion.png"
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()

    function handleClick(e) {
        console.log("Entré carrito");
        localStorage.removeItem('token')
        swal({
            text: "Closed Session",
            icon: "error",
            button: "accept",
            timer: "2000"

        })
        navigate('/login')
    }

    return (
        <header className="bg-gray-500">
            <div className="flex justify-between">
                <Image src={"../../public/logoBanco.png"} className="size-18 border bg-black m-1"></Image>
                <h1 className="text-green-500 font-bold font-serif bg-black max-h-11 text-4xl border-2 border-green-500 px-20 text-center content-center shadow-sm shadow-green-500 m-1">CoinFortress</h1>
        
                <img onClick={handleClick} className="max-w-8 max-h-8 rounded rounded-xl bg-white px-1 content-center " src="../../public/cerrarSesion.png" alt="Puerta abierta" />
            </div>
            
            <nav className="flex gap-40 items-center justify-center h-16 bg-gray-700">
                {
                    LINKS_HEADER.map((link) => {
                        return (<Anchor key={link.href} className=" w-40 max-h-8 text-center text-lg px-4 font-bold text-white shadow-sm shadow-white" href={link.href}
                             content={link.content}></Anchor>)
                    })
                }
            </nav>
        </header>
    )
}

export default Header;