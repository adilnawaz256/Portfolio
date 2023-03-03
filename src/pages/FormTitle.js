const FormTitle = ()=>{
    return(
        <>
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
                    <span className='info-value'><a href='tel:+919625534956'> +91 9625534956</a></span>
                </span>
            </li>
            <li>
                <i className='uil uil-envelope-edit'></i>
                <span className='info-details'>
                    <h6>Email</h6>
                    <span className='info-value'><a href='mailto:adilnawaz256@gmail.com'> adilnawaz256@gmail.com</a></span>
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
    </>
    )
}
export default FormTitle