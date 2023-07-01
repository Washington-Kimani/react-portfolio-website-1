import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_l68l625', 'template_7p631bx', form.current, 'TwXyicOq_9lFypO83')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:dummyegator@gmail.com" target='_blank'>Send a message.</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Washington-Kimani</h5>
            <a href="https://m.me/washington.kimani" target='_blank'>Send a message.</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+254 712345678</h5>
            <a href="https://api.whatsapp.com/send?phone=+254745811535" target='_blank'>Send a message.</a>
          </article>
        </div>
        {/* END OF  CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" id="email"  placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;