import React from "react";
import Navbar from "./children/Navbar";
import Search from "./children/Search";
import Results from "./children/Results";
import Saved from "./children/Saved";
import Footer from "./children/Footer";


const Main  = props => (
  <div className="container">
    <div className="row">
    <Navbar />
    </div>
    <div className="row">
    <Search />
    </div>
    <div className="row">
    <Results />
    </div>
    <Saved />
    <div className="row">
    <Footer />
    </div>
  </div>

);

export default Main;
