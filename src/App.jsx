
import React from 'react';
import loginBg from './assets/login-bg.mp3';

const audio = typeof window !== 'undefined' ? new Audio(loginBg) : null;

const App = () => {
  const handlePlayAudio = () => {
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/1bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-md w-full flex flex-col items-center border border-white/20 overflow-hidden"
        style={{
          backgroundImage: 'url(/bgc.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 w-full flex flex-col items-center">
          <img
            src="/Best.png"
            alt="Atlantis Logo"
            className="w-20 h-20 mb-6 logo-animate hover:scale-110"
          />
          <h1
            className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg text-center tracking-widest uppercase"
            style={{ fontFamily: 'Orbitron, Arial, sans-serif', letterSpacing: '0.15em' }}
          >
            Bay Front
          </h1>
          {/* <p className="text-lg text-blue-100 mb-8 text-center">Dive into a new world of possibilities. Explore, connect, and create Music with us!</p> */}
          <button
            onClick={handlePlayAudio}
            className="px-8 py-3 rounded-full font-bold shadow-xl border border-white/30 backdrop-blur-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300/40 drop-shadow-lg"
            style={{
              letterSpacing: '0.08em',
              fontFamily: 'Orbitron, Arial, sans-serif',
              fontSize: '1.15rem',
              color: '#111',
              backgroundImage: 'url(/lgc.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            Let's Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;