import React from "react";

function Image(prop) {
    return (
        <img src={prop.src} className={prop.className}></img>
    )
}

export default Image