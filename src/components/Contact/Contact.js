import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="section-container">
        <div className="contact-content">
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          
          <p className="contact-description">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>

          <div className="contact-methods">
            <div className="contact-method card">
              <Mail className="contact-icon" size={32} />
              <h3 className="contact-method-title">Email</h3>
              <a href="mailto:deepakroydbg@gmail.com" className="contact-link">
                deepakroydbg@gmail.com
              </a>
            </div>
            
            <div className="contact-method card">
              <Phone className="contact-icon" size={32} />
              <h3 className="contact-method-title">Phone</h3>
              <a href="tel:+919006032830" className="contact-link">
                +91 9006032830
              </a>
            </div>
            
            <div className="contact-method card">
              <MapPin className="contact-icon" size={32} />
              <h3 className="contact-method-title">Location</h3>
              <span className="contact-info">Bangalore, India</span>
            </div>
          </div>

          <div className="contact-cta card">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-description">
              I'm always excited to work on new challenges and bring innovative ideas to life.
            </p>
            <a 
              href="mailto:deepakroydbg@gmail.com" 
              className="cta-button"
            >
              <Mail size={20} />
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;