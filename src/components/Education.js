import React from "react";

const Education = ({ education }) => {
    return (
        <ul className="edu-exp-container"> 
            {education.map((item) => (
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
export default Education;