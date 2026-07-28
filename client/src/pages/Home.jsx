import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Stats from "../components/Stats";
import ProblemsPreview from "../components/ProblemsPreview";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <Hero />

      <Features />

      <Stats />

      <ProblemsPreview />
      <Footer />
    </div>
  );
}

export default Home;
