import React from "react";
import PropTypes from 'prop-types';

function LoanCurrent(props) {
    return (
        
        <div className={props.className}>
            name: {props.name}
            amount: {props.amount.toLocaleString( 'en-US', { style:'currency', currency:'USD' } )}
            payments: {props.payments.toString()}

        </div>
    )
}


export default LoanCurrent;