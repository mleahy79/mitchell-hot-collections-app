import { useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';


axios.defaults.baseURL = "http://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections/";

function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-sine',
      offset: 0,
      once: false,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author/:authorId" element={<Author />} />
        <Route path="/item-details/:itemId" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
