import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Account from '../components/Account'
import Table from '../components/Table'

function AccountDetails() {
    const [account, setAccount] = useState([])
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get('/api/clients/current/accounts', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("Entré accountDetails:", res.data);

            setAccount(res.data.find(account => account.id == id))
        })
        .catch(err => console.log(err))

    }, [])

    return (
        <main className='min-h-screen flex flex-col gap-5 p-5 bg-green-100'>
            <h1 className='font-bold text-center text-2xl'>Your Selected Account</h1>
            <img src="../public/portada.png"></img>

            {console.log(account)}
            {
                Object.keys(account).length > 0 ? <Account key={account.id} account={account}></Account> : null
            }
            
            <h2 className='font-bold'>Transactions Resume:</h2>
            <table className="border border-collapse text-sm">
                <thead className='bg-gray-800 text-white'>
                    <tr>
                        <th className="border border-black">Type</th>
                        <th className="border border-black">Amount</th>
                        <th className="border border-black">Date</th>
                        <th className="border border-black">Description</th>
                    </tr>
                </thead>
                <tbody className='bg-gray-100'>
                    {Object.keys(account).length > 0 && account.transactions.length > 0 ?
                     account.transactions.map(transaction => <tr key={transaction.id}>
                        <td className="border border-black">{transaction.type}</td>
                        <td className="border border-black">{transaction.amount.toLocaleString( 'en-US', { style:'currency', currency:'USD' } )}</td>
                        <td className="border border-black">{transaction.date.slice(0,10)}</td>
                        <td className="border border-black">{transaction.description}</td>
                    </tr>) : null}
                    
                </tbody>
                
            </table>
            {Object.keys(account).length > 0 && account.transactions.length <= 0 ? <h2>There are no transactions</h2> : null}

            
        </main>
    )
}

export default AccountDetails