// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { TfiAlignRight } from "react-icons/tfi";
// import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button/Button";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";

export default function Navbar () {
	const [sticky ,setsticky] =useState(false)
	// const [navOpen, setnavIsOpen] = useState( true );

	useEffect( () => {
		window.addEventListener( 'scroll', () => {
			window.scrollY > 50 ? setsticky(true) : setsticky(false)
		})
	} )
	const [mobilemenu, setmobile] = useState( false )
	
	const hide = () => {
		mobilemenu? setmobile(false): setmobile(true)
	}

	return (
		// <div className="flex justify-between static ">
		// 	<div className="mt-5">
		// 		<img src="../assets/logo.png" alt="logo" />
		// 	</div>
		// 	{navOpen ? (
		// 		<div>
		// 			<ul className="flex mt-3 pl-4 ">
		// 				<Link to='/home' className="ml-5 font-bold font-serif ">Home </Link>
		// 				<Link to='/service' className="ml-5 font-bold font-serif ">Services</Link>
		// 				<Link to='/about' className="ml-5 font-bold font-serif ">About</Link>
		// 				<Link to='/contact' className="ml-5 font-bold font-serif ">Contact</Link>
		// 			</ul>
		// 		</div>
		// 	) : (
		// 		<TfiAlignRight
		// 			className="mt-5  "
		// 			onClick={() => setnavIsOpen(!navOpen)}
		// 		/>
		// 	)}
		// </div>
		

		<nav className={`container ${sticky ? 'dark-nav' : ''}`}>
			<img src={logo} alt="logo" className="logo" />

			<ul className={mobilemenu? '': 'hide'}>
				<li>Home</li>
				<li>Service</li>
				<li>About</li>
				<li>Contact</li>
				<li>
					<button className="btn">Log In</button>
				</li>
			</ul>
				<HiMenu className="menu" size={ 40 } onClick={ hide } />
		</nav>
	);
}
