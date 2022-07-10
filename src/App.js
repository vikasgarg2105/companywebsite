import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.scss";
import AboutUs from "./AboutUs";
import Footers from "./components/Footer/Footers";
import ServicePage from "./ServicePage";
import OurWorks from "./OurWorks";
import Careers from "./Careers";
import ContactUs from "./ContactUs";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/services" element={<ServicePage />} />
          <Route exact path="/ourworks" element={<OurWorks />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footers />
      </Router>
    </>
  );
}

export default App;
