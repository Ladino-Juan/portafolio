import React from "react";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";

const App = () => {
  return (
    <div>
      <div className="w-screen h-full grid place-items-center top-0">
        <NavBar />
      </div>
      <Landing />
    </div>
  );
};

export default App;
