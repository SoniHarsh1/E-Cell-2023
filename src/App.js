import "./App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Team from "./pages/Team";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import FooterData from "./data/Footer.json";
import galleryImages from './data/Gallery2';

import MCD from "./pages/MCD";
import Amul from "./pages/Amul";
import Walmart from "./pages/Walmart";
import Skyroot from "./pages/Skyroot";
import IPL from "./pages/IPL";
import Gallery from "./pages/Gallery";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/blog/detangling_mcdonalds" element={<MCD/>}/>
          <Route exact path="/blog/amul_case_study" element={<Amul/>}/>
          <Route exact path="/blogs/walmart_case_study" element={<Walmart/>}/>
          <Route exact path="/blogs/skyroot_case_study" element={<Skyroot/>}/>
          <Route exact path="/blogs/ipl_case_study" element={<IPL/>}/>
          <Route exact path="/gallery" element={<Gallery galleryImages={galleryImages}/>}/>
          <Route exact path = "/back" element  = {<Homepage/>}/>          
        </Routes>
      </BrowserRouter>
      <Footer {...FooterData} />
    </>
  );
}

export default App;
