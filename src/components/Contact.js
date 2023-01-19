import { useRef, useState } from "react"
import emailjs from 'emailjs-com'
const messagetext ={
    width:"100%",
    height:"200px",
    fontSize:"14px"
}
export default function Contact(){
    const formref = useRef()
    const [done , setDone] = useState(false)
    const AdilSubmit = (e)=>{
        e.preventDefault()
        emailjs.sendForm(
            "service_mznmehq",
            "template_amdy07n",
            formref.current,"user_wYU38sUiU4kH5PUiZCnqf"
        ).then((result) => {
            console.log(result.text);
            setDone(true)
        } , (err)=>{
            console.log(err.text)
        })
    }
    return(
        <section className='contact' id='contact'>
        <div className='container'>
            <div className='row'>
                <div className='col-12' data-aos="fade-down">
                    <h2 className='title'>Get in Touch</h2>
                    <div className='title-bar'></div>
                </div>
                <div className='col-12 col-lg-6' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                    <h5>Contact Info</h5>
                    <ul>
                        <li>
                            <i className='uil uil-outgoing-call'></i>
                            <span className='info-details'>
                                <h6>Phone</h6>
                                <span className='info-value'><a href='tel:+917449193747'> +91 9625534956</a></span>
                            </span>
                        </li>
                        <li>
                            <i className='uil uil-envelope-edit'></i>
                            <span className='info-details'>
                                <h6>Email</h6>
                                <span className='info-value'><a href='mailto:erajamanickam72@gmail.com'> adilnawaz256@gmail.com</a></span>
                            </span>
                        </li>
                        <li>
                            <i className='uil uil-location-pin-alt'></i>
                            <span className='info-details'>
                                <h6>Location</h6>
                                <span className='info-value'> Bihar, India</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='col-12 col-lg-6' data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
                    <h5 className='m-mr-30'>Message Me</h5>
                    <form ref={formref} onSubmit={AdilSubmit}>
                      <label for='name' className='form-label'>Name</label>
                      <input type='text' name='name' className='form-control mb-20' id='name' placeholder='Your Name' required />

                      <label for='email' className='form-label'>Email address</label>
                      <input type='email' name='uemail' className='form-control mb-20' id='email' placeholder='Your Email address' required />
                      <textarea  rows="5" placeholder="Message" name="message" style={messagetext}/>
                      <input type="submit" className="read-more btn btn-primary" value="Submit"/>
                      {done && "Thank You...."}
					</form>
				</div>
			</div>
		</div>
		</section>
    )
}