import React, {useState, useEffect} from "react";
import axios from "axios";

function ApplyLoan () {
    const [clients, setClients] = useState([])

    useEffect(() => {
        axios("http://localhost:8080/api/clients/")
        .then(res => setClients(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        
        <main className="min-h-screen bg-green-100 p-5">
            <h1 className="font-bold text-xl text-center mb-3">Apply for a loan</h1>
            <div>
                <img src="../public/loans.png" alt="Loan Registration Form" />
                <form className="flex flex-col bg-gray-300 border border-black rounded p-3 gap-5">
                    <fieldset className="flex flex-col gap-5 w-full text-center font-bold">Select loan
                        <select className="flex flex-col w-full" name="loan" id="loan">
                            <option disabled selected>E.j: Mortgage</option>
                            <option value="Mortgage">Mortgage</option>
                            <option value="Procrear">Procrear</option>
                            <option value="Construir">Construir</option>
                        </select>
                    </fieldset>
                    <fieldset className="flex flex-col gap-5 w-full text-center font-bold">Source Account
                        <select className="flex flex-col w-full" name="account" id="accountOrigin">
                            <option key="Accounts" disabled selected>E.j: VIN001</option>
                            {clients.length > 0 ? clients[0].accounts.map(account => <option key={account.id} value={account.number}>{account.number}</option>) : null}
                        </select>

                        <label className="flex flex-col">Ammount
                            <input placeholder="$" type="number"/>
                        </label>
                    </fieldset>
                    <h2 className="font-bold text-center">Payment:</h2>
                    <select className="flex flex-col w-full" name="loan" id="loan">
                            
                            <option key="payments" disabled selected>E.j.: 60 Payments</option>
                            <option key="6" value="6">6</option>
                            <option key="12" value="12">12</option>
                            <option key="24" value="24">24</option>
                            <option key="36" value="36">36</option>
                            <option key="48" value="48">48</option>
                            <option key="60" value="60">60</option>
                    </select>
                </form>
            </div>
        </main>
    )
}

export default ApplyLoan