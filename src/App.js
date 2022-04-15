import React from "react";
import Navbar from "./Navbar";
import Middle from "./Middle";
import Footer from "./Footer";
import Middle1 from './Middle1';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Home";
import SignMessage from "./SignMessage";
import AssetsGallery from "./AssetsGallery";

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component ={Home}/>
          <Route path="/SignMessage" exact component={SignMessage}/>
          <Route path="/AssetsGallery" exact component={AssetsGallery}/>
        </Switch>
      <Footer />
      </Router>
    </>
  );
};

export default App;
