import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div class="container">
      <div style={{ textAlign: "center" }}>
        <h2>Contact Us</h2>
      </div>
      <div class="row">
        <div class="column">
          <img
            src="https://storage.googleapis.com/gweb-cloudblog-publish/images/Dunzo_header_1.max-1100x1100.png"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div class="column">
          <form action="/action_page.php">
            <label for="fname">
              <b>First Name</b>
            </label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <label for="lname">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label for="country">
              <b>City</b>
            </label>
            <select id="country" name="country">
              <option value="Dhaka">Dhaka</option>
              <option value="Cumilla">Cumilla</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Shylhet">Shylhet</option>
              <option value="Chittagong">Chittagong</option>
            </select>
            <label for="subject">
              <b>Subject</b>
            </label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "170px" }}
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
