import { createContext, useEffect, useState, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState(() => {
		return localStorage.getItem("theme") || "light";
	});

	const toggleTheme = () => {
		setMode((prev) => (prev === "dark" ? "light" : "dark"));
	};

	useEffect(() => {
		document.documentElement.classList.toggle("dark", mode === "dark");
		localStorage.setItem("theme", mode);
	}, [mode]);

	return (
		<ThemeContext.Provider value={{ mode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	return useContext(ThemeContext);
};
