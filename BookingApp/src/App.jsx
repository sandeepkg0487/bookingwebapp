
import './App.css'
import Login from './users/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './output.css'
import './custome.css'
import Signup from './users/Signup'
import Account from './users/Account'
import Home from './Home/Home'
import NavBar from './NavBar'
import Place from './Places/Place'
import { AuthContextprovider } from './AuthProtection/AuthContext'
import ProtectAfterLogin from './AuthProtection/ProtectAfterLogin'
import ProtectRoutes from './AuthProtection/ProtectRoutes'

function App() {


  return (
    <>


      <BrowserRouter>
        <NavBar />
        <AuthContextprovider>

          <Routes>
            <Route element={<ProtectAfterLogin />}>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Route>


            <Route element={<ProtectRoutes />}>
              <Route path="/profile" element={<Account />}></Route>
            </Route>

            <Route path="/" element={<Home />}></Route>
            <Route path="/Place" element={<Place />}></Route>
          </Routes>

        </AuthContextprovider>
      </BrowserRouter >

    </>
  )
}

export default App
