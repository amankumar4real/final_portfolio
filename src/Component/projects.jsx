import React from "react";
import styles from "../CSS/projects.module.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCode, faLink} from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <div className={styles.bck} key="project_cards ">
            <div className="container-fluid mt-5">
                <div className="row p-5">

                    <div className="col-12 text-center">
                        <h1 className={styles.proj}>PROJECTS</h1>
                    </div>

                    <div className="col-12 offset-sm-2 col-sm-8 offset-md-0 col-md-6 col-lg-4 p-4 ">
                        <div class="card" style={{borderRadius : "30px 0px"}}>
                            <img src="tech2.jpeg" class="card-img-top" style={{height:"200px", borderRadius : "30px 0px 0px 0px"}} alt="im"/>
                            <div class="card-body">
                                <h5 class="card-titler">Gadgets Shop</h5>
                                <small className="text-secondary">All the latest Gadgets are here!</small> 
                                <p class="card-text mt-3">This is a Gadget Store with multiple features.<br/> 
                                The front end work is based on React with addition of react-router, bootstrap.<br/>
                                </p>
                            </div>
                            <div class="card-body">
                                <hr/>
                                <div className="row">
                                    <div className="col-auto">
                                        <FontAwesomeIcon className="mr-1" icon={faLink}/>
                                        <a href="https://my-first-app-ju24y6onf.now.sh/" target="_blank">Demo Link</a>
                                    </div>
                                    <div className="col-auto">
                                        <FontAwesomeIcon className="mr-1" icon={faCode}/>
                                        <a href="https://github.com/amankumar4real/Projects/tree/master/Tech%20Website" target="_blank">Github Code Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 offset-sm-2 col-sm-8 offset-md-0 col-md-6 col-lg-4 p-4 ">
                        <div class="card" style={{borderRadius : "0px 30px"}}>
                            <img src="workspace.jpg" class="card-img-top" style={{height:"200px", borderRadius : "0px 30px 0px 0px"}} alt="im"/>
                            <div class="card-body">
                                <h5 class="card-titler">Job Search Engine</h5>
                                <small className="text-secondary">Get all the fresh job postings!</small> 
                                <p class="card-text mt-3">This is a job search engine with various features.<br/> 
                                The front end work is based on React with axios for api call, react-router and bootstrap.</p>
                            </div>
                            <div class="card-body">
                                <hr/>
                                <div className="row">
                                    <div className="col-auto">
                                    <FontAwesomeIcon className="mr-1" icon={faLink}/>
                                        <a href="https://git-job.now.sh/" target="_blank">Demo Link</a>
                                    </div>
                                    <div className="col-auto">
                                        <FontAwesomeIcon className="mr-1" icon={faCode}/>
                                        <a href="https://github.com/amankumar4real/Projects/tree/master/Git%20Job" target="_blank">Github Code Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 offset-sm-2 col-sm-8 offset-md-0 col-md-6 col-lg-4 p-4 ">
                        <div class="card" style={{borderRadius : "0px 30px"}}>
                            <img src="viruss.jpg" class="card-img-top" style={{height:"200px", borderRadius : "0px 30px 0px 0px"}} alt="im"/>
                            <div class="card-body">
                                <h5 class="card-titler">Covid Tracker</h5>
                                <small className="text-secondary">Get the latest updates!</small> 
                                <p class="card-text mt-3">This is a covid 19 tracker with details for each country.<br/> 
                                The project is based on javascript, html, css and api call. Bootstrap is also used for overall look.</p>
                            </div>
                            <div class="card-body">
                                <hr/>
                                <div className="row">
                                    <div className="col-auto">
                                    <FontAwesomeIcon className="mr-1" icon={faLink}/>
                                        <a href="https://amankumar4real.github.io/covid-tracker/" target="_blank">Demo Link</a>
                                    </div>
                                    <div className="col-auto">
                                        <FontAwesomeIcon className="mr-1" icon={faCode}/>
                                        <a href="https://github.com/amankumar4real/Projects/tree/master/module_2" target="_blank">Github Code Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 offset-sm-2 col-sm-8 offset-md-0 col-md-6 col-lg-4 p-4 ">
                        <div class="card" style={{borderRadius : "0px 30px"}}>
                            <img src="moviess.jpg" class="card-img-top" style={{height:"200px", borderRadius : "0px 30px 0px 0px"}} alt="im"/>
                            <div class="card-body">
                                <h5 class="card-titler">Movie Database</h5>
                                <small className="text-secondary">Look up your fev movies and tv shows!</small> 
                                <p class="card-text mt-3">This is a movie database search engine.<br/> 
                                The front end work is based on javascript, html, css also ajax for api call and bootstrap.</p>
                            </div>
                            <div class="card-body">
                                <hr/>
                                <div className="row">
                                    <div className="col-auto">
                                    <FontAwesomeIcon className="mr-1" icon={faLink}/>
                                        <a href="https://amankumar4real.github.io/movie-database/" target="_blank">Demo Link</a>
                                    </div>
                                    <div className="col-auto">
                                        <FontAwesomeIcon className="mr-1" icon={faCode}/>
                                        <a href="https://github.com/amankumar4real/Projects/tree/master/project_3" target="_blank">Github Code Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects