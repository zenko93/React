import React from "react";

function ContactCard(props) {
    return(
        <div className="contacts">
            <div className="contact-card">
                <img align="center" src={props.contact.imgUrl}/>
                <h3><font color="#3AC1EF">▍{props.contact.name}</font></h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
        </div>
    )
}

export default ContactCard

