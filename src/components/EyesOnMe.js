import React from "react";

function EyesOnMe(){
    
    function handleBlur(event){
        console.log("Hey! Eyes on me!")
    }
    function handleFocus(event){
        console.log("Good!")
    }
    return (
        <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>
    )
}

export default EyesOnMe;