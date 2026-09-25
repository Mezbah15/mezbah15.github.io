import React, { useRef } from 'react';
import './contact.css';

import {
    AiOutlineMail,
    AiOutlineMessage,
    AiOutlineWhatsApp
} from 'react-icons/ai';

import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_qtpmvxo',
                'template_yv3ax5a',
                form.current,
                'aKoIWfA-og-YFcCt1'
            )
            .then(
                () => {
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.error('EmailJS Error:', error);
                    alert('Something went wrong. Please try again.');
                }
            );
    };


    return (
        <section id="contact">

            <h5>Get In Touch</h5>

            <h2>Let's Grow Your Business</h2>

            <p className="section-subtitle">
                Have a project, campaign, or growth challenge in mind?
                Tell us what you're working on and let's discuss how we can help.
            </p>


            <div className="container contact_container" style={{ marginTop: '60px' }}>

                {/* =========================
                    CONTACT OPTIONS
                ========================= */}

                <div className="contact_options">

                    {/* Email */}

                    <article className="contact">

                        <AiOutlineMail className="contact-icon" />

                        <h3>Email</h3>

                        <h5>Get in touch with us</h5>

                        <a href="mailto:mezba0044@gmail.com">
                            Send a Mail
                        </a>

                    </article>


                    {/* Messenger */}

                    <article className="contact">

                        <AiOutlineMessage className="contact-icon" />

                        <h3>Messenger</h3>

                        <h5>Chat with our team</h5>

                        <a
                            href="https://www.facebook.com/mezbah1582/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Start a conversation
                        </a>

                    </article>


                    {/* WhatsApp */}

                    <article className="contact">

                        <AiOutlineWhatsApp className="contact-icon" />

                        <h3>WhatsApp</h3>

                        <h5>Chat with our team</h5>

                        <a
                            href="https://api.whatsapp.com/send?phone=8801902611341"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Start a conversation
                        </a>

                    </article>

                </div>


               {/* =========================
    CONSULTATION CTA
========================= */}

<div className="consultation_content">

    <span className="consultation_badge">
        FREE CONSULTATION
    </span>

    <h3>Let's Talk About Your Growth</h3>

    <p>
        Tell me about your business, your goals, and where you're
        currently stuck. We'll discuss how paid advertising can
        help you generate better results.
    </p>

    <div className="consultation_points">
        <div>
            <span>✓</span>
            <p>Discuss your current marketing goals</p>
        </div>

        <div>
            <span>✓</span>
            <p>Identify opportunities for growth</p>
        </div>

        <div>
            <span>✓</span>
            <p>Get a clear action plan</p>
        </div>
    </div>

    <a
        href="https://calendly.com/web-dev-digital-marketer/dm"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-consultation-gradient"
    >
        Book a Free Consultation →
    </a>

    <small>
        No commitment required · Let's see if we're a good fit.
    </small>

</div>
            </div>

        </section>
    );
};


export default Contact;