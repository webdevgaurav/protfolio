import '../css/Contact.css';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {

  const googleSheetUrl = "https://script.google.com/macros/s/AKfycbyUxoXIc0pUy6J_i3Q-L3cvBuTki1lky3nctf78fM4-WzHl5WJg4iyoTf4HNR8xCWsc/exec";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) =>{
    let formEle = document.querySelector("form");
    event.preventDefault();
    let formData = new FormData(formEle);
    
    if(name && email && phone) {

      var options = {
          'method': 'POST',
          'contentType': 'application/json',
          'body': formData
      };

      fetch(googleSheetUrl, options).then(res => res.text())
      .then(data => {
        console.log(data)
        if(data == 'Success') {
          setSuccess(current => !current);
          let timer = setInterval(() => {
            setSuccess(current => !current);
            clearInterval(timer);
          }, 2000);

        }
      })
      .catch(err => {
        console.log('Error', err);
        alert('Something Went Wrong. Please try again!')
      });
      
    } else {
      alert('Please fill the required details!')
    }

  }

  return (
    <>
    <section className="contact" id='contact'>
      <h2 className="heading">Contact <span>Me!</span></h2>

      <form className="contact-info">

        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder='Full Name' name="name" onChange={(e) => setName(e.target.value)} required/>
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="email" placeholder='Email' name="email" onChange={(e) => setEmail(e.target.value)} required/>
            <span className="focus"></span>
          </div>          
        </div>
        
        <div className="input-box">
          <div className="input-field">
            <input type="number" placeholder='Mobile Number' name="phone" onChange={(e) => setPhone(e.target.value)}/>
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" placeholder='Email Subject' name="subject" onChange={(e) => setSubject(e.target.value)} required/>
            <span className="focus"></span>
          </div>
        </div>

        <div className="textarea-field">
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' onChange={(e) => setMessage(e.target.value)}></textarea>
          <span className="focus"></span>
        </div>
        
        <div className="btn-box btns">
          <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
        </div>
      </form>

      <div className={success ? "success-message show": "success-message"}><h2>successfully submitted!</h2></div>
    </section>

    <Footer />
    </>
  )
}
