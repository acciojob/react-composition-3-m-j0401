
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
       <Tooltip className="tooltip" text1="This is a tooltip" children1="Hover over me" onMouseover={handlechange}/>
       <Tooltip className="tooltip" text2="This is a another tooltip" children2="Hover over me to see another tooltip"></Tooltip>
    </div>
  )
}

export default App;
