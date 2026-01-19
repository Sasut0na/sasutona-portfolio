import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./Wrapper/Navbar"
import Footer from "./Wrapper/Footer"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/About-Us" element={<AboutUs />} />

            <Route path="/Contact-Us" element={<ContactUs />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>


  )
}

export default App
