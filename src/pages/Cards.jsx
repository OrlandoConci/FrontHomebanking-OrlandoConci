import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Cards() {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState([false])
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios("http://localhost:8080/api/clients/current/cards", {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {setCards(res.data)})
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    if (loading) { //retorno anticipado, o renderizado condicional anticipado
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <main className="min-h-screen flex flex-col gap-2 p-5 bg-green-100">
            <h1 className="font-bold text-center">Your Cards</h1>
            <div className="flex flex-col gap-5">
            {
                cards.length > 0 ? cards.map(card => <Card key={card.id} card={card}></Card>) : <h1>No cards registered</h1>
            }
            </div>
            <Link to="/applyCard" className="underline text-end text-red-500">Apply for a card</Link>
        </main>
    
    )}


export default Cards