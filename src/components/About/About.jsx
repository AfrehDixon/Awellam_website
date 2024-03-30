// import React from 'react'
import "./About.css";
import { HiTrendingUp } from "react-icons/hi";
import awellambanner from '../../assets/awellambanner1.jpg'
export default function About() {
	return (
		<div className="about">
            <div className="about-left">
                <HiTrendingUp />
				{/* <img src={awellambanner} alt="about-img" className="about-img" /> */}
			</div>
			<div className="about-right">
				<h3>ABOUT AWELLAM</h3>
				<h2>Providing the best Building Support</h2>
				<p>
					Welcome to Awellam, your premier destination for all your construction
					and cement needs. With a commitment to quality, reliability, and
					customer satisfaction, we strive to be your one-stop solution for all
					construction materials, whether you're undertaking a large-scale
					project or a DIY endeavor.
				</p>
				<p>
					At Awellam Company, we understand the importance of superior
					materials in ensuring the success of any construction project. That's
					why we source only the highest quality cement and construction
					products from trusted manufacturers, guaranteeing durability,
					strength, and performance in every purchase.
				</p>
				<p>
					<button className="btn">Know Moe</button>
				</p>
			</div>
		</div>
	);
}
