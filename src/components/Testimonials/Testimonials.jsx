import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./Testimonial.css";
import banner1 from "../../assets/banner1.jpg";
import { HiOutlineUser } from "react-icons/hi";

const Testimonials = () => {
	return (
		<div className="testimonials">
			<GoArrowLeft size={50} className="back-btn" />
			<GoArrowRight size={50} className="next-btn" />
			<div className="slider">
				<ul>
					<li>
						<div className="slide">
                            <div className="user-info">
								<img src={banner1} alt="" />
                                <div>

								<h3>DixonAfreh Frimpong</h3>
								<span>Kasoa</span>
                                </div>
							</div>
							<div>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Aspernatur culpa, ex sunt consectetur delectus ducimus commodi
									at accusantium exercitationem obcaecati voluptas porro animi
									repellendus quod eaque! Cum deleniti aliquam maiores.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className="slide">
							<div className="user-info">
                                <img src={ banner1 } alt="" />
                                <div>

								<h3>DixonAfreh Frimpong</h3>
								<span>Kasoa</span>
                                </div>
							</div>
							<div>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Aspernatur culpa, ex sunt consectetur delectus ducimus commodi
									at accusantium exercitationem obcaecati voluptas porro animi
									repellendus quod eaque! Cum deleniti aliquam maiores.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className="slide">
							<div className="user-info">
                                <img src={ banner1 } alt="" />
                                <div>

								<h3>DixonAfreh Frimpong</h3>
								<span>Kasoa</span>
                                </div>
							</div>
							<div>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Aspernatur culpa, ex sunt consectetur delectus ducimus commodi
									at accusantium exercitationem obcaecati voluptas porro animi
									repellendus quod eaque! Cum deleniti aliquam maiores.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className="slide">
							<div className="user-info">
                                <img src={ banner1 } alt="" />
                                <div>

								<h3>DixonAfreh Frimpong</h3>
								<span>Kasoa</span>
                                </div>
							</div>
							<div>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Aspernatur culpa, ex sunt consectetur delectus ducimus commodi
									at accusantium exercitationem obcaecati voluptas porro animi
									repellendus quod eaque! Cum deleniti aliquam maiores.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className="slide">
							<div className="user-info">
                                <img src={ banner1 } alt="" />
                                <div>

								<h3>DixonAfreh Frimpong</h3>
								<span>Kasoa</span>
                                </div>
							</div>
							<div>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Aspernatur culpa, ex sunt consectetur delectus ducimus commodi
									at accusantium exercitationem obcaecati voluptas porro animi
									repellendus quod eaque! Cum deleniti aliquam maiores.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className="slide">
							<div className="user-info">
								<img src={banner1} alt="" />
								<div>
									<h3>DixonAfreh Frimpong</h3>
									<p>Kasoa</p>
								</div>
							</div>
							<div>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Aspernatur culpa, ex sunt consectetur delectus ducimus commodi
									at accusantium exercitationem obcaecati voluptas porro animi
									repellendus quod eaque! Cum deleniti aliquam maiores.
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Testimonials;
