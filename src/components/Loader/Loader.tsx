import React, { useState, useEffect } from 'react';

const Loader: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((oldWidth) => (oldWidth >= 100 ? 100 : oldWidth + 10));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // TypeScript fix: Adding React.CSSProperties
  const styles: Record<string, React.CSSProperties> = {
    overlay: {
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw', height: '100vh',
      backgroundColor: '#0f0f0f',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      zIndex: 99999, // Sab se upar dikhega
    },
    progressBar: {
      position: 'fixed',
      top: 0, left: 0,
      height: '4px',
      width: `${width}%`,
      backgroundColor: '#FF6B00',
      boxShadow: '0 0 10px #FF6B00',
      transition: 'width 0.3s ease-in-out',
      zIndex: 100000,
    },
    spinner: {
      width: '50px', height: '50px',
      border: '4px solid rgba(255, 107, 0, 0.1)',
      borderTop: '4px solid #FF6B00',
      borderRadius: '50%',
      marginBottom: '20px',
    }
  };

  return (
    <div style={styles.overlay}>
      <style>
        {`
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          .animate-loader { animation: spin 1s linear infinite; }
        `}
      </style>
      <div style={styles.progressBar}></div>
      <div style={styles.spinner} className="animate-loader"></div>
      <h2 style={{ color: 'white', fontFamily: 'sans-serif', margin: 0 }}>
        ICIT <span style={{ color: '#FF6B00' }}>LEGACY</span>
      </h2>
    </div>
  );
};

export default Loader;