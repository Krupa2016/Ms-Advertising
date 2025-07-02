"use client"

import { useState } from "react"
import ContactForm from "./ContactForm"
import "./ContactPage.css"
import LogoStrip from "../Logostrip/LogoStrip"
import { Phone, Mail, MapPin, CheckCircle, Users, BarChart, Award } from "lucide-react"
import gaware_logo from "../../assets/gaware_logo.png"
import mahindra_logo from "../../assets/mahindra_logo.png"
import StatCounter from "./StatCounter"
import { motion } from "framer-motion"


const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("general")
  const imgstrip= [gaware_logo,mahindra_logo];
  return (
    <>
      <div className="contact-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1>Let's Create Something <span className="highlight">Amazing</span> Together</h1>
            <p>Probably the Best Marketing Company Downtown 😎<br />
              When you work with us, we don’t just scratch the surface — we dive deep to uncover the heart of every challenge. From there, we do what we do best: craft bold, visual solutions through exceptional design.</p>
            <div className="hero-cta">
              <a href="#contact-form" className="cta-button">Get in Touch</a>
              <a href="#services" className="cta-link">Our Services</a>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="../../src/assets/ms_logo.png" alt="Marketing team brainstorming" className="hero-image" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">
              <StatCounter target={250} suffix="+" />
            </div>
            <div className="stat-label">Clients Worldwide</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <StatCounter target={15} suffix="+" />
            </div>
            <div className="stat-label">Industry Awards</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <StatCounter target={500} suffix="+" />
            </div>
            <div className="stat-label">Campaigns Launched</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <StatCounter target={98} suffix="%" />
            </div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="clients-section">
          <h2>Trusted by Leading Brands</h2>
          <LogoStrip images={imgstrip}/>
        </div>

        {/* Services Section */}
        <div id="services" className="services-section font-bold">
          <h2>Our Top Marketing Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><BarChart size={40} /></div>
              <h3>Brand Identity Design</h3>
              <p>We specialize in building bold brand identities and crafting cohesive visual languages that not only capture attention but drive real impact.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Users size={40} /></div>
              <h3>Ebook and Brochures</h3>
              <p>Ebooks and brochures are powerful storytelling tools when done right. At MS Advertising, we design high-impact, brand-aligned digital and print materials that go beyond just presenting information.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Award size={40} /></div>
              <h3>Packaging Design</h3>
              <p>Our design team brings creativity and strategy together to craft packaging that not only stands out on the shelf but also tells your product’s story.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><CheckCircle size={40} /></div>
              <h3>Print Design</h3>
              <p>Still think print is outdated? Think again. In an increasingly digital world, MS Advertising brings the power of print back to life.</p>
            </div>
            
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
  <h2 className="font-bold">What Our Clients Say</h2>
  <div className="testimonials-container">
    {/* Testimonial 1 */}
    <motion.div
      className="testimonial"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="testimonial-content">
        <p>"Ms Advertising transformed our digital presence completely. Their strategic approach increased our conversion rate by 150% in just three months."</p>
      </div>
      <div className="testimonial-author">
        <img src="../../src/assets/k.jpg" alt="Client" className="author-image" />
        <div className="author-info">
          <h4>Chirag Sharma</h4>
          <p>Gamer / Editor</p>
        </div>
      </div>
    </motion.div>

    {/* Testimonial 2 */}
    <motion.div
      className="testimonial"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="testimonial-content">
        <p>"Working with Ms Advertising has been a game-changer for our brand. Their creative campaigns consistently deliver outstanding ROI."</p>
      </div>
      <div className="testimonial-author">
        <img src="../../src/assets/c.jpg" alt="Client" className="author-image" />
        <div className="author-info">
          <h4>Krupa Gurav</h4>
          <p>Bakery / Crochet Entrepreneur</p>
        </div>
      </div>
    </motion.div>
  </div>
</div>

        {/* Contact Section */}
        <div id="contact-form gradient_text " className="contact-section">
          <div className="contact-container">
            <div className="contact-info">
              <div className="logo-container">
                <img src="../../src/assets/ms_logo.png" />
              </div>
              <p className="tagline">Creative Solutions for Growing Businesses</p>

              <div className="contact-tabs">
                <button className={`tab-button ${activeTab === "general" ? "active" : ""}`} onClick={() => setActiveTab("general")}>General Inquiries</button>
                <button className={`tab-button ${activeTab === "sales" ? "active" : ""}`} onClick={() => setActiveTab("sales")}>Sales Team</button>
                <button className={`tab-button ${activeTab === "support" ? "active" : ""}`} onClick={() => setActiveTab("support")}>Support</button>
              </div>

              <div className="contact-details">
                {activeTab === "general" && (
                  <div className="tab-content">
                    <div className="contact-method">
                      <Phone className="contact-icon" />
                      <div>
                        <h4>Call Us</h4>
                        <p>(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="contact-method">
                      <Mail className="contact-icon" />
                      <div>
                        <h4>Email Us</h4>
                        <p>hello@msadvertising.com</p>
                      </div>
                    </div>
                    <div className="contact-method">
                      <MapPin className="contact-icon" />
                      <div>
                        <h4>Visit Us</h4>
                        <p>123 Marketing Avenue</p>
                        <p>Business District</p>
                        <p>Mumbai, 400014</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "sales" && (
                  <div className="tab-content">
                    <div className="contact-method">
                      <Phone className="contact-icon" />
                      <div>
                        <h4>Sales Direct Line</h4>
                        <p>(555) 987-6543</p>
                      </div>
                    </div>
                    <div className="contact-method">
                      <Mail className="contact-icon" />
                      <div>
                        <h4>Sales Email</h4>
                        <p>sales@msadvertising.com</p>
                      </div>
                    </div>
                    <div className="team-member">
                      <img src="../../src/assets/k.jpg" alt="Sales Director" className="team-image" />
                      <div>
                        <h4>Chirag xyg</h4>
                        <p>Sales Director</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "support" && (
                  <div className="tab-content">
                    <div className="contact-method">
                      <Phone className="contact-icon" />
                      <div>
                        <h4>Support Hotline</h4>
                        <p>(555) 456-7890</p>
                      </div>
                    </div>
                    <div className="contact-method">
                      <Mail className="contact-icon" />
                      <div>
                        <h4>Support Email</h4>
                        <p>support@msadvertising.com</p>
                      </div>
                    </div>
                    <div className="support-hours">
                      <h4>Support Hours</h4>
                      <p>Monday-Friday: 9am-6pm EST</p>
                      <p>Weekend: 10am-4pm EST</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="form-container ">
              <h2  className="font-bold">Let's Start a Conversation</h2>
              <p>Fill out the form below and one of our marketing experts will get back to you within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
