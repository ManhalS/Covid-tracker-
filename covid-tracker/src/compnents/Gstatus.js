import React from 'react';
import {useState} from "react"
fetch("https://corona.lmao.ninja/v3/covid-19/all")
    .then(res=> res.json())
    
function Gstatus(props) {
    const [Gstatus , setGstatus]=  useState()
    return (
        <div>
           console.log (res) 
        </div>
    );
}

export default Gstatus;