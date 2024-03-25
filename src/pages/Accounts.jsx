import React, {useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Account from "../components/Account"
import { Link } from "react-router-dom";

function Accounts() {

    const [current, setCurrent] = useState([])
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('/api/clients/current/', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("Entré Account", res.data);

            setCurrent(res.data)
        })
        .catch(console.log("current no encontrado"))
    }, [])

    // useEffect(() => {
    //     setLoading(true)
    //     axios("http://localhost:8080/api/current/")
    //         .then(res => setCurrent(res.data))
            
    //         .catch(err => console.log(err))
    //         setLoading(false)

    // }, [])

    if (loading) {
        return (
            <h2>Loading . . .</h2>
        )
    }

    return (
        
        <main className="min-h-screen flex flex-col mx-40 gap-5 p-5 bg-gray-900  max-[768px]:mx-5" >
            {Object.keys(current).length > 0 ?
                <h1 className="text-center text-2xl font-bold text-white font-serif underline">Welcome {current.firstName + ' ' + current.lastName}</h1> : null
            }
            <img className="rounded" src="../public/portada.png"></img>
            <div className="flex flex-col gap-11">
                <h2 className="text-2xl text-white font-bold underline">Accounts:</h2>
                <div className="flex gap-11 items-center justify-center max-[768px]:flex-wrap  max-[768px]:text-center">
                    {
                    Object.keys(current).length > 0 ? current.accounts.map(account => <Account 
                        key={account.id} account={account}/>) : <h1>There are no registered accounts</h1>
                    }
                </div>
                <Link to={`/newAccount`} className="self-end min-w-60 min-h-11 content-center text-center text-lg px-4 font-bold text-green-500 shadow-sm shadow-green-500">Open new account</Link>
            </div>
        </main>
    )

}

export default Accounts;