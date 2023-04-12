import React from "react";
function Keypad (){
    function password(event){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={password} />
        </div>
    )
}

export default Keypad;