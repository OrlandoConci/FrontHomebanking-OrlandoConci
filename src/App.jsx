import { useState } from 'react'
import Accounts from "./pages/Accounts"
import MainLayout from "./layouts/MainLayout"
import AccountDetails from './pages/AccountDetails'
import NewAccount from './pages/NewAccount'
import Cards from "./pages/Cards"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApplyCard from './pages/ApplyCard'
import Transactions from './pages/Transactions'
import ApplyLoan from './pages/ApplyLoan'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<Accounts/>}/>
            <Route path="/accounts/:id" element={<AccountDetails/>} />
            <Route path="/newAccount" element={<NewAccount/>} />
            <Route path="/cards" element={<Cards/>} />
            <Route path="/applyCard" element={<ApplyCard/>} />
            <Route path="/applyLoan" element={<ApplyLoan/>} />
            <Route path="/transactions" element={<Transactions/>} />
            
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
