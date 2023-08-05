import '../css/Contact.css';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(name && email && phone) {
      let contactData = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
      };
      console.log(contactData);
    } else {
      alert('Please fill the required details!')
    }
  }
  return (
    <>
    <section className="contact" id='contact'>
      <h2 className="heading">Contact <span>Me!</span></h2>

      <form action="submit" className="contact-info">

        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder='Full Name' onChange={(e) => setName(e.target.value)} required/>
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
            <span className="focus"></span>
          </div>          
        </div>
        
        <div className="input-box">
          <div className="input-field">
            <input type="number" placeholder='Mobile Number' onChange={(e) => setPhone(e.target.value)}/>
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" placeholder='Email Subject' onChange={(e) => setSubject(e.target.value)} required/>
            <span className="focus"></span>
          </div>
        </div>

        <div className="textarea-field">
          <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' onChange={(e) => setMessage(e.target.value)}></textarea>
          <span className="focus"></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </section>

    <Footer />
    </>
  )
}
