import React from "react";
import "./ContactFormSection.css";

const ContactFormSection = () => {
  return (
    <div className="contact-form-section">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <div className="contact-block">
          <h5>QUESTIONS, SUGGESTIONS, OR COMPLIMENTS?</h5>
          <p>
            Call <a href="tel:979-836-7977">979-836-7977</a>.
          </p>
        </div>

        <div className="contact-block">
          <h5>OUR ADDRESS</h5>
          <p>
            <strong>Blue Bell Creameries</strong>
            <br />
            Consumer Relations
            <br />
            P.O. Box 1807
            <br />
            Brenham, TX 77834
          </p>
        </div>

        <div className="contact-block">
          <h5>MEDIA INQUIRIES</h5>
          <p>
            Please contact{" "}
            <a href="mailto:media@bluebell.com">media@bluebell.com</a>.
          </p>
        </div>

        <div className="disclaimer">
          Submitting an idea, feedback, photos, comments, suggestions or any
          other information to Blue Bell Creameries is entirely voluntary. Blue
          Bell Creameries will be free to use any such information as we see
          fit, without any obligation or compensation to the submitter. Please
          know that anything you transmit to us will be viewed as
          non-confidential and nonproprietary.
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        <p className="form-note">
          Please fill in all required fields indicated with an asterisk (*).
          Your name and contact information are needed in the event that we need
          to respond to your request. All information is kept private, and we do
          not share your personal information. "*" indicates required fields
        </p>

        <form>
          <label>Message Purpose *</label>
          <select required>
            <option>--</option>
            <option>Compliment</option>
            <option>Question</option>
          </select>

          <div className="row">
            <div className="col">
              <label>Salutation</label>
              <select>
                <option>--</option>
                <option>Mr.</option>
                <option>Ms.</option>
              </select>
            </div>
            <div className="col">
              <label>Name *</label>
              <div className="row">
                <input type="text" placeholder="First" required />
                <input type="text" placeholder="Last" required />
              </div>
            </div>
          </div>

          <label>Address *</label>
          <input type="text" placeholder="Street Address" className="address-input" required />
          <div className="row">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State/Province" />
            <input type="text" placeholder="ZIP/Postal Code" />
          </div>

          <div className="row">
            <div className="col">
              <label >Phone</label>
              <input className="phone-input" type="tel" />
            </div>
            <div className="col">
              <label>Email *</label>
              <div className="row">
                <input type="email" placeholder="Enter Email" required />
                <input type="email" placeholder="Confirm Email" required />
              </div>
            </div>
          </div>

          <label>Attachment</label>
          <div className="upload-box">
            <p>Drop files here or</p>
            <button type="button">Select files</button>
            <p className="upload-note">
              Accepted: jpg, pdf, png, bmp, Max: 5MB, 3 files
            </p>
          </div>

          <label>Message *</label>
          <textarea rows="5" required></textarea>

          <div className="checkbox">
            <input type="checkbox" id="updates" />
            <label htmlFor="updates">
              Sign me up for tasty updates, recipes, and news from Blue Bell!
            </label>
          </div>

          <div className="captcha">
            <label>CAPTCHA</label>
            <div className="captcha-box">[ CAPTCHA ]</div>
          </div>

          <button className="submit-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormSection;
