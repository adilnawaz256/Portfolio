import AOS from 'aos';
import React, { useEffect } from 'react';
const html ={
    width:"95%"
}
const css = {
    width:"66%"
}
const js = {
    width:"70%"
}
const react = {
    width:'60%'
}
const bootstrap = {
    width:'80%'
}
const git = {
    width:'60%'
}
const node = {
    width:'50%'
}
const mongo = {
    width:'55%'
}
export default function Skills(){
    useEffect(() => {
		AOS.init();
    AOS.refresh()
	  }, []);
    return(
        <section className='skills' id='skills'>
        <div className='container'>
            <div className='row'>
                <div className='col-12' data-aos="fade-down">
                    <h1 className='title'>Skills</h1>
                    <div className='title-bar'></div>
                </div>
                <div className='col-12 col-lg-6'>
                     <div className='skills' data-aos="flip-up">
                         <div className='skill'>
                          <h5 className='skill-title'><i className="fa-brands fa-html5"></i>HTML</h5>
                          <div className='skill-bar'>
                            <div className='skill-progress' style={html} data-progress='90%'></div>
                          </div>
                        </div>
                        <div className='skill' data-aos="flip-up">
                          <h5 className='skill-title'><i className="fa-brands fa-css3"></i>CSS</h5>
                          <div className='skill-bar'>
                            <div className='skill-progress' style={css} data-progress='60%' ></div>
                          </div>
                        </div>
                        <div className='skill' data-aos="flip-up">
                          <h5 className='skill-title'><i className="fa-brands fa-js"></i> Javascript</h5>
                          <div className='skill-bar'>
                            <div className='skill-progress' style={js} data-progress='70%'></div>
                          </div>
                        </div>
                        <div className='skill' data-aos="flip-up">
                          <h5 className='skill-title'><i className="fa-brands fa-react"></i>React Js</h5>
                          <div className='skill-bar'>
                            <div className='skill-progress' style={react} data-progress='80%'></div>
                          </div>
                        </div>
                        <div className='skill' data-aos="flip-up">
                          <h5 className='skill-title'><i className="fa-brands fa-bootstrap"></i> Bootstrap</h5>
                          <div className='skill-bar'>
                            <div className='skill-progress' style={bootstrap} data-progress='80%'></div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6'>
                    <div className='skill' data-aos="flip-down">
                            <h5 className='skill-title'><i className="fa-brands fa-github"></i>Git/Github</h5>
                            <div className='skill-bar'>
                                <div className='skill-progress' style={git} data-progress='60%'></div>
                            </div>
                            </div>
                        <div className='skill' data-aos="flip-down">
                          <h5 className='skill-title'><i className="fa-brands fa-node"></i>Node Js</h5>
                          <div className='skill-bar'>
                            <div className='skill-progress' style={node} data-progress='50%'></div>
                          </div>
                        </div>
                        <div className='skill' data-aos="flip-down">
                          <h5 className='skill-title'><i className="fa-brands fa-mongodb"></i>Mongodb</h5>
                          <div className='skill-bar'>
                            <div className='skill-progress' style={mongo} data-progress='55%'></div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
    </section>
    )
}