import React from "react";

function NewAccount() {
    return (
        <main className="bg-green-100 p-5 min-h-screen">
            <div className="flex flex-col gap-5 p-2 border border-black rounded">
                <h2 className="font-bold text-xl text-center">Request Account</h2>
                <p className="text-center">I request the opening of a new account in pesos registered
                    in my name. By submitting this request, I declare that I 
                    have read and accepted the terms and conditions.</p>
                    <button className="self-center border rounded border-black w-32 bg-gray-300">Request</button>
            </div>
            
        </main>
    )
}

export default NewAccount