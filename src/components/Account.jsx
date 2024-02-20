import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Account({account}) {
    return (
        
        <Link to={`/accounts/${account.id}`} className="flex flex-col bg-gray-500 w-80 rounded rounded-xl gap-3 content-center border border-black font-bold p-5">
            <h2>Account number:<span className="pl-5">{account.number}</span></h2>
            <h2>Balance:<span className="text-2xl pl-11">{account.balance.toLocaleString( 'en-US', { style:'currency', currency:'USD' } )}</span></h2>
            <h2>Creation date:<span className="pl-5">{account.date}</span></h2>
        </Link>
    )
}

export default Account;