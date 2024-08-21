import React from "react";
import { Outlet } from "react-router-dom";
function Pricing(){
    return <div>Pricing : 
        <Outlet/>{/**for the sake of child */}
    </div>
}
export default Pricing