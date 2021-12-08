import React from "react";
import style from "./skill.module.css";


const Card = (props) => {
    // console.log(props)
  return (
    <React.Fragment>
      <div className="d-flex justify-content-evenly">
        <div className={style.card + " text-center "}>
          <div
            className={
              style.circle +
              " d-flex flex-column justify-content-center align-items-center "
            }
          >
            {props!=null?props.details_one.per:""}
          </div>
          <div>{props!=null?props.details_one.name:""}</div>
        </div>
        {/* ---- */}
        
        <div className={style.card + " text-center "}>
          <div
            className={
              style.circle +
              " d-flex flex-column justify-content-center align-items-center "
            }
          >
            {props!=null?props.details_two.per:""}
          </div>
          <div>{props!=null?props.details_two.name:""}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
