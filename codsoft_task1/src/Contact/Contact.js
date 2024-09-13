import React from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2024', 'template_App', e.target, 'ErLXycTxIIWg63AWp')
      .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className='d-flex flex-coloum justify-content-center'>
      <div className="m-4 mt-5">
        <h2 className='text-info text-xl-center'>CONTACT ME </h2>
        <form onSubmit={sendEmail} className='m-xl-5 mt-5 bg-sm-secondary p-3' style={{ borderRadius: '10px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              // value={formData.subject}
              // onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              // value={formData.message}
              // onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;