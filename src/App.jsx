import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contato from "./components/Contato";

import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <Hero />
        <Projects />
        <Technologies />
        <Contato/>
      </main>
      <Footer />
    </div>
  );
}
