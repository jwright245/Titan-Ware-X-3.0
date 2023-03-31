import React from "react";
import { Outlet } from "react-router-dom";

function Lib() {
  return (
    <div className="Lib">
      <div class="container">
        <h1 className="text-center mt-5">Script Library</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Lib;