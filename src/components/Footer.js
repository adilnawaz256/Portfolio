import React from 'react'
export default function Footer(){
    return(
        <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <ul className='contact-social'>
                        <li><a href='https://www.linkedin.com/in/adil-nawaz-331210176/' target='_blank' rel="noreferrer"><i className='uil uil-linkedin'></i></a></li>
                        <li><a href='https://github.com/adilnawaz256/' target='_blank' rel="noreferrer"><i className='uil uil-github'></i></a></li>
                        <li><a href='mailto:adilnawaz256@gmail.com' target='_blank' rel="noreferrer"><i className='uil uil-envelope-info'></i></a></li>
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