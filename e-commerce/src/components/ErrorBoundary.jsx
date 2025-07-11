import React, { useState, useCallback } from 'react';

function ErrorBoundary({ children }) {
  const [error, setError] = useState(null);

  const handleReset = useCallback(() => {
    setError(null);
    window.location.reload();
  }, []);

  if (error) {
    return (
      <div style={{
        padding: '48px',
        textAlign: 'center',
        background: 'rgba(255,255,255,0.7)',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(255,0,0,0.08)',
        margin: '48px auto',
        maxWidth: '480px',
      }}>
        <h2 style={{ color: '#ff512f', marginBottom: '16px' }}>Something went wrong.</h2>
        <p style={{ color: '#333', marginBottom: '24px' }}>
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <button
          onClick={handleReset}
          style={{
            background: 'linear-gradient(90deg, #ff512f 0%, #1e90ff 100%)',
            color: '#fff',
            border: 'none',
            padding: '12px 32px',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px #ffb34744',
            transition: 'background 0.2s',
          }}
        >
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <React.Fragment>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onError: (err) => setError(err),
        })
      )}
    </React.Fragment>
  );
}

export default ErrorBoundary; 