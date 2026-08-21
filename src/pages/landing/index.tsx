import Game from "./components/Game";
import HeroBanner from "./components/Hero";
import KeyStroke from "./components/KeyStroke";
import Instruction from "./components/Instruction";
import { GameContextProvider } from "./components/context";

const App = () => {
  return (
    <div className="flex my-2">
      <Instruction />

      <div className="flex flex-col w-full h-full">
        <HeroBanner />
        <GameContextProvider>
          <main>
            <Game />
          </main>
        </GameContextProvider>
      </div>

      <KeyStroke />
    </div>
  );
};

export default App;
