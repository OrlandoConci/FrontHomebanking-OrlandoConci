import { useState } from 'react'
import Accounts from "./pages/Accounts"
import MainLayout from "./layouts/MainLayout"
import AccountDetails from './components/AccountDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<Accounts/>} />
            {/* <Route path="/cards" element={<Cards/>} />
            <Route path="/loans" element={<Loans/>} />
            <Route path="/transactions" element={<Transactions/>} />
            <Route path="/Loans/:id" element={<AccountDetails/>} /> */}
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
