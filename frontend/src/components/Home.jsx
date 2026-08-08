import React from "react";

import vektra from "../assets/images/vektra.png";
function Home() {
	return (
		<section className="mx-auto max-w-7xl px-6 flex flex-col-reverse lg:flex-row justify-between lg:items-center py-16">
			<div className="sm:mx-16 lg:mx-0">
				<div>
					<p className="text-(--text) text-7xl text-500">Software with</p>
					<p className="text-(--primary) text-7xl text-500">Direction</p>
				</div>
				<p className="text-(--text2) max-w-100 text-base/6 tracking-wide my-12">
					Engineered for global scale. We build the digital nervous systems for
					tomorrow's industry leaders through precision code and neural
					optimization.
				</p>
				<div className="flex flex-col sm:flex-row gap-8">
					<button className="bg-(--primary) rounded-2xl  py-6 px-8 sm:py-3 text-white tracking-wide hover:scale-105 duration-300 cursor-pointer ">
						<a href="#CONNECTION">Initiate Project</a>
					</button>
					<button className="border-2 border-(--text2)/40 rounded-2xl py-6 px-8 sm:py-3 text-(--text) tracking-wide hover:scale-105 duration-300 cursor-pointer">
						<a href="#STACK">Technical Papers</a>
					</button>
				</div>
			</div>
			<img
				src={vektra}
				alt="Vaktra image"
				className="w-160 h-160 mx-auto lg:mx-0"
			/>
		</section>
	);
}

export default Home;
