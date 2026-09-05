import React from 'react';
import { Link } from 'react-router-dom';
import { AlertOctagon, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', minHeight: '60vh', padding: '2rem',
          textAlign: 'center', backgroundColor: 'var(--color-sand)',
          borderRadius: '16px', margin: '2rem auto', maxWidth: '600px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <AlertOctagon size={64} style={{ color: 'var(--color-terracotta)', marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
            Something went wrong.
          </h2>
          <div style={{ background: '#ffebee', color: '#c62828', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', textAlign: 'left', overflowX: 'auto' }}>
            <strong>Error Details:</strong>
            <pre style={{ margin: 0, marginTop: '0.5rem', whiteSpace: 'pre-wrap', fontSize: '0.9rem' }}>
              {this.state.error && this.state.error.toString()}
            </pre>
          </div>
          <p style={{ color: 'var(--color-gray-dark)', marginBottom: '2rem', lineHeight: 1.6 }}>
            We encountered an unexpected error while loading this page. 
            Please try refreshing or return to the homepage.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button 
              onClick={() => window.location.reload()} 
              className="btn btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <RefreshCw size={18} /> Refresh Page
            </button>
            <Link 
              to="/" 
              className="btn btn-outline"
              onClick={() => this.setState({ hasError: false })}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Home size={18} /> Return to Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
