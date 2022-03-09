import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";

// CSS
import './Supports/Stylesheets/Utils.css'

function App() {
  return (
    <div>
      <Navbar />
        {/* <LandingPage /> */}
        <Register />
      <Footer />
    </div>
  );
}

export default App;
