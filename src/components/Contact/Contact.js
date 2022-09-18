import React from "react"
import "./Contact.scss"
import MAIL_IMG from "../../Assets/mail_4.svg"
import PHONE_IMG from "../../Assets/phone_7.svg"
const Contact = () => {
  const callNumber = () => {
    window.location.href = "tel:0525459496"
  }
  const sendMail = () => {
    window.location.href = "mailto:naominitai@gmail.com"
  }
  return (
    <div className="contact">
      <div className="shadow-contanier">
        <div className="form">
          <h1 title="ליצירת קשר עם ד״ר נעמי היימן" className="title">
            ליצירת קשר וקביעת תור
          </h1>
          <div className="icon-row">
            <div className="icon">
              <img
                alt="phone number of Naomi Heyman Itai / מספר טלפון של נעמי היימן איתי"
                src={PHONE_IMG}
              />
            </div>
            <div>טלפון -</div>
            <div className="contact-details" onClick={() => callNumber()}>
              0525459496
            </div>
          </div>
          <div className="icon-row">
            <div className="icon">
              <img
                alt="E-mail of Naomi Heyman Itay / כתובת מייל של נעמי היימן איתי"
                src={MAIL_IMG}
              />
            </div>
            <div>מייל - </div>
            <div className="contact-details" onClick={() => sendMail()}>
              naominitai@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
