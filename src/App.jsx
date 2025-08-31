
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import WhyChooseUs from "./pages/WhyChooseUs";
import LetsConnect from "./pages/LetsConnect";
import ScrollManager from "./components/ScrollManager";

function App() {
  return (
    <Router>
      <ScrollManager />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<LetsConnect />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
