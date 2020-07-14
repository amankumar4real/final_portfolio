import React from "react";
import styles from "../CSS/info.module.css";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Info = () => {
    
    return(
        <>
            <div key="indormation-page" className="container-fluid">

                <div className="row text-center mt-5">
                    <div className="col-12">
                        <img style={{border:"solid #FFC831 13px", height:"150px", width:"150px"}} src="profile.jpg" className="img-fluid card-img rounded-circle" alt="prof"/>
                    </div>
                </div>

                <div className="row text-center mt-2">

                    <div className="col-12">
                        <div className={styles.name}>Aman Kumar</div>
                    </div>

                    <div className="col-12">
                        <div className={styles.fsd}>Full Stack Developer</div>
                    </div>

                </div>


                <div className="row mt-4">

                    <div className="offset-1 col-10">
                        <div className="row">
                            <div className="col-sm-12 col-xl-4 text-center">
                                <FontAwesomeIcon className={styles.icons} icon={faMapMarker}/>
                                <span className={styles.location}>Patna, Bihar, India</span>   
                            </div>

                            <div className="col-sm-12 col-xl-4 text-center">
                                <FontAwesomeIcon className={styles.icons} icon={faPhone}/>
                                <span className={styles.location}>+91 700 4319 253</span>
                            </div>

                            <div className="col-sm-12 col-xl-4 col-xl-4 text-center">
                                <FontAwesomeIcon className={styles.icons} icon={faEnvelope}/>
                                <span className={styles.location}>amankumar4real@gmail.com</span>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div className="row">
                    <div className="col-auto">

                    </div>
                </div>

                <div className="row mt-5 text-center">

                    <div className="offset-2 col-8 text-center">

                        <p>Aspiring Full Stack Web Developer.<br/>I am a full time coder molded and shaped by Masai School. 
                        With time coding has become a huge part of my life and I am determined to push relevant codes on github everyday. 
                        I love to take on new projects and learn new things as it satisfies me.
                        </p>

                    </div>

                </div>

                <div className="row text-center mb-5 mt-3">
                    <div className="col-12">
                        <button className="btn btn-warning btn-md">RESUME</button>
                    </div>
                </div>

                <div className="row my-5 text-center">

                    <div className="col-sm-6 mb-4  offset-lg-2 col-lg-2">
                        <img style={{width:"20%"}} src="react.svg" className="img-fluid" alt="react"/>
                    </div>

                    <div className="col-sm-6 mb-4 col-lg-2">
                        <img style={{width:"20%"}} src="javascript.svg" className="img-fluid" alt="js"/>
                    </div>

                    <div className="col-sm-6 mb-4 col-lg-2">
                        <img style={{width:"20%"}} src="python.svg" className="img-fluid" alt="py"/>
                    </div>

                    <div className="col-sm-6 mb-4 col-lg-2">
                        <img style={{width:"20%"}} src="bootstrap.svg" className="img-fluid" alt="boot"/>
                    </div>

                    <div className="col-sm-6 mb-4 offset-lg-2 col-lg-2">
                        <img style={{width:"20%"}} src="flask.svg" className="img-fluid" alt="flask"/>
                    </div>

                    <div className="col-sm-6 mb-4 col-lg-2">
                        <img style={{width:"20%"}} src="mysql.svg" className="img-fluid" alt="mysql"/>
                    </div>

                    <div className="col-sm-6 mb-4 col-lg-2">
                        <img style={{width:"20%"}} src="css-3.svg" className="img-fluid" alt="css"/>
                    </div>

                    <div className="col-sm-6 mb-4 col-lg-2">
                        <img style={{width:"20%"}} src="html-5.svg" className="img-fluid" alt="html"/>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Info