import React from 'react';

export default function LoadingSkeleton() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '60vh', padding: '2rem',
    }}>
      <div className="skeleton-spinner" style={{
        width: '50px', height: '50px',
        border: '4px solid rgba(212,154,53,0.2)',
        borderTop: '4px solid var(--color-saffron)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '1.5rem'
      }}></div>
      <h2 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', animation: 'pulse 1.5s infinite' }}>
        Loading Content...
      </h2>
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      `}</style>
    </div>
  );
}
