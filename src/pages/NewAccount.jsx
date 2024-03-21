import axios from "axios";
import React, {useState} from "react";

function NewAccount() {

    const [afirmate, setAfirmate] = useState(false)
    const [pressed, setPressed] = useState(false)
    const [request, setRequest] = useState(false)
    const token = localStorage.getItem('token')

    async function handleSubmit(e) {
        e.preventDefault()
        setPressed(true)
        if(afirmate) {
            console.log("entré");
            axios.post("/api/clients/current/accounts", "",{
                headers: {
                    Authorization: `Bearer ${token}`
                }})
                .then(res => {
                console.log(res)
                setRequest(true)
                })
                .catch(err => console.log(err))
        }
    }

    function handleInput(e) {
        setAfirmate(e.target.checked)
    }
    return (
        <main className="min-h-screen flex flex-col mx-40 p-5 bg-gray-900">
            <div className="flex p-11 flex-col items-center self-center gap-5 h-[500px] p-2 max-w-[800px] border border-white rounded text-white">
                <h2 className="font-bold font-serif underline text-2xl text-center">Request Account</h2>
                <p className="text-center">Request the opening of a new checking account in pesos.
                 The user can have a total of 3 (three) accounts in their name at most. To send the
                  application you must accept the terms and conditions, and declare that you have read 
                  the regulations of the law.</p>
                <label>
                    <input type="checkbox" name="afirmation" onClick={handleInput} />   I confirm that I have read and agree to the terms and conditions, and the various state regulations.
                </label>
                <button type="button" className="self-end  min-w-60 min-h-11 content-center text-center text-lg px-4 font-bold text-green-500 border border-green-500 shadow-sm shadow-green-500" onClick={handleSubmit} >Request</button>
                {/* {console.log("afirmete", afirmate)}
                {console.log("pressed", pressed)} */}
                {!afirmate && pressed ? <h3 className="self-end text-red-500">You must accept the terms and conditions</h3> : null}
                {request ? <h2></h2> : null}
            </div>
            
        </main>
    )
}

export default NewAccount