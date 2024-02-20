import React from "react";
import Header from "../components/Header";
import Home from "../pages/Accounts";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

function MainLayout(props) {
    return (
        <div className='main-layout'>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default MainLayout