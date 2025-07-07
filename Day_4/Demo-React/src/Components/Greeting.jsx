import React from "react";
import { useState } from "react";

const Greeting = () => {
    let [counter, setCounter] = useState(0);

    const Increse = () => {
        setCounter(counter + 1);
    }
    
    const Decrese = () => {
        setCounter(counter - 1);
    }

    return(
        <>
        <h1>Hello, Welcome to React.</h1>

        <button type="button" style={{padding:"10px"}} onClick={Increse}>+</button> <br />
        {counter}<br />
        <button type="button" style={{padding:"10px"}} onClick={Decrese}>-</button>
        </>
    )
}
export default Greeting;