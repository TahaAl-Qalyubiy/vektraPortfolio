import Stack from "./components/Stack";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";

const App = () => {
	return (
		<div className="bg-(--bg)">
			<Header />
			<Home />
			<Services />
			<Stack />
		</div>
	);
};

export default App;
