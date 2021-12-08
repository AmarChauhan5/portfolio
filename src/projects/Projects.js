import React from "react";
import projects from "./projects.jpg";
import style from "./projects.module.css"

const Projects = () => {
  const style1 = {
    backgroundImage: `url(${projects})`,
  };
  return (
    <React.Fragment>
      <div style={style1} className={style.my_bg + "  d-flex flex-column justify-content-center align-items-center"}>

          <div className={style.heading + " text-center sticky-top w-100"}>
              PROJECTS
          </div>
        <div>

            <div className={style.chat2 + " p-2 d-flex flex-column justify-content-center align-items-center"}>
                <a href="https://github.com/AmarChauhan5/ChatWithGame">
                <div className={style.chat +" "+style.chat_p  + " d-flex flex-column justify-content-center align-items-center "}>
                <div>Chat</div>
                <div><i className={style.size + " far fa-comment-alt"}></i></div>
                </div>
                </a>

                <a href="https://github.com/AmarChauhan5/ShoopingSiteInDjango">
                <div className={style.chat+" "+style.e_p + " d-flex flex-column justify-content-center align-items-center "}>
                <div>
                <i className={style.size + " fas fa-store"}></i>
                {/* shop */}
                </div>
                <div className="text-decoration-none">Shop</div>

                </div>
                </a>

                {/* <div>
                E <br /> Commerce
                </div> */}
                
            </div>
            {/* <img className={style.my_img} src={chat} alt="" /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
