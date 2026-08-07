import { process } from "../data/process";

export default function Process() {
	return (
		<section id="flow" className="mx-auto max-w-7xl px-6 py-32">
			{/* Heading */}

			<div className="mb-24 text-center">
				<p className="mb-3 text-sm font-medium uppercase tracking-[6px] text-(--primary)">
					Our Process
				</p>

				<h2 className="text-5xl font-bold text-(--text)">
					Operational Lifecycle
				</h2>

				<p className="mx-auto mt-6 max-w-2xl leading-7 text-(--text2)">
					A streamlined workflow engineered to transform ideas into scalable,
					high-performance digital products.
				</p>
			</div>

			{/* Timeline */}

			<div className="relative">
				{/* Desktop Line */}

				<div className="absolute top-6 left-0 hidden h-0.5 w-full bg-(--text2)/20 lg:block"></div>

				<div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
					{process.map((step) => (
						<div key={step.id} className="group relative">
							<div className="relative flex items-start gap-6 lg:block">
								{/* Circle */}

								<div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-(--text2)/20 bg-(--bg) shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-(--primary)/40">
									<div className="absolute inset-0 rounded-full bg-(--primary)/10 opacity-0 blur-xl transition duration-300 group-hover:opacity-100"></div>

									<span className="relative text-sm font-semibold text-(--primary)">
										{step.id}
									</span>
								</div>

								{/* Content */}

								<div className="pt-1 lg:mt-8 lg:pt-0">
									<h3 className="mb-4 text-3xl font-semibold text-(--text)">
										{step.title}
									</h3>

									<p className="leading-8 text-(--text2)">{step.description}</p>
								</div>
							</div>

							{/*Dasktop*/}

							<div className="absolute left-14 top-6 hidden h-0.5 w-full origin-left scale-x-0 bg-(--primary) transition-transform duration-500 group-hover:scale-x-105 lg:block"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
