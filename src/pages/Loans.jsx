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
        .catch(err => {
            console.log("current client not found")
            wal({
                text: err.response.data,
                icon: "error",
                button: "accept",
                timer: "2000"

            })
        })
    }, [])

    return (
        <main className="min-h-screen flex flex-col mx-40 gap-5 p-5 bg-gray-900 max-[768px]:mx-5">
            <div className='flex gap-20 min-w-[600px] max-[1440px]:w-full  max-[1440px]:flex-col  max-[1440px]:items-center max-[1440px]:gap-5  max-[425px]:min-w-full'>
                <img className="rounded w-[800px] object-cover h-[700px] max-[425px]:object-contain max-[425px]:max-w-80 max-[425px]:h-auto" src="../public/loans.png" alt="Loan Registration Form" />

                <div>
                    <h1 className='text-white font-bold font-serif text-2xl underline text-center my-11 '>Loans requested</h1>
                    {Object.keys(clientCurrent).length > 0 && clientCurrent.clientloans.length > 0 ? clientCurrent.clientloans.map(loanCurrent => <LoanCurrent key={loanCurrent.name} className="text-white min-w-[600px] min-h-[200px] max-[425px]:min-w-[200px]" name={loanCurrent.name} amount={loanCurrent.amount} payments={loanCurrent.payments}/>) : <h2>you have no outstanding loans</h2> }
                </div>
            </div>
            
            <Link className="self-end  min-w-60 min-h-11 content-center text-center text-lg px-4 font-bold text-green-500 border border-green-500 shadow-sm shadow-green-500" to="/applyLoan">Apply for a new loan</Link>
        </main>
    )
}

export default Loan;