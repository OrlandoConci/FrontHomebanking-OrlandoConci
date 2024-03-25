import React, {useState, useEffect} from "react";
import axios from "axios";
import swal from 'sweetalert';
import { Button } from "@react-md/button";

function Transactions() {
    const [clients, setClients] = useState([])
    const token = localStorage.getItem('token')
    const [transactionRequest, setTransactionRequest] = useState({
        amount:"",
        description:"",
        numberOrigin:"",
        numberDestination:""
    })

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/current/", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => setClients(res.data))
        .catch(err => console.log(err))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("/api/transactions/", transactionRequest, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res)
            swal({
                text: res.data,
                icon: "success",
                button: "accept",
                timer: "2000"

            })
            setTransactionRequest({
                amount:"",
                description:"",
                numberOrigin:"",
                numberDestination:""
            })
        })
        .catch(err => {
            console.log(err)
            swal({
                text: err.response.data,
                icon: "error",
                button: "accept",
                timer: "2000"

            })
        })
    }

    function handleInput(e) {
        setTransactionRequest({...transactionRequest, [e.target.name]: e.target.value})
        console.log(transactionRequest);
    }

    return (
        <main className="min-h-screen flex flex-col mx-40 gap-5 p-5 bg-gray-900 max-[768px]:mx-5">
            <h1 className="font-bold text-white font-serif underline text-2xl text-center mb-3 max-[1024px]:mb-11">Make a transaction</h1>
            <div className="flex gap-3 items-center max-[425px]:flex-col">
                <img className="w-1/2 object-contain max-h-[540px] max-[1024px]:object-cover max-[1024px]:min-h-[540px] max-[425px]:min-w-full max-[425px]:min-h-[300px]" src="../public/transaction.png" alt="Mujer en un cajero" />
                <form className=" flex flex-col gap-5 border border-black rounded bg-gray-300 w-full p-4 max-[1440px]:w-1/2 min-h-[540px] max-[425px]:min-w-full" onSubmit={handleSubmit}>
                    <fieldset className="w-full p-1">
                        <h2 className="text-center font-bold">Account Origin</h2>
                        <select className="w-full border-2 border-black" name="numberOrigin" value={transactionRequest.numberOrigin} id="account" onInput={handleInput}>
                            <option className="" key={"accountType"} value="AccountType" defaultValue={"HOLA"}>number</option>
                            {Object.keys(clients).length > 0 ? clients.accounts.map(account => <option className="text-black-200 " value={account.number} key={account.id} >{account.number}</option>) : null}
                        </select>
                    </fieldset>
                    <fieldset className="w-full p-1">
                        <h2 className="text-center font-bold">Account Destination</h2>
                        <label className="flex flex-col text-center font-bold">
                            <input type="text" className="border-2 border-black" name="numberDestination" key={"accountType"} value={transactionRequest.numberDestination} placeholder="number" onInput={handleInput}></input>
                        </label>
                    </fieldset>
                    
                    <fieldset className="flex flex-col gap-5 p-1">
                        <label className="flex flex-col text-center font-bold">Amount:
                            <input className="border-2 border-black" name="amount" value={transactionRequest.amount} type="number" placeholder=" $" onInput={handleInput}/>
                        </label>
                        <label className="flex flex-col text-center font-bold">Description:
                            <input className="border-2 border-black" type="text" name="description" value={transactionRequest.description} placeholder=" Reason:" onInput={handleInput}/>
                        </label>
                    </fieldset>
                    <button className="self-end m-2 max-w-[200px] min-w-60 content-center text-center text-lg px-4 font-bold text-green-500 border-2 border-green-500 shadow-sm shadow-green-500" type="submit">Transfer</button>
  
                </form>
                
            </div>
            
        </main>
    )
}

export default Transactions