import "./App.css";
import { Router, Route, Routes } from "react-router-dom";

// import Navbar from "./components/Navbar";

// import Contact from "./pages/Contact";
import HomeScreen from "./HomeScreen";
// import Layout from "./pages/Layout";
// import Services from "./components/Services/Services";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Layout from "./pages/Layout";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Header } from "./components/Header/Header";
import Gallary from "./components/Gallary/Gallary";
import Testimonials from "./components/Testimonials/Testimonials";
import { Contact } from "./components/Contact/Contact";
// import Layout from "./pages/Layout";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			<Navbar />
			<Hero />
			<div className="containr">
				<Header subTitle="Our Program" title="what we Offer" />
				<Services />
				<About />
				<Header subTitle="Gallary" title="Work photos" />
				<Gallary />
				<Header subTitle="Testimonials" title="What our customers say" />
				<Testimonials />
				<Header subTitle="Contact" title="Get in Touch With Us" />
				<Contact />
			</div>
		</>
		// <Router>
		// <Navbar />
		// 	<Routes >
		// 		<Route path="/home" element={<HomeScreen />} />
		// 		<Route path="/contact" element={<Contact />} />
		// 		<Route path="service" element={<Services />} />
		// 		<Route path="/about" element={<About />} />
		// 	</Routes>
		// </Router>
	);
}

export default App;
