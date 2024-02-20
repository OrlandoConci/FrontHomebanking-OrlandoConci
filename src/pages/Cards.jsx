import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Cards() {
    const [clients, setClients] = useState([])

    useEffect(() => {
        axios("http://localhost:8080/api/clients/")
        .then(res => {setClients(res.data)})
        .catch(err => console.log(err))
    }, [])

    return (
        <main className="flex flex-col gap-2 p-5 bg-green-100">
            <h1 className="font-bold text-center">Your Cards</h1>
            {
                clients.length > 0 ? clients[0].cards.map(card => <Card key={card.id} card={card}></Card>) : <h1>No cards registered</h1>
            }
            <Link to="/applyCard" className="underline text-end text-red-500">Apply for a card</Link>
        </main>
    
    )}


export default Cards