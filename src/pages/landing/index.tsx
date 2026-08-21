import Game from "./components/Game";
import HeroBanner from "./components/Hero";
import KeyStroke from "./components/KeyStroke";
import Instruction from "./components/Instruction";
import Description from "./components/Description";
import { GameContextProvider } from "./components/context";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <section className="flex my-2">
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
      </section>

      <Description />

      <Footer />
    </div>
  );
};

export default App;
