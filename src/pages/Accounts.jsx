import React, {useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Account from "../components/Account"
import { Link } from "react-router-dom";

function Accounts() {

    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios("http://localhost:8080/api/clients/")
            .then(res => setClients(res.data))
            
            .catch(err => console.log(err))
            setLoading(false)

    }, [])

    if (loading) {
        return (
            <h2>Loading . . .</h2>
        )
    }

    return (
        <main className="flex flex-col min-h-screen p-5 bg-green-100 gap-5" >
            {clients.length > 0 ?
                <h1 className="text-center text-2xl font-bold">Welcome, {clients[0].firstName}</h1> : null
            }
            <img src="../public/portada.png"></img>
            <h2 className="text-xl">Accounts:</h2>
            <div className="flex flex-col gap-11 items-center">
                {
                clients.length > 0 ? clients[0].accounts.map(account => <Account 
                    key={account.id} account={account}/>) : <h1>There are no registered accounts</h1>
                }
            </div>
            <Link to={`./newAccount`} className="underline text-red-500 text-end">Open new account</Link>
        </main>
    )

}

export default Accounts;