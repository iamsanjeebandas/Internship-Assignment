import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Feeds from "./components/Feeds";
import RightFooter from "./components/RightFooter";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Feeds></Feeds>
      <RightFooter></RightFooter>
    </div>
  );
}

export default App;
