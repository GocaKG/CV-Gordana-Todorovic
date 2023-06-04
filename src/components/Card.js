import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";


const Card = ({ data }) => {
  const { experience, education, firstSectionTitle, secondSectionTitle } = data;
    return (
        <div className="card-wrapper">
          <div className="card-item">  
             <h2 className="card-title">{firstSectionTitle}</h2>
             <WorkExperience experience={experience} />
          </div>
         <div className="card-item">
           <h2 className="card-title">{secondSectionTitle}</h2>
          <Education education={education}/>
         </div>
      </div>
    )  
    }
      export default Card