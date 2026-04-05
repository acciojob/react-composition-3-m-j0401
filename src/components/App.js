
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  let[data,setData]=useState("");
  function handlechange(e){
    setData(e.target.text)
  }
  return (
    <div>
       <Tooltip className="tooltip" text="This is a tooltip" children="Hover over me" onMouseover={handlechange}/>
       <Tooltip text="This is a another tooltip" children="Hover over me to see another tooltip"></Tooltip>
    </div>
  )
}

export default App;
