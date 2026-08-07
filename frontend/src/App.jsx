import Stack from "./components/Stack";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Process from "./components/Process";

const App = () => {
	return (
		<div className="bg-(--bg)">
			<Header />
			<Home />
			<Services />
			<Stack />
			<Process />
		</div>
	);
};

export default App;
