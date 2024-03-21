import React, { useState, useEffect } from "react";
import axios from "axios";

function ApplyLoan() {
    const [actual, setActual] = useState([])
    const [current, setCurrent] = useState([])
    const token = localStorage.getItem('token')
    const [loansAvailable, setLoansAvailable] = useState([])
    const [loanRequest, setLoanRequest] = useState({
        name: "",
        amount: "",
        installments: "",
        numberAccount: ""
    })

    useEffect(() => {
        axios.get('/api/loans/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log("Entré loans Available", res.data);

                setLoansAvailable(res.data)
            })
            .catch(console.log("Loans Available no encontrado"))

        axios.get('/api/clients/current/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log("Entré current apply loan", res.data);

                setCurrent(res.data)
            })
            .catch(console.log("current apply loan no encontrado"))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('/api/loans/', loanRequest, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log("Entré loans Request", res.data);

                setLoanRequest(res.data)
            })
            .catch(console.log("Loans request no encontrado"))
    }

    function handleInput(e) {

        setLoanRequest({ ...loanRequest, [e.target.name]: e.target.value })
        console.log("loanRequest: ",loanRequest)
        if (loanRequest.name != "") {
            loansAvailable.map(loan => {
                if(loan.name == loanRequest.name) {
                    setActual(loan)
                }
            })
        }
        console.log(actual)
    }

    return (
          
        // name:"",
        // amount:"",
        // installments:"",
        // numberAccount:""

        <main className="min-h-screen bg-green-100 p-5">
            <h1 className="font-bold text-xl text-center mb-3">Apply for a loan</h1>
            <div>
                <img src="../public/loans.png" alt="Loan Registration Form" />

                <h1>loans available</h1>
                <form className="flex flex-col bg-gray-300 border border-black rounded p-3 gap-5" onSubmit={handleSubmit}>
                    <select name="loans" id="available" onChange={(e) => console.log([e.target])}>
                    {loansAvailable.length > 0 ? loansAvailable.map((loan) => <option type="checkbox" key={loan.name} value={loan}>Loan = {loan.name}
                                                                                    Max Amount = {loan.maxAmount.toLocaleString( 'en-US', { style:'currency', currency:'USD' } )}
                                                                                    Payments = {loan.payments.map(pay => pay.toString() + ", " )}</option>) : null}
                                                                                    </select>
                    <fieldset className="flex flex-col gap-5 w-full text-center font-bold">Select loan
                        <select key="hola" className="flex flex-col w-full" name="name" value={loanRequest.name} id="loan" onInput={handleInput}>
                            {loansAvailable.length > 0 ? loansAvailable.map(loan => <option key={loan.payments} value={loan.name}>{loan.name}</option>) : null}
                        </select>
                    </fieldset>
                    <fieldset className="flex flex-col gap-5 w-full text-center font-bold">Source Account
                        <select className="flex flex-col w-full" name="numberAccount" value={loanRequest.numberAccount} id="accountOrigin" onInput={handleInput}>
                        
                            {Object.keys(current).length > 0 ? current.accounts.map(account => <option key={account.number} value={account.number}>{account.number}</option>) : null}
                        </select>

                        <label className="flex flex-col">Ammount
                            <select placeholder="$" type="number" name="amount" value={loanRequest.amount} onInput={handleInput}>
                            
                                {/* {Object.keys(loansAvailable).length > 0 ? loansAvailable.map(loan => loan.name == loanRequest.name ? loan.payments.map("hola"): null }): null} */}
                            </select>
                        </label>
                    </fieldset>
                    <h2 className="font-bold text-center">Payment:</h2>
                    <select className="flex flex-col w-full" name="installments" value={loanRequest.installments} id="loan" onInput={handleInput}>

                        <option key="payments" defaultValue>E.j.: 60 Payments</option>
                        <option key="6" value="6">6</option>
                        <option key="12" value="12">12</option>
                        <option key="24" value="24">24</option>
                        <option key="36" value="36">36</option>
                        <option key="48" value="48">48</option>
                        <option key="60" value="60">60</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    )
}

export default ApplyLoan