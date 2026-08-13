import Game from "./components/Game";
import HeroBanner from "./components/Hero";
import Instruction from "./components/Instruction";
import { GameContextProvider } from "./components/context";

const App = () => {
  return (
    <div className="flex">
      <Instruction />
      <div className="flex flex-col w-full h-full">
        <HeroBanner />
        <GameContextProvider>
          <main>
            <Game />
          </main>
        </GameContextProvider>
      </div>
    </div>
  );
};

export default App;
