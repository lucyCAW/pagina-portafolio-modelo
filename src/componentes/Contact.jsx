import React from 'react';
import '../hojas-de-estilo/Contact.css';
import contact from './../assets/img/contact-img.svg';


const Contact = () => {
	return(
    <>
  <div className='contact'>
    <img src={contact}  className='img-contact' />

    <div className='contact-form'>
      <h1 className='title'>Get In Touch</h1>
      <form>
        <input type="text" placeholder='First name' />
        <input type="text" placeholder='Last name' />
        <input type="text" placeholder='Email Adress' />
        <input type="text" placeholder='Phone no.' />
       <textarea name="" id="" cols="30" rows="10"  placeholder='Message'></textarea>
    <button>Send</button>
      </form>
    </div>
  </div>

  <div className='empty-container'>
    {/*Newsletter section*/}
    <div className='newsletter-container'>
      <div className='newsletter-text'>
        <span>Subscribe to our</span>
        <span>Newsletter</span>
        <span>& Never miss latest</span>
        <span>updates</span>
      </div>
      <form>
        <input type="text" placeholder='Email Address'/>
        <button>Submit</button>
      </form>
    </div>

  </div>
   
  </>
		)
}

export default Contact;