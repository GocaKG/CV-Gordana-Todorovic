import React from "react";

const WorkExperience = ({ experience }) => {
    return (
        <ul className="edu-exp-container">
            {experience.map((item) => (
                <li key={item.id}>
                    <h4>{item.title}</h4>
                    <div className="date">
                        <i className="date-img" />
                        {item.date}
                    </div>
                    <div>{item.description}</div>
                </li>
            ))}
        </ul>
    )
  }
export default WorkExperience;