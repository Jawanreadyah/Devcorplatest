import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen 
          onLoadComplete={() => setIsLoading(false)}
        />
      )}
      <div className={`min-h-screen w-full ${isLoading ? 'hidden' : ''}`}>
        <Header />
        <main>
          <Hero />
          <div className="px-4 md:px-12 max-w-full md:max-w-7xl mx-0 md:mx-auto">
            <About />
            <Services />
            <FAQ />
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;