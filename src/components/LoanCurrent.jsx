import React from "react";
import PropTypes from 'prop-types';

function LoanCurrent(props) {
    return (
        
        <table className={props.className}>
            <thead>
                <tr className="">
                    <th className="border text-xl px-11 py-5 bg-gray-300 text-black max-[425px]:text-sm max-[425px]:px-5">name</th>
                    <th className="border text-xl px-11 py-5 bg-gray-300 text-black max-[425px]:text-sm max-[425px]:px-5">amount</th>
                    <th className="border text-xl px-11 py-5 bg-gray-300 text-black max-[425px]:text-sm max-[425px]:px-5">payments</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className="border px-11 py-5 max-[425px]:text-sm max-[425px]:px-5 max-[425px]:py-5">{props.name}</td>
                    <td className="border px-11 py-5 max-[425px]:text-sm max-[425px]:px-5 max-[425px]:py-5">{props.amount.toLocaleString( 'en-US', { style:'currency', currency:'USD' } )}</td>
                    <td className="border px-11 py-5 max-[425px]:text-sm max-[425px]:px-5 max-[425px]:py-5">payments: {props.payments.toString()}</td>
                </tr>
            </tbody>
        </table>
    )
}


export default LoanCurrent;