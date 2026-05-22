import { Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import ScrollToTop from "./Component/ScrollToTop"

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <div className="my-30">
        <Outlet />
      </div>

      <Footer />

    </div>
  )
}

export default App