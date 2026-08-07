import { stack } from "../data/stack";

export default function Stack() {
	return (
		<section id="STACK" className="mx-auto max-w-7xl px-6 py-28">
			{/* Heading */}

			<div className="mb-16 text-center">
				<p className="mb-3 text-sm font-medium uppercase tracking-[6px] text-(--primary)">
					Technology Stack
				</p>

				<h2 className="text-5xl font-bold text-(--text)">
					Built With Modern Technologies
				</h2>

				<p className="mx-auto mt-6 max-w-2xl leading-7 text-(--text2)">
					We build scalable digital products using a carefully selected modern
					technology stack trusted by startups and enterprises.
				</p>
			</div>

			{/* Grid */}

			<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
				{stack.map((item) => {
					const Icon = item.icon;

					return (
						<div
							key={item.id}
							className="group relative overflow-hidden rounded-3xl border border-(--text2)/20 bg-(--surface) p-8 transition-all duration-300 hover:-translate-y-2 hover:border-(--primary)/40"
						>
							{/* Glow */}

							<div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-(--primary)/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

							<div className="relative flex flex-col items-center gap-6">
								<div className="flex h-20 w-20 items-center justify-center rounded-2xl  transition duration-300 group-hover:bg-(--primary)/10">
									<Icon
										size={46}
										className="text-(--text) transition duration-300 group-hover:scale-110"
									/>
								</div>

								<h3 className="text-center text-sm font-semibold uppercase tracking-[3px] text-(--text)">
									{item.name}
								</h3>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
