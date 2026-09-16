import { useEffect, useState } from "react";
import vektra from "../assets/images/vektra.png";
import {
	ArrowLeft,
	ArrowRight,
	Languages,
	Moon,
	Sun,
	FileText,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { policies } from "../data/Policy";
import { Link } from "react-router-dom";

export default function Policy() {
	const [language, setLanguage] = useState("ar");

	const { mode, toggleTheme } = useTheme();

	const isArabic = language === "ar";

	return (
		<main
			dir={isArabic ? "rtl" : "ltr"}
			className="min-h-screen bg-(--bg) text-(--text) transition-colors duration-300"
		>
			{/* Header */}

			<header className="sticky top-0 z-50 border-b border-(--text2)/15 bg-(--bg)/85 backdrop-blur-xl">
				<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-6">
					{/* Back */}

					<Link
						to="/"
						className="group flex items-center gap-2 rounded-xl border border-(--text2)/20 px-4 py-2.5 text-sm font-medium transition hover:border-(--primary)/50 hover:text-(--primary)"
					>
						{isArabic ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}

						<span className="hidden sm:inline">
							{isArabic ? "العودة للرئيسية" : "Back Home"}
						</span>
					</Link>

					{/* Logo */}

					<Link to="/" className="flex items-center gap-3">
						<div className="flex h-14 w-14 items-center justify-center">
							{/* <FileText size={21} className="text-(--primary)" /> */}
							<img src={vektra} alt="Vektra logo" className="rounded-xl" />
						</div>

						<h1 className="text-2xl font-bold text-(--text) tracking-widest">
							Vektra
						</h1>
					</Link>

					{/* Controls */}

					<div dir="ltr" className="flex items-center gap-2">
						<button
							type="button"
							onClick={() =>
								setLanguage((prev) => (prev === "ar" ? "en" : "ar"))
							}
							className="flex items-center gap-2 rounded-xl border border-(--text2)/20 px-3 py-2.5 text-sm transition hover:border-(--primary)/50 hover:text-(--primary)"
							aria-label="Change language"
						>
							<Languages size={18} />

							<span className="hidden sm:inline">{isArabic ? "EN" : "AR"}</span>
						</button>

						<button
							type="button"
							onClick={toggleTheme}
							className="rounded-xl p-2 transition hover:scale-105 cursor-pointer"
						>
							{mode == "dark" ? (
								<Sun size={30} color="#D8A03A" />
							) : (
								<Moon size={30} color="#0f172a" />
							)}
						</button>
					</div>
				</div>
			</header>

			{/* Hero */}

			<section className="relative overflow-hidden border-b border-(--text2)/10">
				<div className="absolute left-1/2 top-0 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-(--primary)/10 blur-[120px]" />

				<div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
					<p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-(--primary)">
						Vektra
					</p>

					<h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
						{isArabic ? "الشروط والأحكام والسياسات" : "Policies & Terms"}
					</h1>

					<p className="mx-auto mt-6 max-w-2xl leading-8 text-(--text2)">
						{isArabic
							? "يرجى قراءة الشروط والسياسات التالية بعناية قبل بدء أو استمرار أي مشروع أو خدمة مع Vektra."
							: "Please review the following policies and terms carefully before starting or continuing any project or service with Vektra."}
					</p>

					<div className="mt-8 flex justify-center">
						<span className="rounded-full border border-(--primary)/20 bg-(--primary)/10 px-4 py-2 text-xs font-medium text-(--primary)">
							{policies.length} {isArabic ? "سياسة" : "Policies"}
						</span>
					</div>
				</div>
			</section>

			{/* Policies */}

			<section className="mx-auto max-w-5xl px-5 py-20 sm:px-6">
				<div className="space-y-6">
					{policies.map((policy, index) => {
						const item = policy[language];

						return (
							<article
								key={policy.id}
								className="group relative overflow-hidden rounded-3xl border border-(--text2)/15 bg-(--surface)  transition-all duration-300 hover:-translate-y-1 hover:border-(--primary)/35 py-8"
							>
								{/* Number */}

								<div className="absolute top-0 h-full w-1 bg-(--primary) opacity-40 transition-opacity group-hover:opacity-100 ltr:left-0 rtl:right-0" />

								<div className="flex items-start gap-5">
									<div className="min-w-0 flex-1">
										<div className="flex gap-5 px-4 md:px-8">
											<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-(--primary)/25 bg-(--primary)/10 text-sm font-semibold text-(--primary)">
												{String(index + 1).padStart(2, "0")}
											</div>
											<h2 className="text-xl font-semibold sm:text-2xl">
												{item.title}
											</h2>
										</div>

										<div className="mt-6 space-y-4 px-4 md:px-12 lg:px-16">
											{item.content.map((paragraph, i) => (
												<div key={i} className="flex items-start gap-3">
													<span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--primary)" />

													<p className="leading-8 text-(--text2)">
														{paragraph}
													</p>
												</div>
											))}
										</div>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</section>

			{/* Bottom */}

			<section className="border-t border-(--text2)/10">
				<div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
					<p className="text-center text-sm text-(--text2) sm:text-start">
						{isArabic
							? "© Vektra — جميع الحقوق محفوظة."
							: "© Vektra — All rights reserved."}
					</p>

					<Link
						to="/"
						className="flex items-center gap-2 rounded-xl bg-(--primary) px-5 py-3 font-medium text-white transition hover:opacity-90"
					>
						{isArabic ? "العودة إلى الصفحة الرئيسية" : "Return to Home"}

						{isArabic ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
					</Link>
				</div>
			</section>
		</main>
	);
}
