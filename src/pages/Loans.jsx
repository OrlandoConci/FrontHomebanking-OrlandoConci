import React, { useEffect, useState } from 'react'
import axios from 'axios';
import LoanCurrent from '../components/LoanCurrent';
import { Link } from 'react-router-dom';

function Loan() {
    const [clientCurrent, setClientCurrent] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get('/api/clients/current/', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("Entré client current", res.data);

            setClientCurrent(res.data)
        })
        .catch(console.log("client curren no encontrado"))
    }, [])

    return (
        <main>
            <h1>Loans requested</h1>
            <div>
                {Object.keys(clientCurrent).length > 0 && clientCurrent.clientloans.length > 0 ? clientCurrent.clientloans.map(loanCurrent => <LoanCurrent key={loanCurrent.name} className="border" name={loanCurrent.name} amount={loanCurrent.amount} payments={loanCurrent.payments}/>) : <h2>you have no outstanding loans</h2> }
            </div>
            <Link to="/applyLoan">Apply for a new loan</Link>
        </main>
    )
}

export default Loan;