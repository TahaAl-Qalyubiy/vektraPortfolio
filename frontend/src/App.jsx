import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Process from "./components/Process";
import Connection from "./components/Connection";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="bg-(--bg)">
			<Header />
			<Home />
			<Services />
			<Stack />
			<Process />
			<Connection />
			<Footer />
		</div>
	);
};

export default App;
