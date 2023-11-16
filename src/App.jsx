import React, { Fragment } from "react";
import Navbar from "./modules/header/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </Fragment>
  );
}

export default App;
