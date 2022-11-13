import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { contact } from '../data';

function Contact() {

    const gmapCanvas = {
        width: "100%",
        height: "290px",
        background: "none !important",
        overflow: "hidden",
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_rv5cffu',
            'template_9wdmiqf',
            form.current,
            'F82qB-tZgXMupRBV2')
            .then((result) => {
                toast.success('Message sent');

            }, (error) => {
                toast.error('Message not sent!');
            });
        e.target.reset();
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h1>Contact Me</h1>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            {contact.map((contacts) =>
                                <div className={contacts.divClass} key={contacts.id}>
                                    <i className={contacts.icon}></i>
                                    <h4>{contacts.title}</h4>
                                    <p>
                                        <a href={contacts.link}>
                                            {contacts.subTitle}
                                        </a>
                                    </p>
                                </div>
                            )}

                            <div className="gmap_canvas">
                                <iframe
                                    title='map'
                                    marginWidth={0}
                                    frameBorder={0}
                                    allowFullScreen
                                    marginHeight={0}
                                    id="gmap_canvas"
                                    style={gmapCanvas}
                                    src="https://maps.google.com/maps?q=160%20hostel,%20Benin%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                />
                            </div>
                        </div>
                    </div>

                    {/* <!--=======Text Field=======--> */}
                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up">
                        <form ref={form} className="contact-form" id="contact-form" onSubmit={sendEmail} name="contact-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="user_name" className="form-control" id="name" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control" name="user_email" id="email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control" name="user_subject" id="subject" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control" name="message" id="message" rows="9" required></textarea>
                            </div>
                            <div className="button-container ">
                                <button className="button-2" type='submit'>
                                    <span>Send Message</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact;