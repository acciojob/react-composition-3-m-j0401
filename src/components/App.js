
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
 
  return (
    <div className="tooltip">
       <Tooltip text="This is a tooltip" children="Hover over me" />
       
       <Tooltip text="This is another tooltip" children="Hover over me to see another tooltip"/>
       
    </div>
  )
}

export default App;
