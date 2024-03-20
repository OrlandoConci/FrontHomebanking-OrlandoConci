import axios from "axios";
import React, {useState} from "react";

function NewAccount() {

    const [afirmate, setAfirmate] = useState(false)
    const [pressed, setPressed] = useState(false)
    const

    function handleSubmit(e) {
        e.preventDefault()
        setPressed(true)
        if(afirmate) {
            axios.post("/api/clients/current/")
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }

    function handleInput(e) {
        setAfirmate(e.target.checked)
    }
    return (
        <main className="bg-green-100 p-5 min-h-screen">
            <div className="flex flex-col gap-5 p-2 border border-black rounded">
                <h2 className="font-bold text-xl text-center">Request Account</h2>
                <p className="text-center">Request the opening of a new checking account in pesos.
                 The user can have a total of 3 (three) accounts in their name at most. To send the
                  application you must accept the terms and conditions, and declare that you have read 
                  the regulations of the law.</p>
                <label>
                    <input type="checkbox" name="afirmation" onClick={handleInput} />   I confirm that I have read and agree to the terms and conditions, and the various state regulations.
                </label>
                <button type="button" className="self-center border rounded border-black w-32 bg-gray-300" onClick={handleSubmit} >Request</button>
                {/* {console.log("afirmete", afirmate)}
                {console.log("pressed", pressed)} */}
                {!afirmate && pressed ? <h3>You must accept the terms and conditions</h3> : null}
            </div>
            
        </main>
    )
}

export default NewAccount