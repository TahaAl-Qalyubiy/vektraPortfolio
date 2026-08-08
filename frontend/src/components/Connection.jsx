import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Connection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [status, setStatus] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const subject = encodeURIComponent(
			`New Service Request from ${formData.name}`,
		);

		const body = encodeURIComponent(
			`Name: ${formData.name}
Email: ${formData.email}

Mission:
${formData.message}`,
		);

		window.open(
			`https://mail.google.com/mail/?view=cm&fs=1&to=your-email@gmail.com&su=${subject}&body=${body}`,
			"_blank",
		);
	};

	return (
		<section
			id="CONNECTION"
			className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32"
		>
			{/* Pattern */}

			<div
				className="absolute inset-x-0 top-0 -z-10 h-10 opacity-70"
				style={{
					backgroundImage:
						"repeating-linear-gradient(-45deg, rgba(236,72,153,.35) 0, rgba(236,72,153,.35) 2px, transparent 2px, transparent 11px)",
				}}
			/>

			{/* Card */}

			<div className="rounded-4xl border border-(--text2)/30 bg-(--bg) px-6 py-16 shadow-(--shadow) sm:px-10 lg:px-20 lg:py-20">
				{/* Heading */}

				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-4xl font-medium tracking-tight text-(--text) sm:text-5xl lg:text-6xl">
						Request a service
					</h2>

					<p className="mt-8 text-base text-(--text2)/60 sm:text-lg">
						Give us some details and we’ll get in touch with you.
					</p>
				</div>

				{/* Form */}

				<form onSubmit={handleSubmit} className="mx-auto mt-20 max-w-5xl">
					<div className="grid gap-12 md:grid-cols-2">
						{/* Name */}

						<div className="group relative">
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="Name"
								required
								className="w-full border-0 border-b border-(--text2)/20 bg-transparent px-2 pb-5 text-lg text-(--text) outline-none placeholder:text-(--text2) transition focus:border-(--primary)"
							/>
						</div>

						{/* Email */}

						<div className="group relative">
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Email"
								required
								className="w-full border-0 border-b border-(--text2)/30  px-2 pb-5 text-lg text-(--text) outline-none placeholder:text-(--text2) transition focus:border-(--primary)"
							/>
						</div>
					</div>

					{/* Message */}

					<div className="mt-16">
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Mission"
							required
							rows="5"
							className="w-full resize-none border-0 border-b border-(--text2)/30 bg-transparent px-2 pb-5 text-lg text-(--text) outline-none placeholder:text-(--text2) transition focus:border-(--primary)"
						/>
					</div>

					{/* Status */}

					{status === "success" && (
						<p className="mt-6 text-center text-sm text-emerald-400">
							Your request has been sent successfully.
						</p>
					)}

					{status === "error" && (
						<p className="mt-6 text-center text-sm text-red-400">
							Something went wrong. Please try again.
						</p>
					)}

					{/* Submit */}

					<button
						type="submit"
						disabled={loading}
						className="mt-14 flex w-full items-center justify-center gap-3 rounded-3xl bg-(--primary) px-6 py-6 text-lg font-bold text-white shadow-[0_15px_45px_rgba(0,134,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(0,134,255,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
					>
						{loading ? "Sending..." : "Request"}

						{!loading && <ArrowRight size={22} />}
					</button>
				</form>
			</div>
		</section>
	);
}
