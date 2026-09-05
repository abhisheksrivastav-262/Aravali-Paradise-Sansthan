import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { CheckCircle2 } from 'lucide-react';

export default function WomenYouth() {
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
            Capacity & Leadership
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Women & Youth Development
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            Empowering women through self-help groups and youth through market-relevant vocational training.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Women Section */}
            <div className="card" style={{ padding: 'clamp(2rem, 3vw, 3rem)', borderTop: '6px solid var(--color-terracotta)' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                🤝 Women Development
              </h2>
              <p style={{ fontSize: 'clamp(0.93rem, 1.8vw, 1rem)', color: 'var(--color-gray-dark)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                APS places women at the heart of rural progress. We promote women's institutions, build capacity in
                leadership, foster micro-entrepreneurship, and advocate for gender equity across all development interventions.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: "Women's Self-Help Groups (SHGs)", desc: "Micro-savings, internal lending, and collective voice." },
                  { title: "Entrepreneurship Skills", desc: "Tailoring, handicraft production, and small enterprise training." },
                  { title: "Development Participation", desc: "Ensuring women active seats in Gram Sabha & village planning." },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={17} style={{ color: 'var(--color-terracotta)', flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <strong style={{ color: 'var(--color-primary-dark)' }}>{item.title}:</strong>
                      <span style={{ color: 'var(--color-gray-dark)', fontSize: '0.93rem' }}> {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Youth Section */}
            <div className="card" style={{ padding: 'clamp(2rem, 3vw, 3rem)', borderTop: '6px solid var(--color-primary)' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                🚀 Youth Development
              </h2>
              <p style={{ fontSize: 'clamp(0.93rem, 1.8vw, 1rem)', color: 'var(--color-gray-dark)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Unemployed rural youth require practical skill building to achieve economic self-sufficiency. APS delivers
                market-oriented vocational training, technical craft skills, and digital literacy.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: "Vocational Skill Training", desc: "Practical trade skills for self-employment & jobs." },
                  { title: "Income Enhancement", desc: "Guiding young adults to access government credit schemes." },
                  { title: "Self-Reliance & Confidence", desc: "Building youth leadership for community volunteering." },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={17} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <strong style={{ color: 'var(--color-primary-dark)' }}>{item.title}:</strong>
                      <span style={{ color: 'var(--color-gray-dark)', fontSize: '0.93rem' }}> {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
