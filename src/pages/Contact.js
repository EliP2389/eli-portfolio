import React from 'react'
// import { validateEmail } from '../utils/helpers';
import './Contact.css';

function Contact() {
  // const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  // const [errorMessage, setErrorMessage] = useState('');
  // const { name, email, message } = formState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     setFormState({ [e.target.name]: e.target.value });
  //     console.log('Form', formState);
  //   }
  // };

  // const handleChange = (e) => {
  //   if (e.target.name === 'email') {
  //     const isValid = validateEmail(e.target.value);
  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid.');
  //     } else {
  //       setErrorMessage('');
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage('');
  //     }
  //   }
  // };

  return (
    <section className='container'>
      <h1 className='contact'>Contact me</h1>
      <form id="form">
        <div className='form contact-me row'>
        <div className='mb-4 col-8'>
          <label className='form-label' htmlFor="name">Name:</label>
          <h2 className='my_name'>Eli Pagan</h2>
          {/* <input className='form-control' type="text" name="name" defaultValue={name} onBlur={handleChange} /> */}
        </div>
        <div className='mb-4 col-8'>
          <label className='form-label' htmlFor="email">Email address:</label>
          <h2 className='my_email'>eliezerpagan2389@gmail.com</h2>
          {/* <input className='form-control' type="email" name="email" defaultValue={email} onBlur={handleChange} /> */}
        </div>
        <div className='mb-4 col-8'>
          <label className='form-label' htmlFor="message">Phone:</label>
          <h2 className='my_phone'>347-445-9749</h2>
          {/* <textarea className='form-control' name="message" rows="3" defaultValue={message} onBlur={handleChange} /> */}
        </div>
        </div>
        {/* {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )} */}
        {/* <button className='button-form' data-testid="button" type="submit">Submit</button> */}
      </form>
    </section>
  )
}

export default Contact