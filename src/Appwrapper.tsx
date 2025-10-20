import { LanguageProvider } from "./context/LanguageContext";
import Welcome from './sections/Welcome';
import Skills from './sections/Skills';
import Services from './sections/Services';
import About from './sections/About';


export default function AppWrapper() {
  return (
    <LanguageProvider>
      <Welcome />
      <Skills />
      <Services />
      <About />
    </LanguageProvider>
  );
}