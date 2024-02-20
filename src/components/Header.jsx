import React from "react";
import Anchor from "./Anchor.jsx";
import { LINKS_HEADER } from "../utils/links.js";
import Image from "./Image.jsx"
import { Link } from "react-router-dom";
import cerrarSesion from "../../public/cerrarSesion.png"

function Header() {
    return (
        <header className="bg-gray-700">
            <div className="flex justify-between">
                <Image src={"../../public/logoBanco.png"} className="size-9"></Image>
                <h1 className="text-white font-bold">National Bank</h1>
                <Link to={"/login"} className="size-7"><Image src="../../public/cerrarSesion.png" alt="Puerta abierta" /></Link>
            </div>
            
            <nav className="flex gap-2 p-5">
                {
                    LINKS_HEADER.map((link) => {
                        return (<Anchor key={link.href} className="border rounded w-[110px] text-center bg-white px-2 font-bold" href={link.href}
                             content={link.content}></Anchor>)
                    })
                }
            </nav>
        </header>
    )
}

export default Header;