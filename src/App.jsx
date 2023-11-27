import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import './App.css';
import Introduction from './components/Introduction';
import LeadershipValues from './components/LeadershipValues';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const tabs = [
    { label: 'Tab 1', content: <p>Content for Tab 1</p> },
    { label: 'Tab 2', content: <p>Content for Tab 2</p> },
    { label: 'Tab 3', content: <p>Content for Tab 3</p> },
  ];

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
          <header>
            <Landing />
          </header>
          <section>
            <Introduction />
          </section>
          <section>
            <LeadershipValues tabs={tabs} />
          </section>
        </>
      )}
    </>
  );
}

export default App;
