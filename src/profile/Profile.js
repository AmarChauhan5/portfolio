import React from "react";
import style from "./Profile.module.css";
import capture from "./Capture.PNG";
import softwareImage from "./softwareImage.jpg";

const Profile = () => {
 
  return (
    <React.Fragment>
      <div className={style.quote+" bg-warning text-center  fixed-bottom"}>
        “If you think bigger , world becomes smaller”
        </div>
      <div
        style={{
          backgroundImage: `url(${softwareImage})` ,
        }}
        className={style.my_bg + " h-100 w-100 d-flex flex-column justify-content-center align-items-center"}
      >
        <div className={style.my_log}>VESIT05</div>

        <div>
          <img className={style.img } src={capture} alt="pic1" />
        </div>

        <div className={style.my_styel}>Amar Chauhan</div>
        <div className={style.my_styel +" "+ style.stream +" sticky-top"}>
        Master Of Computer Application
        </div>
        <div className={style.my_styel +" "+ style.stream +" "}>
        ( Software Engineer )
        </div>
        <div className={style.icon }>
        <i className="fas fa-arrow-alt-circle-down "></i>
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default Profile;
