import React from "react";
import "../src/Work.css"
import { WorkBodyTitle } from "./components/BodyTitle/BodyTitle";
import mahindra1 from "./assets/mahindra1.jpg";
import mahindra2 from "./assets/mahindra2.jpg";
import gaware from "./assets/gaware.jpg";
import mahindra3 from "./assets/mahindra3.jpg"
import gaware2 from "./assets/gaware2.jpg"
import GetInTouch from "./components/About/GetInTouch";

const Work = () => {

    return (
      <>
<div className="bg-gradient-to-b from-orange-100 to-white dark:from-gray-900 dark:to-gray-800 ">
<div className="work_title font-josefin">

<WorkBodyTitle normalText="Work That We  " gradientText="Proud of" secondtext="Are"/>   

</div>


<br/><br/>


<div className="work_img">
<img className="mahindra1" src={mahindra1}></img> 
<img className="mahindra2" src={mahindra2}></img>
<img className="mahindra3" src={mahindra3}></img>
<img className="gaware2" src={gaware2}></img>
<img className="gaware" src={gaware}></img>

</div>

</div>
<GetInTouch
        headingText="From Here To Everywhere"
        buttonText="Get In Touch"
      />     







      
      </>
    );
  };
  
  export default Work;