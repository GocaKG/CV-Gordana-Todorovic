import React from "react";
import data from '../data.json';

const Contact = () => {
    return (
        <div className="contact-details">
        {data.contact.map((item) => (
            <ul key={item.id}>
                <div className="contact-details-text">
                    <i className="city" />
                    {item.city}
                </div>
                <div className="contact-details-text">
                    <i className="address" />
                    {item.adress}
                </div>
                <div className="contact-details-text">
                    <i className="phone" />
                    {item.phone}
                </div>
                <button onClick={() => window.location = 'mailto:kg.goca@@gmail.com'} className="mail" >{item.mail}</button>
            </ul>
        ))
       }
        </div>
    )}
    export default Contact