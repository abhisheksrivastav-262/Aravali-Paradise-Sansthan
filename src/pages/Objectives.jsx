import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { OBJECTIVES } from '../data/organizationData';

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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {OBJECTIVES.map((obj, idx) => (
                <div key={obj.id || idx} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', minWidth: '40px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))',
                    color: '#FFFFFF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.85rem', fontFamily: 'var(--font-heading)',
                    flexShrink: 0
                  }}>
                    {obj.id || String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                      color: 'var(--color-primary-dark)',
                      fontWeight: 700,
                      marginBottom: '0.35rem',
                      marginTop: '6px'
                    }}>
                      {obj.title}
                    </h3>
                    <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: 'var(--color-gray-dark)', lineHeight: 1.7, margin: 0 }}>
                      {obj.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
