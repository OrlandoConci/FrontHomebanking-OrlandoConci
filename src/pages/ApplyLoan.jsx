import React, { useState, useEffect } from "react";
import axios from "axios";

function ApplyLoan() {
    const [actual, setActual] = useState("")
    const [payments, setPayments] = useState("")
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
            .catch(err => 
                {console.log("Loans Available no encontrado")
                swal({
                    text: err.response.data,
                    icon: "error",
                    button: "accept",
                    timer: "2000"
    
                })})

        axios.get('/api/clients/current/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log("Entré current apply loan", res.data);

                setCurrent(res.data.accounts)
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

                swal({
                    text: res.data,
                    icon: "success",
                    button: "accept",
                    timer: "2000"
    
                })
            })
            .catch(err => {
                console.log("Loans request no encontrado")
                swal({
                    text: err.response.data,
                    icon: "error",
                    button: "accept",
                    timer: "2000"
    
                })
            })
    }

    function handleInput(e) {

        setLoanRequest({ ...loanRequest, [e.target.name]: e.target.value })
        setActual(loanRequest.name)
        console.log("loanRequest: ",loanRequest)
    }

    useEffect(() => {
        if (actual !== "") {
            const loanPayments = loansAvailable.find(loan => {loan.name == actual.name})
        
            if (loanPayments) {
                setPayments(loanPayments.payments)
            }
        } else {
            setPayments([])
        }
    }, [actual, loansAvailable]);
    

    return (
          
        // name:"",
        // amount:"",
        // installments:"",
        // numberAccount:""

        <main className="min-h-screen flex flex-col mx-40 gap-5 p-5 bg-gray-900">
            <h1 className="font-bold font-serif text-white text-2xl text-center underline ">Apply for a loan</h1>
            <div className="flex gap-20">
                <img className="rounded w-[800px] object-cover h-[700px]" src="../public/loans.png" alt="Loan Registration Form" />
                <div className="flex flex-col gap-16">
                    <h1 className="font-serif text-white text-center text-2xl font-bold">Loans Available:</h1>
                    <form className="flex flex-col bg-gray-300 border border-black rounded p-3 gap-5" onSubmit={handleSubmit}>
                        <div name="loans" id="available"  className="flex">
                        {Object.keys(loansAvailable).length > 0 ? loansAvailable.map((loan) => <div className="border-2 border-black flex text-black-500 font-bold p-11" key={loan.name} value={loan.name}>{loan.name+'   '}
                                                                                        Max Amount: {loan.maxAmount.toLocaleString( 'en-US', { style:'currency', currency:'USD' } ) + '   '}
                                                                                        Payments: {loan.payments.map(pay => pay.toString() + ", " )}</div>) : null}
                                                                                        </div>
                        <fieldset className="flex flex-col gap-5 w-full text-center text-lg font-bold">Select loan
                            <select key="hola" className="flex flex-col w-full" name="name" value={loanRequest.name} id="loan" onInput={handleInput}>
                                {Object.keys(loansAvailable).length > 0 ? loansAvailable.map(loan => <option key={loan.payments} value={loan.name}>{loan.name}</option>) : null}
                            </select>
                        </fieldset>
                        <fieldset className="flex flex-col gap-5 w-full text-lg text-center font-bold">Source Account
                            <select className="flex flex-col w-full text-lg" name="numberAccount" value={loanRequest.numberAccount} id="accountOrigin" onInput={handleInput}>
                            
                                {Object.keys(current).length > 0 ? current.map(account => <option key={account.number} value={account.number}>{account.number}</option>) : null}
                            </select>

                            <label className="flex flex-col text-lg">Amount
                                <input placeholder="$" type="number" name="amount" value={loanRequest.amount} onInput={handleInput}></input>
                            </label>
                        </fieldset>
                        <h2 className="font-bold text-center"></h2>
                        <label className="flex flex-col text-lg">Payments
                                <input placeholder="payments" type="number" name="installments" value={loanRequest.installments} onInput={handleInput}></input>
                            </label>
                        <button className="self-end  min-w-60 min-h-11 content-center text-center text-lg px-4 font-bold text-green-500 border border-green-500 shadow-sm shadow-green-500" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default ApplyLoan