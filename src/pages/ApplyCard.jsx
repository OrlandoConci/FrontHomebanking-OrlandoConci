import React from "react";
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ApplyCard() {

    const [card, setCard] = useState({

        transactionType: "",
        colorType: ""

    })
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        console.log(localStorage.getItem("token"));

        await axios.post("http://localhost:8080/api/clients/current/cards", card, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => {
            alert("successfully created")
        })
        .catch(err =>
            console.log(err))
    }

    function redirect() {
        navigate('/cards')
    }

    function handleInput(e) {

        setCard({...card, [e.target.name]: e.target.value})
    }

    console.log(card);

    return (
        <main className="min-h-screen p-5 bg-green-100">
            <img src="../public/applycard.png" className="w-full" alt="Illustrative image of credit cards and coins" />
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Apply for a card</legend>
                        <label>
                            <select id="cardTypes" name="transactionType" value={card.transactionType} className="w-full bg-gray-700 border-2 text-white rounded-2xl" onInput={handleInput}>
                                <option defaultValue={"type"}>type</option>
                                <option>DEBIT</option>
                                <option>CREDIT</option>
                            </select>
                            {
                                card.transactionType == "" || card.transactionType == "transactionType" ? <h3 className="text-red-500 font-xs font-thin">Select an option</h3> : null
                            }
                        </label>

                        <legend className="mt-5">Select card membership (color)</legend>
                        <label>
                            <select id="cardColor" name="colorType" value={card.colorType}  className="w-full bg-gray-700 border-2 text-white rounded-2xl" onInput={handleInput}>
                                <option defaultValue={"color"}>color</option>
                                <option>TITANIUM</option>
                                <option>GOLD</option>
                                <option>SILVER</option>
                            </select>
                            {
                                card.colorType == "" || card.colorType == "colorType" ? <h3 className="text-red-500 font-xs font-thin">Select an option</h3> : null
                            }
                        </label>
                    </fieldset>
                    <div className="flex gap-5 mt-5 justify-end">
                        <button type="submit" className="bg-gray-700 border rounded text-white p-1">Apply</button>
                        <button type="button" className="bg-gray-700 border rounded text-white p-1" onClick={redirect}>Cancel</button>
                    </div>
                </form>
            </div>
        </main>
    )
    }

export default ApplyCard