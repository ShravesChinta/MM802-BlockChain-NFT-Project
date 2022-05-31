import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-white bg-dark">

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/"><p className="tag3">MM802 SSRD</p></Link>
          </li>
    
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
