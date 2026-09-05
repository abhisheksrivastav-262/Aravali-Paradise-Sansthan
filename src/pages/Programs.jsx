import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { PROGRAMS } from '../data/organizationData';
import ProgramCard from '../components/ProgramCard';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div>
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))',
        color: '#FFFFFF',
        padding: 'clamp(2.5rem, 6vw, 4rem) 0 clamp(2rem, 4vw, 3rem)',
        textAlign: 'center',
      }}>
        <div className="container">
          <span className="badge-tag" style={{ background: 'rgba(212,154,53,0.2)', color: 'var(--color-saffron)' }}>
            Our Initiatives
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            All Development Programs
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            Explore the comprehensive grassroots projects conducted by APS across 11 key developmental areas.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {PROGRAMS.map(prog => (
              <ProgramCard key={prog.id} program={prog} onLearnMore={setSelectedProgram} />
            ))}
          </div>
        </div>
      </section>

      {/* Program Modal */}
      {selectedProgram && (
        <div 
          style={{ 
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
            backgroundColor: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(6px)',
            zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem', overflowY: 'auto'
          }}
          onClick={() => setSelectedProgram(null)}
        >
          <div 
            className="card animate-fade-in"
            style={{ 
              maxWidth: '680px', width: '100%', maxHeight: '90vh', 
              overflowY: 'auto', padding: 'clamp(1.5rem, 4vw, 2.5rem)', 
              position: 'relative', borderRadius: '20px' 
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProgram(null)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-dark)', padding: '0.4rem', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}
            >
              <X size={22} />
            </button>
            <span className="badge-tag">{selectedProgram.category}</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: 'var(--color-primary-dark)', margin: '0.6rem 0 1rem' }}>
              {selectedProgram.title}
            </h2>
            <div style={{ position: 'relative', height: 'clamp(200px, 35vw, 280px)', overflow: 'hidden', borderRadius: '12px', marginBottom: '1.2rem', backgroundColor: '#1A2922' }}>
              <img 
                src={selectedProgram.image} 
                alt={selectedProgram.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} 
              />
            </div>
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.02rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)' }}>
              {selectedProgram.fullDesc}
            </p>
            <div style={{ marginTop: '1.8rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
               <button className="btn btn-outline" onClick={() => setSelectedProgram(null)}>Close</button>
               <Link to="/donate" className="btn btn-primary">Support This Initiative</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
