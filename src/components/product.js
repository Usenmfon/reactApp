import React from "react"

function Product(props) {
    return(
        <div>
            <h2>{props.prod.name}</h2>
            <p>Price: {props.prod.price.toLocaleString("en-Us", {style: "currency", currency:"USD"})}</p>
            <p>Description: {props.prod.description}</p>
        </div>
    )
}

export default Product