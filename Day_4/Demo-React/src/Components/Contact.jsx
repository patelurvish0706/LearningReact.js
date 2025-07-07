import React from "react";
import { useState } from "react";

const Contact = () => {
    let [name,setName] = useState("Urvish");
    let [city,setCity] = useState("Ahmedabad");

    return(
        <>
        <h1>Contact Me here.</h1>
        <p style={{color:"red",fontSize:"30px"}} >I am {name}, living in {city}</p>
        </>
    )
}
export default Contact;