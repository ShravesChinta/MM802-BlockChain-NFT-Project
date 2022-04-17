import React from "react";
import Card from "./Card";
import cold from "./cold.jpeg"
import hot from './hot.jpeg'
import snowfall from './snow1.jpeg'
import rain from './rain.jpeg'

const CardSection = () => {
  return (
    <section className="cardsec">
      <div className="container ">
        <h2 className="text-white">Climate Data Visualization</h2>
        <div className="row">
          <div className="col-6">
            <Card
            title="Average Rainfall in Edmonton" 
            buttonText="Average Precipitation"
            subject="Average Precipitation in Edmonton over 23 years(2000-2022)"
            path={rain}
            linkpath='./Avg_Precipitation_Month_Year_Wise'
            />
         </div>
          <div className="col-6">
            <Card
            title="Minimum Average Temperature"
            subject="Average Minimum Temperature in Edmonton over 23 years(2000-2022)"
            buttonText="Minimum Temperature"
            path={cold}
            linkpath='./Avg_Min_Temp_Year_Wise'
            />
          </div>
        </div>
<br/>
        <div className="row">
        <div className="col-6">
            <Card
              title="Maximum Average Temperature"
              buttonText="Maximum Temperature"
              subject="Average Maximum Temperature in Edmonton over 23years(2000-2022)"
              path={hot}
              linkpath='./Avg_Max_Temp_Year_Wise'
            />
          </div>
        <div className="col-6">
            <Card
              title="Average SnowFall"
              buttonText="Snowfall on Ground"
              subject="Average Snowfall on Ground in Edmonton over 23years(2000-2022)"
              path={snowfall}
              linkpath='./Avg_Snow_Monthly_Year_Wise'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;