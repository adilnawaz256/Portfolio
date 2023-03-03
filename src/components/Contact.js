import { useRef, useState } from "react"
import emailjs from 'emailjs-com'
import { Field, Form, Formik } from "formik"
import FormTitle from "../pages/FormTitle"

const initialValues = {
  name: "",
  email: "",
  message: ""
}

const messagetext = {
  width: "100%",
  height: "200px",
  fontSize: "14px"
}

export default function Contact() {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (values, { resetForm }) => {
    emailjs.sendForm(
      "service_mznmehq",
      "template_amdy07n",
      formRef.current,
      "user_wYU38sUiU4kH5PUiZCnqf"
    ).then((result) => {
      console.log(result.text);
      setDone(true)
    }, (err) => {
      console.log(err.text)
    })
    resetForm()
  }

  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <div className='row'>
          <FormTitle />
          <div className='col-12 col-lg-6' data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
            <h5 className='m-mr-30'>Message Me</h5>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ values, handleChange }) => (
                <Form ref={formRef}>
                  <label htmlFor='name' className='form-label'>Name</label>
                  <Field type='text' name='name' className='form-control mb-20' id='name' placeholder='Your Name' value={values.name} onChange={handleChange} />

                  <label htmlFor='email' className='form-label'>Email address</label>
                  <Field type='email' name='email' className='form-control mb-20' id='email' placeholder='Your Email address' value={values.email} onChange={handleChange} />

                  <textarea rows="5" placeholder="Message" name="message" style={messagetext} value={values.message} onChange={handleChange} />
                  <Field type="submit" className="read-more btn btn-primary" value="Submit" />
                  {done && "Thank You...."}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}
