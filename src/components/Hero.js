import Typical from 'react-typical';
import React from 'react'
import adil from '../assets/adil.jpeg'
import { social } from './Footer';
export default function Skills() {
    return (
        <section className='hero' id='hero'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <div className='hero-img' data-aos="flip-left"
                            data-aos-easing="ease-out"
                            data-aos-duration="500">
                            <img src={adil}  alt='adilnawaz'/>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 hero-content' data-aos="fade-down" data-aos-duration="700">
                        <div className='d-flex'>
                            <h4>Hi, I'm Adil </h4>
                            <h4 className='hi'>👋</h4>
                        </div>
                        {" "}
                        <h1 className=' '>
                            {" "}
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "ReactJs Developer",
                                    1500,
                                    "Web Developer",
                                    1500,
                                ]}
                            />
                        </h1>
                        <p className='pt-10'>
                        A passionate web developer having a knack for building websites that provides with user friendly experiences...
                        </p>
                        <button  className='learn-more'
                        onClick={()=>{
                            window.open('https://drive.google.com/file/d/1qAh-EwLF_CJj6DR7SVuGf3xvNBnuCDWb/view?usp=sharing')
                        }}
                        >
                            <span className='circle' aria-hidden='true'>
                                <span className='icon arrow'></span>
                            </span>
                            <span className='button-text'>Resume</span>
                        </button>
                        <div className='social-icons'>
                            <ul>
                                {
                                    social.map((soc)=>{
                                        return(
                                            <li><a href={soc.link} target='_blank' rel="noreferrer"><i className={soc.icons}></i></a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}