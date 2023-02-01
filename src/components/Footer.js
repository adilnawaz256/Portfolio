import React from 'react'
export const social = [
    {
        link:"https://www.linkedin.com/in/adil-nawaz-331210176/",
        icons:"uil uil-linkedin"
    },
    {
        link:"https://github.com/adilnawaz256/",
        icons:"uil uil-github"
    },
    {
        link:"mailto:adilnawaz256@gmail.com",
        icons:"uil uil-envelope-info"
    },
]
export default function Footer(){
 
    return(
        <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <ul className='contact-social'>
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
        <a href='https://wa.me/+919625534956/?text=Hello Adil 🤙' className='whatsapp-btn animate__animated animate__backInDown' target='_blank' rel="noreferrer">
            <i className='uil uil-whatsapp my-float'></i>
        </a>
    </footer>
    )
}