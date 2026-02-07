import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Operations from "@/components/Operations";
import Safety from "@/components/Safety";
import Partnerships from "@/components/Partnerships";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-rich-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Operations />
      <Safety />
      <Partnerships />
      <Footer />
    </main>
  );
}
