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
            swal({
                text: res.data,
                icon: "success",
                button: "accept",
                timer: "2000"

            })
        })
        .catch(err =>
            {
                console.log(err)
                swal({
                    text: err.response.data,
                    icon: "error",
                    button: "accept",
                    timer: "2000"
    
                })
            })
    }

    function redirect() {
        navigate('/cards')
    }

    function handleInput(e) {

        setCard({...card, [e.target.name]: e.target.value})
    }

    console.log(card);

    return (
        <main className="min-h-screen flex mx-40 gap-5 p-5 bg-gray-900 max-[1024px]:mx-5 max-[1024px]:flex-col max-[1024px]:justify-center">
            <img src="../public/applycard.png" className="border border-white w-3/4 max-h-[600px] max-[1024px]:self-center max-[425px]:w-80" alt="Illustrative image of credit cards and coins" />
            <div className="w-full max-[1024px]:max-w-60 max-[1024px]:ml-40 max-[768px]:ml-20 max-[425px]:ml-6 max-[375px]:ml-0">
                <form className="flex flex-col gap-20 border border-black rounded bg-gray-300 min-w-[600px] min-h-[600px] text-xl p-11 max-[768px]:min-w-[520px] max-[425px]:min-w-[300px] max-[425px]:gap-5" onSubmit={handleSubmit}>
                    <fieldset className="flex flex-col">
                        <legend className="">Apply for a card</legend>
                        <label className="mb-20">
                            <select id="cardTypes" name="transactionType" value={card.transactionType} className="w-full bg-gray-700 border-2 text-white rounded" onInput={handleInput}>
                                <option defaultValue={"type"}>type</option>
                                <option>DEBIT</option>
                                <option>CREDIT</option>
                            </select>
                            {
                                card.transactionType == "" || card.transactionType == "transactionType" ? <h3 className="text-red-500 font-xs font-thin">Select an option</h3> : null
                            }
                        </label>

                        <legend className="">Select card membership (color)</legend>
                        <label>
                            <select id="cardColor" name="colorType" value={card.colorType}  className="w-full bg-gray-700 border-2 text-white rounded" onInput={handleInput}>
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
                    <div className="flex gap-5 mt-5 justify-end max-[768px]:flex-col max-[768px]:self-center">
                        <button type="submit" className="self-end min-w-60 min-h-11 text-center text-lg px-4 font-bold text-green-500 shadow-lg border border-green-500 shadow-green-500">Apply</button>
                        <button type="button" className="self-end min-w-60 min-h-11 text-center text-lg px-4 font-bold text-red-500 shadow-lg border border-red-500 shadow-red-500" onClick={redirect}>Cancel</button>
                    </div>
                </form>
            </div>
        </main>
    )
    }

export default ApplyCard