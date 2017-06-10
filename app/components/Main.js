import React from "react";
import Navbar from "./children/Navbar";
import Search from "./children/Search";
import Results from "./children/Results";
import Saved from "./children/Saved";
import Footer from "./children/Footer";


const Main  = props => (
  <div className="container">
    <Navbar />
    <Search />
    <Results />
    <Saved />
    <Footer />
  </div>

);

export default Main;
