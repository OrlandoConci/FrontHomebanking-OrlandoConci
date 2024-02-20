import React from "react";

function ApplyCard() {
    return (
        <main className="min-h-screen p-5 bg-green-100">
            <img src="../public/applycard.png" className="w-full" alt="Illustrative image of credit cards and coins" />
            <div>
                <form>
                    <fieldset>
                        <legend>Apply for a card</legend>
                        <label>
                            <select id="cardTypes" name="types" class="w-full bg-gray-700 border-2 text-white rounded-2xl">
                                <option disabled selected>type</option>
                                <option>Débito</option>
                                <option>Crédito</option>
                            </select>
                        </label>

                        <legend className="mt-5">Select card membership (color)</legend>
                        <label>
                            <select id="cardColor" name="Colors" class="w-full bg-gray-700 border-2 text-white rounded-2xl">
                                <option disabled selected>Color</option>
                                <option>Titanium</option>
                                <option>Gold</option>
                                <option>Silver</option>
                            </select>
                        </label>
                    </fieldset>
                    <div class="flex gap-5 mt-5 justify-end">
                        <button className="bg-gray-700 border rounded text-white p-1">Apply</button>
                        <button className="bg-gray-700 border rounded text-white p-1">Cancel</button>
                    </div>
                </form>
            </div>
        </main>
    )
    }

export default ApplyCard