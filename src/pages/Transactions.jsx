import React from "react";

function Transactions() {
    return (
        <main className="min-h-screen p-5 bg-green-100 ">
            <h1 className="font-bold text-xl text-center mb-3">Make a transaction</h1>
            <div className="flex flex-col gap-3 items-center">
                <img className="w-[300px] object-contain" src="../public/transaction.png" alt="Mujer en un cajero" />
                <form>
                    <fieldset className="font-bold flex pr-5">Destination type
                        <label> Own
                            <input type="radio" name="destination" value="own" id="own"/>
                        </label>
                        <label>Others
                            <input type="radio" name="destination" value="others" id="others"/>
                        </label>
                        
                    </fieldset>
                </form>
                
            </div>
        </main>
    )
}

export default Transactions