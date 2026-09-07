import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { CheckCircle2, Droplets } from 'lucide-react';

export default function Environment() {
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
            Ecology & Agriculture
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Environment & Water
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            Protecting natural resources and promoting sustainable farming in drought-prone regions.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
          }}>
            <div>
              <span className="badge-tag">Sustainable Practices</span>
              <h2 className="section-title">Agriculture & Conservation</h2>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)', marginBottom: '1.2rem' }}>
                Rural livelihoods in eastern Rajasthan are deeply tied to rain-fed agriculture. APS promotes
                sustainable environmental practices that protect the local ecology while securing farm income.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
                {[
                  'Promotion of water conservation & rainwater harvesting',
                  'Encouraging organic farming & vermi-compost among small farmers',
                  'Afforestation and community plantation drives',
                  'Natural resource management (NRM) awareness'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={17} style={{ color: 'var(--color-terracotta)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: 'clamp(0.92rem, 1.8vw, 1rem)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)', background: 'var(--color-sand)' }}>
                <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: '12px', marginBottom: '1.2rem', backgroundColor: '#1A2922' }}>
                  <img 
                    src="/assets/gallery/aps-gallery-03.jpeg" 
                    alt="Environment Conservation" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }} 
                  />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#FFFFFF', padding: '0.5rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                     <Droplets size={24} />
                  </div>
                </div>
                <h4 style={{ color: 'var(--color-primary-dark)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                  Drought Resilience
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-gray-dark)', lineHeight: 1.5 }}>
                  Water conservation is critical for sustaining life and livelihoods in Alwar's semi-arid terrain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
