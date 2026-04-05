
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
 
  return (
    <div className="tooltip">
       <Tooltip text1="This is a tooltip" children1="Hover over me"/>
       <Tooltip  text2="This is another tooltip" children2="Hover over me to see another tooltip"></Tooltip>
    </div>
  )
}

export default App;
