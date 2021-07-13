import React from "react"

function ContactCard(props){
    return (
        <div>
            <h3>Name: {props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard