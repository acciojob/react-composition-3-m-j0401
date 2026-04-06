
import React, { useState } from "react";

const Tooltip=({text,children})=>{
   let[visible,setVisible]=useState(false)
   return( <div 
      onMouseEnter={()=>setVisible(false)}
      onMouseOver={()=>setVisible(true)}
      onMouseLeave={()=>setVisible(false)}
   className="tooltip">
      <h2 className="heading">{children}
      { visible && <p className="para">{text}</p>}
      </h2>

     
   </div>)
}
export default Tooltip;