import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './redux/store';
import GroundDetails from './pages/GroundDetails';
import Bookings from './pages/Bookings';
import Grounds from './pages/Grounds';
import Footer from './pages/Footer';
import Payment from './pages/Payment';
import Merch from "./pages/Merch"
import MerchDetailsPage from './pages/MerchDetailsPage.jsx'
function App() {

  return (
    <>
      <Provider store={store}>
        <Toaster />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ground/:id" element={<GroundDetails />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/grounds" element={<Grounds />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/merch/:id" element={<MerchDetailsPage />} />

          </Routes>
        </Router>
        <Footer />
      </Provider>
    </>
  )
}

export default App
