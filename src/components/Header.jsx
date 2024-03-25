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
        <header className="bg-white">
            
            <div className="flex justify-between">
                <div className="max-[425px]:invisible"></div>
                <img src={"../../public/logoHomebanking.png"} className="h-16 max-[425px]:ml-5" />
        
                <img onClick={handleClick} className="max-w-8 max-h-8 bg-white px-1 self-center" src="../../public/cerrarSesion.png" alt="Puerta abierta" />
            </div>
            
            <nav className="flex gap-40 items-center justify-center h-16 bg-gray-900 max-[1024px]:gap-24 max-[768px]:gap-20 max-[425px]:gap-2">
                {
                    LINKS_HEADER.map((link) => {
                        return (<Anchor key={link.href} href={link.href}
                             content={link.content}></Anchor>)
                    })
                }
            </nav>
        </header>
    )
}

export default Header;