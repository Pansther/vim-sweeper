import Game from "./components/Game";
import HeroBanner from "./components/Hero";
import { GameContextProvider } from "./components/context";

const App = () => {
	return (
		<GameContextProvider>
			<HeroBanner />
			<Game />
		</GameContextProvider>
	);
};

export default App;
