import React from "react";
import Header from "../components/Header";
import Home from "../pages/Accounts";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';
import { LINKS_HEADER_ADMIN } from "../utils/links";
import { Link } from "react-router-dom";
import Anchor from "../components/Anchor"
import Image from "../components/Image"

function AdminLayout(props) {
    return (
        <div className='admin-layout'>
            <header className="bg-gray-700">
                <div className="flex justify-between">
                    <Image src={"../../public/logoBanco.png"} className="size-9"></Image>
                    <h1 className="text-white font-bold">National Bank</h1>
                    <Link to={"/login"} className="size-7"><Image src="../../public/cerrarSesion.png" alt="Puerta abierta" /></Link>
                </div>
                
                <nav className="flex gap-2 p-5">
                    {
                        LINKS_HEADER_ADMIN.map((link) => {
                            return (<Anchor key={link.href} className="border rounded w-[110px] text-center bg-white px-2 font-bold" href={link.href}
                                content={link.content}></Anchor>)
                        })
                    }
                </nav>
            </header>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default AdminLayout