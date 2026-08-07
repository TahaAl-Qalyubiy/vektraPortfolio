import { services } from "../data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
	return (
		<section id="SERVICES" className="mx-auto max-w-7xl px-6 py-24">
			<div className="mb-14">
				<p className="mb-3 text-sm uppercase tracking-[6px] text-(--primary)">
					Strategic Offerings
				</p>

				<h2 className="text-5xl font-bold text-(--text)">Services</h2>
			</div>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
				{services.map((service) => {
					const Icon = service.icon;

					const layout = {
						1: "lg:col-span-8",
						2: "lg:col-span-4",
						3: "lg:col-span-4",
						4: "lg:col-span-4",
						5: "lg:col-span-4",
					};

					return (
						<div
							key={service.id}
							className={`group rounded-3xl border border-(--text2)/30 bg-(--surface) p-8 transition-all duration-300 hover:-translate-y-2 hover:border-(--primary)/40 ${layout[service.id]}`}
						>
							{/* Header */}

							<div className="mb-8 flex items-center justify-between">
								<div className="rounded-xl bg-(--primary)/10 p-3">
									<Icon size={28} className="text-(--primary)" />
								</div>

								{service.button && (
									<button className="flex items-center gap-2 text-sm text-(--text2) transition group-hover:text-(--primary)">
										{service.button}

										<ArrowRight size={18} />
									</button>
								)}
							</div>

							{/* Title */}

							{service.image ? (
								<div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
									{/* Left */}

									<div>
										<h3 className="mb-4 text-3xl font-bold text-(--text)">
											{service.title}
										</h3>

										<p className="mb-8 leading-7 text-(--text2)">
											{service.description}
										</p>

										<div className="space-y-4">
											{service.features?.map((item) => (
												<div key={item} className="flex items-center gap-3">
													<CheckCircle2
														size={18}
														className="text-(--primary)"
													/>

													<span className="text-sm text-(--text2)">{item}</span>
												</div>
											))}
										</div>
									</div>

									{/* Right */}

									<div className="flex justify-center">
										<img
											src={service.image}
											alt={service.title}
											className="m-auto w-3xl lg:max-w-85 rounded-2xl object-cover transition duration-500 group-hover:scale-105"
										/>
									</div>
								</div>
							) : (
								<>
									<h3 className="mb-4 text-3xl font-bold text-(--text)">
										{service.title}
									</h3>

									<p className="leading-7 text-(--text2)">
										{service.description}
									</p>

									{service.features?.length > 0 && (
										<div className="mt-8 space-y-4">
											{service.features.map((item) => (
												<div key={item} className="flex items-center gap-3">
													<CheckCircle2
														size={18}
														className="text-(--primary)"
													/>

													<span className="text-sm text-(--text2)">{item}</span>
												</div>
											))}
										</div>
									)}
								</>
							)}
							{/* Tags */}

							{service.tags && (
								<div className="mt-8 flex flex-wrap gap-3">
									{service.tags.map((tag) => (
										<div
											key={tag}
											className="rounded-xl bg-(--bg) px-4 py-2 text-sm text-(--text)"
										>
											{tag}
										</div>
									))}
								</div>
							)}

							{/* Technologies */}

							{service.technologies && (
								<div className="mt-8 flex flex-wrap gap-3">
									{service.technologies.map((tech) => (
										<div
											key={tech}
											className="rounded-xl bg-(--bg) px-4 py-2 text-sm text-(--text)"
										>
											{tech}
										</div>
									))}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
}
