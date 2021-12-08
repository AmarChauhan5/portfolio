import React from 'react'
import style from './aboute.module.css'

const Raboute = () => {
    return (
        <React.Fragment>
        <div className={style.my_bg +" bg-info1"}>
            <div className={style.my_font + " text-center"}>
            Contact Us
                <hr />
            </div>
            {/* Links */}
            <div>
                <div className={style.my_link +" text-center"}>Links</div>

                <div className="d-flex justify-content-around">
                <div className={style.icon}>
                    <a href="https://www.linkedin.com/in/amar-chauhan-0967351b5/">
                    <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className={style.icon}>
                    <a href="https://github.com/AmarChauhan5">
                    <i className="fab fa-github"></i>
                    </a>
                
                </div>
                <div className={style.icon}>
                    <a href="https://www.hackerrank.com/AmarChauhan55?hr_r=1">
                    <i className="fab fa-hackerrank"></i>
                    </a>
                </div>
                <div className={style.icon}>
                    <a href="https://www.instagram.com/a_chauhan.98622733/">
                    <i className="fab fa-instagram"></i>
                    </a>
                </div>
                </div>
            {/* <hr /> */}
            </div>
            {/* Contact Us */}
            <div>
                {/* <div className={style.my_link +" text-center"}>
                    Contact Us
                </div> */}
                <div className={style.email +" text-center"}>
                    "amarcchauhan@gmail.com"
                </div>
                {/* <div className={style.email +" text-center"}>
                    Resume
                </div> */}
                <div className={style.copy +" text-center"}>
                    Copyright &copy; 2021 VESIT05,inc
                </div>
            </div>

            

        
        </div>
            
        </React.Fragment>
    )
}

export default Raboute
