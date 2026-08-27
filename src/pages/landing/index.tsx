import Game from "./components/Game";
import Footer from "./components/Footer";
import HeroBanner from "./components/Hero";
import KeyStroke from "./components/KeyStroke";
import Instruction from "./components/Instruction";
import Description from "./components/Description";
import { GameContextProvider } from "./components/context";

const App = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col px-4 py-5 sm:px-6 lg:px-4 lg:py-4">
      <div className="overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-crust/25">
        <GameContextProvider>
          <HeroBanner />

          <section className="grid lg:grid-cols-[minmax(13rem,17rem)_minmax(0,1fr)_minmax(13rem,17rem)]">
            <Instruction />

          <div className="min-w-0 bg-base/70 px-3 py-8 sm:px-6 lg:py-12">
              <main>
                <Game />
              </main>
            </div>

            <KeyStroke />
          </section>
        </GameContextProvider>
      </div>

      <Description />

      <Footer />
    </div>
  );
};

export default App;
