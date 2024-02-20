import React from "react";

function Table({transaction}) {
    return(
        <>
        <h2>Transactions Resume:</h2>
            <table className="border border-collapse">
                <thead>
                    <tr>
                        <th className="border">Type</th>
                        <th className="border">Amount</th>
                        <th className="border">Date</th>
                        <th className="border">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border">{transaction.type}</td>
                        <td className="border">{transaction.amount}</td>
                        <td className="border">{transaction.date}</td>
                        <td className="border">{transaction.description}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table