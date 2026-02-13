import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function MainLayouts() {
  return (
    <div>
        <NavBar/>
        <div>
            
        </div>
        <Outlet/>
    </div>
  )
}

export default MainLayouts