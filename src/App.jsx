import { useState, useEffect } from 'react';
import Landing from './sections/Landing';
import Introduction from './sections/Introduction';
import TitleBanner from './components/TitleBanner';
import Dreams from './sections/Dreams';
import Opportunities from './sections/Opportunities';
import LeadershipValues from './sections/LeadershipValues';
import Contact from './sections/Contact';
import Strengths from './sections/Strengths';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen flex flex-col gap-5 items-center justify-center">
          <img
            src="./assets/kevin-logo-4x.png"
            className="animate-pulse"
            alt="Loader"
          />
          <p className="font-black font-encode text-3xl">Leading...</p>
        </div>
      ) : (
        <>
          <header id="landing">
            <Landing />
          </header>
          <section id="introduction">
            <TitleBanner title="personal introduction" />
            <Introduction />
          </section>
          <section id="values">
            <TitleBanner title="my leadership values" />
            <LeadershipValues />
          </section>
          <section id="opportunities">
            <TitleBanner title="opportunities to improve" />
            <Opportunities />
          </section>
          <section id="strengths">
            <TitleBanner title="my strengths" />
            <Strengths />
          </section>
          <section id="dreams">
            <TitleBanner title="my hopes & dreams" />
            <Dreams />
          </section>
          <section id="contact">
            <TitleBanner title="contact" />
            <Contact />
          </section>
        </>
      )}
    </>
  );
}

export default App;
