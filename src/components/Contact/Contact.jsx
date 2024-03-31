import React from "react";
import './Contact.css'
import { GoInbox, GoLocation, GoMail, GoTelescope } from "react-icons/go";
// import { GoMail } from "react-icons/go";

export const Contact = () => {
	return (
		<div className="contact">
			<div className="contact-col">
				<h3>Send us a message <GoMail  className="contact-img"/></h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
					perferendis corporis doloribus nihil labore voluptas sequi maxime
					ullam laboriosam voluptates nesciunt facere ex ipsum mollitia dolorum
					at reiciendis atque fugiat!
                </p>
                <ul>
                    <li><GoMail  size={30} className="icon"/>awellam@gmai.com</li>
                    <li><GoTelescope size={30} className="icon" />+233 55564 66</li>
                    <li><GoLocation  size={30} className="icon"/>77 Tema  </li>
                </ul>
			</div>
			<div className="contact-col">
				<form action="">
					<label htmlFor="">Your Name</label>
					<input type="text" placeholder="Enter your name" required/>
					<label htmlFor="">Phone Number</label>
					<input type="tel" placeholder="Enter your name" required />
					<label htmlFor="">Write your message</label>
					<textarea name="message" id="" rows="10" placeholder="Enter you message" required></textarea>
					<button type="submit" className="btn">Submit</button>
					
				</form>
			</div>
		</div>
	);
};
