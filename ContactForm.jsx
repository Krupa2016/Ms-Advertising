"use client"

import { useState } from "react"
import "./ContactForm.css"
import { Send, Loader, CheckCircle } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    companyName: "",
    budget: "",
    requirement: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const budgetOptions = ["Under $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+"]

  const validate = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.contactNo.trim()) {
      newErrors.contactNo = "Contact number is required"
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required"
    }


    if (!formData.requirement.trim()) {
      newErrors.requirement = "Please describe your requirements"
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset form after submission
      setFormData({
        fullName: "",
        email: "",
        contactNo: "",
        companyName: "",
        budget: "",
        requirement: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {submitSuccess && (
        <div className="success-message">
          <CheckCircle className="success-icon" />
          <div>
            <h4>Thank you for reaching out!</h4>
            <p>Our team will contact you within 24 hours to discuss your project.</p>
          </div>
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? "error" : ""}
            placeholder="Lionel..."
          />
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
            placeholder="abc@company.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contactNo">Contact Number *</label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            className={errors.contactNo ? "error" : ""}
            placeholder="(+91) 12345-67890"
          />
          {errors.contactNo && <span className="error-message">{errors.contactNo}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company Name *</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={errors.companyName ? "error" : ""}
            placeholder="Your Company Inc."
          />
          {errors.companyName && <span className="error-message">{errors.companyName}</span>}
        </div>
      </div>

    

      <div className="form-group">
        <label htmlFor="requirement">Project Details *</label>
        <textarea
          id="requirement"
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          rows="5"
          className={errors.requirement ? "error" : ""}
          placeholder="Tell us about your project, goals, and timeline..."
        ></textarea>
        {errors.requirement && <span className="error-message">{errors.requirement}</span>}
      </div>

      <div className="form-footer">
        <p className="privacy-note">
          By submitting this form, you agree to our <a href="#">Privacy Policy</a>.
        </p>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader className="spinner" size={18} />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
