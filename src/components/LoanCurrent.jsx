import React from "react";
import PropTypes from 'prop-types';

function LoanCurrent(props) {
    return (
        
        <div className={props.className}>
            <tr className="">
                <th className="border text-xl px-11 py-5 bg-gray-300 text-black">name</th>
                <th className="border text-xl px-11 py-5 bg-gray-300 text-black">amount</th>
                <th className="border text-xl px-11 py-5 bg-gray-300 text-black">payments</th>
            </tr>

            <tr>
                <td className="border px-11 py-5">{props.name}</td>
                <td className="border px-11 py-5">{props.amount.toLocaleString( 'en-US', { style:'currency', currency:'USD' } )}</td>
                <td className="border px-11 py-5">payments: {props.payments.toString()}</td>
            </tr>
        </div>
    )
}


export default LoanCurrent;