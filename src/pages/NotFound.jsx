import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '65vh', padding: '2rem',
      textAlign: 'center', backgroundColor: 'var(--color-white)',
    }}>
      <FileQuestion size={72} style={{ color: 'var(--color-saffron)', marginBottom: '1.5rem' }} />
      <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
        404 - Page Not Found
      </h1>
      <p style={{ color: 'var(--color-gray-dark)', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '500px' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="btn btn-primary"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.8rem 1.8rem' }}
      >
        <Home size={18} /> Return to Home
      </Link>
    </div>
  );
}
