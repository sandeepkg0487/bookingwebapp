
import './App.css'
import Login from './users/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './output.css'
import './custome.css'
import Signup from './users/Signup'
import Account from './users/Account'
import Home from './Home/Home'
import NavBar from './NavBar'
import { AuthContextprovider } from './AuthProtection/AuthContext'
import ProtectAfterLogin from './AuthProtection/ProtectAfterLogin'
import ProtectRoutes from './AuthProtection/ProtectRoutes'
import HotelHome from './HotelBooking/HotelHome'
import Reservation from './HotelBooking/Reservation'
import { DataProvider } from './Context/Context'
import HotelSignup from './Pages/HotelSignup'
import { HotelAuthcontextprovider } from './AuthProtection/HotelAuthcontext'
import HotelLogin from './Pages/HotelLogin'
import HotelRoomView from './Pages/HotelRoomView'
import HotelAddRoom from './Pages/HotelAddRoom'
import DatePicker from './DatePicker'
import HotelProtect from './AuthProtection/HotelProtect'

function App() {


  return (
    <>


      <BrowserRouter>

        <AuthContextprovider>
          <HotelAuthcontextprovider>


            <DataProvider>
              <NavBar />

              <Routes>
                <Route element={<ProtectAfterLogin />}>
                  <Route path="/signup" element={<Signup />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/HotelSignup" element={<HotelSignup />}></Route>
                  <Route path="/HotelLogin" element={<HotelLogin />}></Route>
                </Route>


                <Route element={<ProtectRoutes />}>
                  <Route path="/profile" element={<Account />}></Route>
                </Route>

                <Route element={<HotelProtect/>}>
                  <Route path="/HotelRoomView" element={<HotelRoomView />}></Route>
                  <Route path="/HotelAddRoom" element={<HotelAddRoom />}></Route>
                </Route>

                <Route path="/" element={<Home />}></Route>
                <Route path="/date" element={<DatePicker />}></Route>
                <Route path="/Hotel/:Rid/:hid" element={<HotelHome />}></Route>
                <Route path="/Hotel/:Rid/:hid/Reservation/" element={<Reservation />}></Route>
                <Route path="/**" element={<Home />}></Route>


              </Routes>


            </DataProvider>

          </HotelAuthcontextprovider>
        </AuthContextprovider>

      </BrowserRouter >

    </>
  )
}

export default App
