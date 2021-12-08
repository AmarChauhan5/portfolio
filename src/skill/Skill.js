import React from "react";
import style from "./skill.module.css";
import Card from "./Card";

const Skill = () => {
  return (
    <React.Fragment>
      <div
        className={style.my_bg + " d-flex flex-column justify-content-center"}
      >
        <div className={style.skill + " text-center  sticky-top"}>SKILLS</div>

        <div className="m-2">
          <div className=" d-flex overflow-scroll bg-info1">
            <div className={style.slide + " d-inline1"}>
              <Card
                details_one={{ name: "Django", per: "80%" }}
                details_two={{ name: "express.js", per: "70%" }}
              />
              <Card
                details_one={{ name: "node.js", per: "60%" }}
                details_two={{ name: "React.js", per: "80%" }}
              />
            </div>
            {/* --------------- */}
            <div className={style.slide + " d-inline1"}>
              <Card
                details_one={{ name: "Socket.io", per: "90%" }}
                details_two={{ name: "React router", per: "60%" }}
              />
              <Card
                details_one={{ name: "Redux", per: "75%" }}
                details_two={{ name: "webRTC", per: "70%" }}
              />
            </div>
            {/* ------------ */}
            <div className={style.slide + " d-inline1"}>
              <Card
                details_one={{ name: "Mysql", per: "60%" }}
                details_two={{ name: "MongoDB", per: "55%" }}
              />
              <Card
                details_one={{ name: "oracle", per: "50%" }}
                details_two={{ name: "sqlLite", per: "60%" }}
              />
            </div>
            {/* -------------- */}
            <div className={style.slide + " d-inline1"}>
              <Card
                details_one={{ name: "Java", per: "75%" }}
                details_two={{ name: "c++", per: "60%" }}
              />
              <Card
                details_one={{ name: "Python", per: "60%" }}
                details_two={{ name: "JavaScript", per: "80%" }}
              />
            </div>
            {/* --------- */}
            <div className={style.slide + " d-inline1"}>
              <Card
                details_one={{ name: "html", per: "75%" }}
                details_two={{ name: "css", per: "80%" }}
              />
              <Card
                details_one={{ name: "AJAX", per: "40%" }}
                details_two={{ name: "Bootstrap", per: "90%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skill;
