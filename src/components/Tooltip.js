
import React from "react";

const Tooltip=({text1,children1,text2,children2})=>{
   return( <div>
   <h2 className="tooltip" title={text1}>{children1}</h2>
    <p className="tooltip" title={text2}>{children2}</p>

   </div>)
}
export default Tooltip;