import React from "react";
import './App.css';
import about1 from "./about.jpeg";
const HeroSection = () => {
  return (
    <div className="jumbotron ">
      <h1 className="tag1">MM802 Data Visualization </h1>
      <img src={about1} style={{"width":"70%","height":"65%"}}/>
      <p className="tag2">
        <br/>
        This project aims at using frameworks such as Reactjs, JavaScript, HTML, CSS to visualize the data collected from City of Edmonton's Open Data. The data visualization has been done average monthly minimum temperature, average monthly maximum temperature, average monthly precipitation for a particular year and average monthly snowfall for a particular year. These parameters play a very important role in determining the climate of an area and will help to analyze and prevent situations such as heat waves, draught , floods etc.
      </p>
      <hr className="my-4" />
      <p>  
        This Mini Project has been developed by Team Sravanti and Rajat for MM802 Mini Project
      </p>
      <a className="btn btn-success btn-lg" href="https://data.edmonton.ca/Environmental-Services/Weather-Data-Daily-Environment-Canada/s4ws-tdws" role="button">
        Dataset Page
      </a>
    </div>
  );
};

export default HeroSection;

