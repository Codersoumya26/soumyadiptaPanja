import React, { useRef } from 'react'
import "./contact.css"
import { MdOutlineMail } from "react-icons/md"
import { FaFacebookMessenger } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_arl22ac', 'template_qh3at99', form.current, '-lj7zi4CjLg2e94wf')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h2> Lets Talk </h2>
      <h5> Contact Me </h5>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_option-icon'/>
              <h4> Email </h4>
              <h5> panjasoumya2@gmail.com </h5>
              <a href="mailto:panjasoumya2@gmail.com" target="__blank"> Send a message </a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className='contact_option-icon'/>
              <h4> Messenger </h4>
              <h5> Soumya Dipta </h5>
              <a href="https://m.me/" target="__blank"> Send a message </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
              <h4> Whatsapp </h4>
              <h5> +916291491940 </h5>
              <a href="https://wa.me/+916291491940" target="__blank"> Send a message </a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
           <input type="text" name='name' placeholder='Your Full Name' required />
           <input type="email" name='email' placeholder='Your Mail-Id' required />
           <textarea name="message" rows="7" placeholder='Your Message' required> </textarea>
           <button type='submit' className='btn btn-primary'> Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact