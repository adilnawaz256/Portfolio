export default function Contact(){
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
                    <form>
                      <label for='name' className='form-label'>Name</label>
                      <input type='text' name='name' className='form-control mb-20' id='name' placeholder='Your Name' required />

                      <label for='email' className='form-label'>Email address</label>
                      <input type='email' name='email' className='form-control mb-20' id='email' placeholder='Your Email address' required />

                      <label for='mobile' className='form-label'>Mobile</label>
                      <input type='text' name='message' className='form-control mb-20' id='text' placeholder='Your mobile no' required />

                      <input type="submit" className="read-more btn btn-primary" value="Submit"/>
					</form>
				</div>
			</div>
		</div>
		</section>
    )
}