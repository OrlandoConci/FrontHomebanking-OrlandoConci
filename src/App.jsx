import { useState } from 'react'
import Accounts from "./pages/Accounts"
import MainLayout from "./layouts/MainLayout"
import AdminLayout from "./layouts/AdminLayout"
import AccountDetails from './pages/AccountDetails'
import NewAccount from './pages/NewAccount'
import Cards from "./pages/Cards"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApplyCard from './pages/ApplyCard'
import Transactions from './pages/Transactions'
import ApplyLoan from './pages/ApplyLoan'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { withAuth } from './hocs/withAuth'

function App() {
  const DashboardWithAuth = withAuth(Dashboard)

const LINKS_PROTECTED = [
  {path: "/", element: Dashboard},
  {path: "/accounts", element: Accounts},
  {path: "/accounts/:id", element: AccountDetails},
  {path: "/newAccount", element: NewAccount},
  {path: "/cards", element: Cards},
  {path: "/applyCard", element: ApplyCard},
  {path: "/applyLoan", element: ApplyLoan},
  {path: "/transactions", element: Transactions},

]

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            {LINKS_PROTECTED.map((link) => {
                          const Page = withAuth(link.element)
                          return (<Route key={link.path} path={link.path}
                              element={<Page/>}></Route>)
                      })}
            {/* <Route path="/" element={<DashboardWithAuth/>}/> */}
            {/* <Route path="/accounts" element={<Accounts/>}/>
            <Route path="/accounts/:id" element={<AccountDetails/>} />
            <Route path="/newAccount" element={<NewAccount/>} />
            <Route path="/cards" element={<Cards/>} />
            <Route path="/applyCard" element={<ApplyCard/>} />
            <Route path="/applyLoan" element={<ApplyLoan/>} />
            <Route path="/transactions" element={<Transactions/>} /> */}
            <Route path="*" element={<Login/>} />
          </Route>

          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="/admin" element={<Accounts/>}/>
            <Route path="/admin/accounts/:id" element={<AccountDetails/>} />
            <Route path="/admin/newAccount" element={<NewAccount/>} />
            <Route path="/admin/cards" element={<Cards/>} />
            <Route path="/admin/applyCard" element={<ApplyCard/>} />
            <Route path="/admin/applyLoan" element={<ApplyLoan/>} />
            <Route path="/admin/transactions" element={<Transactions/>} />
          </Route>

          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
