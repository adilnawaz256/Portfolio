import AOS from 'aos';
import React, { useEffect } from 'react';
import kn from './skill.json'
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
                
                    {
                        kn.map((curr)=>{
                          return(
                            <div className='col-12 col-lg-6'>
                            <div className='skill' data-aos="flip-up">
                          <h5 className='skill-title'><i className={curr.brands}></i>{curr.sk}</h5>
                          <div className='skill-bar'>
                            <div className='skill-progress' style={curr.mystyle} data-progress={curr.progress} ></div>
                          </div>
                     </div>
                    </div>
                          )
                        })
                    }
                       
                </div>
            </div>
    </section>
    )
}