import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProgramCard({ program, onLearnMore }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Image Container — adaptive 4:3, full photo visible, never cropped */}
      <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', backgroundColor: '#1A2922' }}>
        <img 
          src={program.image} 
          alt={program.title}
          loading="lazy"
          decoding="async"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',
            transition: 'transform 0.5s ease'
          }}
          className="program-img"
        />
        <span style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          backgroundColor: 'rgba(20, 53, 39, 0.88)',
          color: '#FFFFFF',
          padding: '0.3rem 0.8rem',
          borderRadius: '50px',
          fontSize: '0.78rem',
          fontWeight: 600,
          backdropFilter: 'blur(4px)'
        }}>
          {program.category}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.7rem', color: 'var(--color-primary-dark)' }}>
          {program.title}
        </h3>
        <p style={{ fontSize: '0.92rem', color: 'var(--color-gray)', lineHeight: 1.6, flex: 1, marginBottom: '1.2rem' }}>
          {program.shortDesc}
        </p>
        
        <button 
          onClick={() => onLearnMore ? onLearnMore(program) : null}
          className="btn btn-outline"
          style={{ padding: '0.5rem 1rem', fontSize: '0.88rem', width: 'fit-content' }}
        >
          Learn Initiative <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
