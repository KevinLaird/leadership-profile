import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log('Animation triggered');
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="h-screen flex flex-col gap-5 items-center justify-center">
          <img
            src="./assets/commlead-logo.png"
            className="animate-[spin_3s_linear_infinite]"
            alt="Loader"
          />
          <p className="font-black font-encode text-3xl">Leading...</p>
        </div>
      ) : (
        <Landing />
      )}
    </>
  );
}

export default App;
