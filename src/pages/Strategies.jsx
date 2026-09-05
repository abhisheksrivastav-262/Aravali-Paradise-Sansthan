import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { STRATEGIES } from '../data/organizationData';
import { GitMerge } from 'lucide-react';

export default function Strategies() {
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
            Execution Model
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Implementation Strategies
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            How we translate our vision into on-the-ground reality.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <SectionHeader
             badge="Our Approach"
             title="Methods for Sustainable Impact"
             subtitle="Ensuring community ownership and long-term viability."
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
             {STRATEGIES.map((strat, idx) => (
                <div key={idx} className="card" style={{ padding: '1.8rem', display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                   <div style={{ 
                      width: '44px', height: '44px', minWidth: '44px', borderRadius: '12px', 
                      background: 'rgba(20,53,39,0.1)', color: 'var(--color-primary)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center' 
                   }}>
                      <GitMerge size={22} />
                   </div>
                   <div>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '0.4rem', lineHeight: 1.4 }}>
                         {strat}
                      </h4>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
