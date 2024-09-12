import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const form = useRef();

  useEffect(() => {
    document.getElementById('error-container').style.display = `none`;
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        toast.success('Email sent successfully!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'alert alert-success',
          bodyClassName: 'text-base-100 font-bold',
          progressClassName: 'bg-base-100',
          icon: false,
          closeButton: false
        });
        e.target.reset();
        document.getElementById('error-container').style.display = `none`;
      }, (error) => {
        toast.error('Failed to send email.', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'alert alert-error',
          bodyClassName: 'text-base-100 font-bold',
          progressClassName: 'bg-base-100',
          icon: false,
          closeButton: false
        });
        document.getElementById('error-container').style.display = `block`;
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 w-80 md:w-96 mx-auto">
      <div id="error-container" role="alert" className="alert alert-error text-base-100 font-medium">
        <div>There seems to be a problem with the form.
        Please try contacting me on <a href="mailto:sul.otaibi@outlook.sa" className='font-mono font-bold'>sul.otaibi@outlook.sa</a></div>
      </div>
      <input type="text" name="user_name" placeholder="Name" className="input input-bordered" required />
      <input type="email" name="user_email" placeholder="Email" className="input input-bordered" required />
      <textarea name="message" placeholder="Message" className="textarea textarea-bordered" required />
      <button type="submit" className="btn btn-primary text-base-100 text-lg font-extrabold">Send Message</button>
    </form>
  );
};

export default ContactForm;
