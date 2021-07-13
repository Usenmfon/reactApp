import React from "react"
// import ContactCard from "./ContactCard"
import Product from "./product"
import products from "./ProductData"

function App(){
    const result = products.map(item =>
        <Product key={item.id} prod={item} />)
    return(
        // <ContactCard contact={{name: "Mr Weatherman", 
        // phone: "+234 (020) 67584",
        // email: "Weath@gmail.com"}}/>
        <div>
            {result}
        </div>
        
    )
}

export default App;