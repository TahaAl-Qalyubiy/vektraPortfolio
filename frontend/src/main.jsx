import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Policy from "./pages/Policy.jsx";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<App />} />
			<Route path="Police" element={<Policy />} />
		</>,
	),
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>,
);
