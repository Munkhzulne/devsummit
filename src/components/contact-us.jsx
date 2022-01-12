import React from "react"
import "../styles/contact-us.scss"
import { PrimaryButton } from "./buttons"
export const ContactUs = ({contactRef}) => {
  return (
    <div className="cont" ref={contactRef}>
      <div className="lrmg contactContainer text-warning">
        <div className="text-header w-60">Let’s start working together</div>
        <div className="text-26 w-60 mb-2">
          Contact us for partnership, sponsorship
          <br />
          opportunities and other inquiries
        </div>
        <PrimaryButton borderStyle="darkBorder" url="http://unread.media/">Contact Us</PrimaryButton>
      </div>
    </div>
  )
}
export default ContactUs
