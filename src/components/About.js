import "aos/dist/aos.css";
import about from '../img/About.jpg'
export default function About() {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-12" >
                        <h2 className="title">About Me</h2>
                        <div className="title-bar"></div>
                    </div>
                    <div className="col-12 col-lg-6" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="about-content">
                            <p>I'm pursuing a B.Tech in Computer Science Engineering at Punjab💻.</p>
                            <p>I am an aspiring web developer looking forward to sharpen my skills and working on myself everyday to achieve the same. I am currently learning and using  JavaScript and React 
              and trying to add more to the stack.</p>
                            <div className="row">
                                <a href='#contact' className='learn-more animate__animated animate__bounceInUp'>
                                    <span className='circle' aria-hidden='true'>
                                        <span className='icon arrow'></span>
                                    </span>
                                    <span className='button-text'>Contact Me</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className="about-img">
                            <img src={about} alt="Adil Nawaz Web Developer" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}