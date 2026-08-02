import { useState, useEffect } from "react";
import vektra from "../assets/images/vektra.png";
import {
	Menu,
	X,
	Moon,
	Sun,
	// Settings,
} from "lucide-react";

const navLinks = [
	{ name: "SERVICES", path: "#SERVICES" },
	{ name: "STACK", path: "#STACK" },
	{ name: "CASES", path: "#CASES" },
	{ name: "FLOW", path: "#FLOW" },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

	function darkMode() {
		setMode(mode == "light" ? "dark" : "light");
	}

	useEffect(() => {
		if (mode == "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
		localStorage.setItem("theme", mode);
	}, [mode]);

	return (
		<header className="sticky top-0 z-50 shadow-(--shadow) ">
			<div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
				{/* Logo */}
				<div className="flex items-center gap-3">
					<div className="flex h-14 w-14 items-center justify-center">
						<img src={vektra} alt="Vektra logo" className="rounded-xl" />
					</div>

					<div>
						<h1 className="text-2xl font-bold text-(--text) tracking-widest">
							Vektra
						</h1>
					</div>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden items-center  md:flex">
					{navLinks.map((item) => {
						return (
							<a
								key={item.name}
								href={item.path}
								className="
				group relative px-4 py-2
				text-md font-medium tracking-wider
				text-(--text2)
				transition-all duration-300 ease-out

				hover:text-(--primary)
				hover:scale-105

				after:absolute
				after:left-1/2
				after:-bottom-1
				after:h-0.5
				after:w-0
				after:-translate-x-1/2
				after:rounded-full
				after:bg-(--primary)
				after:transition-all
				after:duration-300

				hover:after:w-4/5"
							>
								{item.name}
							</a>
						);
					})}
				</nav>

				{/* Right Side */}
				<div className="hidden items-center gap-6 md:flex">
					<button
						onClick={darkMode}
						className="rounded-xl p-2 transition hover:scale-105 cursor-pointer"
					>
						{mode == "dark" ? (
							<Sun size={30} color="#D8A03A" />
						) : (
							<Moon size={30} color="#0f172a" />
						)}
					</button>
					<button className="rounded-3xl px-3 py-2 text-(--primary) text-sm transition border-2 border-(--primary)/50 hover:scale-105 cursor-pointer duration-300">
						<a href="#CONNECTION"></a>
					</button>
				</div>

				{/* Mobile Button */}
				<button
					onClick={() => setOpen(!open)}
					className="rounded-xl p-2 transition text-(--text) hover:scale-105 md:hidden"
				>
					{open ? <X size={30} /> : <Menu size={30} />}
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`overflow-hidden transition-all duration-300 md:hidden ${
					open ? "max-h-125" : "max-h-0"
				}`}
			>
				<div className="border-b bg-(--surface) px-6 py-4">
					<div className="flex flex-col gap-2">
						{navLinks.map((item) => {
							return (
								<a
									key={item.name}
									href={item.path}
									onClick={() => setOpen(false)}
									className="flex items-center gap-3 rounded-xl px-4 py-3 text-(--text) text-2xl tracking-wider transition hover:bg-(--primary)/5 hover:text-(--primary)"
								>
									{item.name}
								</a>
							);
						})}

						<hr className="my-2  text-(--text2)" />

						<button
							onClick={darkMode}
							className="flex items-center gap-3 rounded-xl px-4 py-3 text-(--text) text-2xl transition hover:bg-(--primary)/5 hover:text-(--primary)"
						>
							{mode == "dark" ? (
								<Sun size={25} color="#D8A03A" />
							) : (
								<Moon size={25} color="#0f172a" />
							)}
							{mode == "dark" ? "Light mode" : "Dark mode"}
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
