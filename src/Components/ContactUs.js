import React from "react";
import Footersidefields from "./Footersidefields";
import { Link } from "react-router-dom";
import "../css/Contactus.css"

import { BiLogoTelegram } from "react-icons/bi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { BsArrowReturnLeft } from "react-icons/bs";


const ContactUs = () => {
  return (
    <div className="contact_page">
      <div className="container ">
        <div className="row">
          <div className="col-md-4">
            <Footersidefields />
          </div>
          <div className="col-md-8">
            <h1 >Contact Us</h1>

            <div>
              <p>
                If you have any questions, please check our{" "}
                <Link to="">FAQ’s </Link>for the answer first.
              </p>
              <p>
                If our FAQ’s can’t answer it for you, we’ll be glad to answer
                you in person!
              </p>
            </div>
            <hr className="contact_hr_line"/>

            <div className="d-flex">
              <div>
                <h5 className="contactus_icon"><MdOutlineMarkEmailUnread /></h5>
              </div>
              <div className="contact_lists">
                <h4>Email</h4>
                <p>Email us anytime at info@broccoly.co</p>
                <p>We will reply to all emails within one working day.</p>
              </div>
            </div>

            <hr className="contact_hr_line"/>

            <div className="d-flex">
              <div>
                <h5 className="contactus_icon"><BiLogoTelegram /></h5>
              </div>
              <div className="contact_lists">
                <h4>By post</h4>
                <p>
                  If you'd like to write to us, drop us a line at the following
                  address:
                </p>
                <ul style={{ listStyleType: "none" }}>
                  <li>Broccoly Ltd</li>
                  <li>2 Rennie Square</li>
                  <li>Brucefield Industrial Estate</li>
                  <li>Livingston</li>
                  <li>EH54 9DF</li>
                </ul>
              </div>
            </div>

            <hr className="contact_hr_line"/>

            <div className="d-flex">
              <div>
                <h5 className="contactus_icon"><MdAddCall /></h5>
              </div>
              <div className="contact_lists">
                <h4>By phone</h4>
                <p>Call us free on 0123 456 789</p>
                <ul className="contact_lists_ph">
                  <li>Monday-Friday 9:00am-5:00pm</li>
                  <li>Free from most UK landlines and mobiles</li>
                  <li>Leave a voicemail if all our agents are busy</li>
                </ul>
              </div>
            </div>

            <hr className="contact_hr_line"/>
            <div className="d-flex">
              <div>
                <h5 className="contactus_icon"><BsArrowReturnLeft /></h5>
              </div>
              <div className="contact_lists">
                <h4>Returns</h4>
                <p>
                  If you are returning products then they should be sent to:
                </p>
                <ul style={{ listStyleType: "none" }}>
                  <li>Broccoly Ltd</li>
                  <li>2 Rennie Square,</li>
                  <li>Brucefield Industrial Estate,</li>
                  <li>Livingston,</li>
                  <li>EH54 9DF</li>
                </ul>
                <p>
                  Please include a note detailing items returned, and your name
                  and address.
                </p>
              </div>
            </div>

            <hr className="contact_hr_line"/>

            <div>
              <p>We look forward to hearing from you!</p>
              <p>For PR and media enquiries please contact <span>info@broccoly.co</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
