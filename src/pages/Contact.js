import '../css/Contact.css';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
    <div className="contact" id='contact'>
      <form action="submit" className="contact-info">
        <label htmlFor="name"></label>
        <input type="text" name='name'/>

        <label htmlFor="email"></label>
        <input type="email" name='email'/>

        <label htmlFor="phone" id='phone'></label>
        <input type="tel" name='phone'/>

        <label htmlFor="name"></label>
        <input type="text" name='name'/>

        <label htmlFor="name"></label>
        <input type="text" name='name'/>
      </form>
    </div>

    <Footer />
    </>
  )
}
