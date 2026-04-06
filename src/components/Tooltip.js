
import React, { useState } from "react";

const Tooltip=({text,children})=>{
   let[visible,setVisible]=useState(false)
   return( <div 
      onMouseEnter={()=>setVisible(false)}
      onMouseOver={()=>setVisible(true)}
      onMouseLeave={()=>setVisible(false)}
   className="tooltip">
      <h2 className="heading">{children}</h2>
      { visible && <p className="para">{text}</p>}

     
   </div>)
}
export default Tooltip;