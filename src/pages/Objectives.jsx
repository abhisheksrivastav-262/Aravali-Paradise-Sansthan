import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { OBJECTIVES } from '../data/organizationData';
import { Target } from 'lucide-react';

export default function Objectives() {
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
            Institutional Goals
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Our Objectives
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            The formal aims driving our community development work in Rajasthan.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <SectionHeader
             badge="Chartered Goals"
             title="What We Strive to Achieve"
             subtitle="Guided by our official registration mandate."
          />
          
          <div className="card" style={{ padding: 'clamp(1.8rem, 4vw, 3.5rem)', background: '#FFFFFF', maxWidth: '900px', margin: '0 auto' }}>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {OBJECTIVES.map((obj, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                     <div style={{ 
                        width: '32px', height: '32px', minWidth: '32px', borderRadius: '50%', 
                        background: 'rgba(168,74,41,0.1)', color: 'var(--color-terracotta)', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem' 
                     }}>
                        {idx + 1}
                     </div>
                     <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: 'var(--color-gray-dark)', lineHeight: 1.6, margin: 0, marginTop: '4px' }}>
                        {obj}
                     </p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
