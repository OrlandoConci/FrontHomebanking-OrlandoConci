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
                <form className=" flex flex-col gap-5 border border-black rounded bg-gray-300 w-full mx-4">
                    <fieldset className="font-bold flex flex-col pr-5 text-center">Destination type
                        <div>
                            <label className="ml-3"> Own
                                <input className="ml-2" type="radio" name="destination" value="own" id="own"/>
                            </label>
                            <label className="ml-5">Others
                                <input className="ml-2" type="radio" name="destination" value="others" id="others"/>
                            </label>
                        </div>
                        
                    </fieldset>
                    <fieldset className="w-full p-1">
                        <h2 className="text-center font-bold">Account Type</h2>
                        <select className="w-full border-2 border-black rounded-xl" name="accountOrigin" id="account">
                            <option className="" key={"accountType"} value="AccountType" disabled selected>Type</option>
                            {clients.length > 0 ? clients[0].accounts.map(account => <option className="text-black-200 " value="accountType" key={account.id} >{account.number}</option>) : null}
                        </select>
                    </fieldset>
                    <fieldset className="flex flex-col gap-5 p-1">
                        <label className="flex flex-col text-center font-bold">Amount:
                            <input className="border-2 border-black rounded-xl" type="number" placeholder="$" />
                        </label>
                        <label className="flex flex-col text-center font-bold">Description:
                            <input className="border-2 border-black rounded-xl" type="text" placeholder="Reason:" />
                        </label>
                    </fieldset>
                </form>
                
            </div>
        </main>
    )
}

export default Transactions