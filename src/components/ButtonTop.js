import React, { useEffect, useState } from "react";
import "../styles/components/ButtonTop.css";


function ButtonTop() {

    const backToTop = () =>{
        window?.scroll({top: 108, behavior: 'smooth'})
    }

    return(
        <div className="container-btn-top" onClick={backToTop}>
            <div className="bg-btn-top">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="white" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"/></svg>
                <div className="lt-btn-top">TOP</div>
            </div>
        </div>
    );
    
}
export default ButtonTop;