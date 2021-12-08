import logo from "./Spinning.gif";
import style from "./Rapp.module.css";
import Profile from "./profile/Profile";
import Skill from "./skill/Skill";
import Projects from "./projects/Projects";
import Raboute from "./aboute/Raboute";
import React, { useEffect, useState } from "react";

function App() {
  const [loder, setLoder] = useState(true);

  useEffect(() => {
    setLoder(false);
  },[]);
  return (
    <React.Fragment>
      <div
        className={
          style.loder +
          (loder
            ? " d-flex flex-column justify-content-center h-100 align-items-center"
            : " d-none")
        }
      >
        <img src={logo} alt="Error" />
        <h1>Loding...</h1>
      </div>

      <div
        className={
          loder ? " d-none" : " d-flex justify-content-center h-100"
        }
      >
        <div className={style.App}>
          <Profile />
          <Skill />
          <Projects />
          <Raboute />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;