import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CupolaView from "./components/CupolaView";
import NBLTrainer from "./components/NBLTrainer";
import InfoPanel from "./components/InfoPanel";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <motion.header
          className="p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-4xl font-bold mb-3">Artemis 76 — Window to the World</h1>
          <p className="text-lg max-w-3xl mx-auto text-slate-200">
            Experience the Cupola’s view of Earth and practice neutral buoyancy training
            like astronauts do in the Neutral Buoyancy Lab. Learn how these experiences
            help people on Earth.
          </p>
        </motion.header>

        <CupolaView />
        <NBLTrainer />
        <InfoPanel />
      </main>
      <Footer />
    </div>
  );
}
