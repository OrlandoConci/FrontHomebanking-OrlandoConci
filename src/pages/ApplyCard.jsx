import React from "react";
import { useState } from 'react'
import axios from "axios";

function ApplyCard() {

    const [card, setCard] = useState({

        types: "",
        colors: ""

    })

    function handleSubmit(e) {
        e.preventDefault()

        console.log(card);

        axios.post("http://localhost:8080/card", card, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(res => {
            alert("successfully created")
        })
        .catch(err => console.log(err))

        setCard({

            types: "",
            colors: ""
    
        })
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
                            <select id="cardTypes" name="types" value={card.types} className="w-full bg-gray-700 border-2 text-white rounded-2xl" onInput={handleInput}>
                                <option defaultValue={"type"}>type</option>
                                <option>Débito</option>
                                <option>Crédito</option>
                            </select>
                            {
                                card.types == "" || card.types == "type" ? <h3 className="text-red-500 font-xs font-thin">Select an option</h3> : null
                            }
                        </label>

                        <legend className="mt-5">Select card membership (color)</legend>
                        <label>
                            <select id="cardColor" name="colors" value={card.colors}  className="w-full bg-gray-700 border-2 text-white rounded-2xl" onInput={handleInput}>
                                <option defaultValue={"color"}>color</option>
                                <option>Titanium</option>
                                <option>Gold</option>
                                <option>Silver</option>
                            </select>
                            {
                                card.colors == "" || card.colors == "color" ? <h3 className="text-red-500 font-xs font-thin">Select an option</h3> : null
                            }
                        </label>
                    </fieldset>
                    <div className="flex gap-5 mt-5 justify-end">
                        <button className="bg-gray-700 border rounded text-white p-1">Apply</button>
                        <button className="bg-gray-700 border rounded text-white p-1">Cancel</button>
                    </div>
                </form>
            </div>
        </main>
    )
    }

export default ApplyCard