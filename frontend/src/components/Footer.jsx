import vektra from "../assets/images/vektra.png";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="mt-6 overflow-hidden border-t border-(--text2)/10 bg-(--surface)">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-evenly gap-8 px-6 py-8 lg:flex-row">
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

				{/* Navigation */}

				<nav>
					<Link
						to="Police"
						className="relative text-xl font-medium uppercase tracking-[4px] text-(--text2) transition-colors duration-300 hover:text-(--primary)
								after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0
								after:bg-(--primary) after:transition-all after:duration-300
								hover:after:w-full"
					>
						police
					</Link>
				</nav>

				{/* Copyright */}

				<p className="text-center text-xs uppercase tracking-[4px] text-(--text2)">
					© 2026 Vektra Dynamics · Zero Latency Future
				</p>
			</div>
		</footer>
	);
}
