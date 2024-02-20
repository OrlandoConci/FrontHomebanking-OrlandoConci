import React, {useState, useEffect} from "react";
import axios from "axios";

function Transactions() {
    const [clients, setClients] = useState([])

    useEffect(() => {
        axios("http://localhost:8080/api/clients/")
        .then(res => setClients(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <main className="min-h-screen p-5 bg-green-100 ">
            <h1 className="font-bold text-xl text-center mb-3">Make a transaction</h1>
            <div className="flex flex-col gap-3 items-center">
                <img className="w-[300px] object-contain" src="../public/transaction.png" alt="Mujer en un cajero" />
                <form className=" flex flex-col gap-5 border border-black rounded">
                    <fieldset className="font-bold flex pr-5">Destination type
                        <label className="ml-3"> Own
                            <input className="bg-gray-700" type="radio" name="destination" value="own" id="own"/>
                        </label>
                        <label className="ml-5">Others
                            <input className="bg-gray-700" type="radio" name="destination" value="others" id="others"/>
                        </label>
                        
                    </fieldset>
                    <fieldset className="w-full">
                        <select className="w-full bg-gray-600" name="accountOrigin" id="account">Source account
                            <option className="bg-gray-600" key={"accountType"} value="AccountType" disabled selected>Account Type</option>
                            {clients.length > 0 ? clients[0].accounts.map(account => <option className="text-black-200 bg-gray-600" value="accountType" key={account.id} >{account.number}</option>) : null}
                        </select>
                    </fieldset>
                    <fieldset className="flex flex-col gap-5">
                        <label className="flex flex-col">Amount:
                            <input className="bg-gray-600" type="number" placeholder="$" />
                        </label>
                        <label className="flex flex-col">Description:
                            <input className="bg-gray-600" type="text" placeholder="Reason:" />
                        </label>
                    </fieldset>
                </form>
                
            </div>
        </main>
    )
}

export default Transactions