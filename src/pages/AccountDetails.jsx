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
        <main className='min-h-screen flex flex-col mx-40 gap-5 p-5 bg-gray-900 max-[768px]:mx-5'>
            <h1 className='font-serif font-bold text-center text-white shadow-2xl text-2xl underline max-[768px]:text-xl'>Your Selected Account</h1>
            <img className='rounded' src="../public/portada.png"></img>
            <div className='flex justify-center'>
                {
                    Object.keys(account).length > 0 ? <Account key={account.id} account={account}></Account> : null
                }
            </div>
            <h2 className='font-bold text-white font-serif text-xl'>Transactions Resume:</h2>
            <table className="border border-collapse text-sm">
                <thead className='bg-white text-xl'>
                    <tr>
                        <th className="border border-black text-lg">Type</th>
                        <th className="border border-black text-lg">Amount</th>
                        <th className="border border-black text-lg">Date</th>
                        <th className="border border-black text-lg">Description</th>
                    </tr>
                </thead>
                <tbody className='bg-gray-100'>
                    {Object.keys(account).length > 0 && account.transactions.length > 0 ?
                     account.transactions.map(transaction => <tr key={transaction.id}>
                        <td className="border border-black text-lg text-end pr-3 max-[425px]:text-lg">{transaction.type}</td>
                        <td className="border border-black text-lg text-end pr-3 max-[425px]:text-lg">{transaction.amount.toLocaleString( 'en-US', { style:'currency', currency:'USD' } )}</td>
                        <td className="border border-black text-lg text-end pr-3 max-[425px]:text-sm">{transaction.date.slice(0,10)}</td>
                        <td className="border border-black text-lg text-end pr-3 max-[425px]:text-lg">{transaction.description}</td>
                    </tr>) : null}
                    
                </tbody>
                
            </table>
            {Object.keys(account).length > 0 && account.transactions.length <= 0 ? <h2 className='text-red-500'>There are no transactions</h2> : null}

            
        </main>
    )
}

export default AccountDetails