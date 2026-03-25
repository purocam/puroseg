import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import DocumentosSection from './components/DocumentosSection'
import TreinamentosSection from './components/TreinamentosSection'
import SobreSection from './components/SobreSection'
import ContatoSection from './components/ContatoSection'
import ContactSpeedDial from './components/ContactSpeedDial'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main className="min-w-0 w-full max-w-full">
        <HeroSection />
        <DocumentosSection />
        <TreinamentosSection />
        <SobreSection />
        <ContatoSection />
      </main>
      <Footer />
      <ContactSpeedDial />
    </>
  );
}
