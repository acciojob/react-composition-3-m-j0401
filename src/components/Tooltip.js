
import React from "react";

const Tooltip=({text,children})=>{
   return( <div>
    <p title={text}>{children}</p>

   </div>)
}
export default Tooltip;