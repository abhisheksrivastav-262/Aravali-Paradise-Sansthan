import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Livelihood() {
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
            Economic Resilience
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Livelihood & Skill Development
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            Supporting small economic activities, non-farm enterprises, vocational skills, and social security for informal workers.
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
              <span className="badge-tag">Rural Economic Security</span>
              <h2 className="section-title">Diverse Income Opportunities for Rural Families</h2>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)', marginBottom: '1.2rem' }}>
                Economic vulnerability is a primary driver of hardship in rural Rajasthan. APS assists landless, Dalit,
                and marginal farming families to diversify their income sources through practical skill training and
                government scheme facilitation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
                {[
                  'Small economic activity & micro-enterprise training',
                  'Social security facilitation for unorganized sector workers',
                  'Vocational skill centers for youth self-sufficiency',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    <CheckCircle2 size={17} style={{ color: 'var(--color-terracotta)', flexShrink: 0 }} />
                    <span style={{ fontSize: 'clamp(0.92rem, 1.8vw, 1rem)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/get-involved" className="btn btn-primary">Support Livelihood Programs</Link>
            </div>

            <div>
              <div className="card" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)', background: 'var(--color-sand)' }}>
                <div style={{ position: 'relative', height: 'clamp(200px, 30vw, 300px)', overflow: 'hidden', borderRadius: '12px', marginBottom: '1.2rem', backgroundColor: '#1A2922' }}>
                  <img
                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=1000&q=80"
                    alt="Rural Livelihoods"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                  />
                </div>
                <h4 style={{ color: 'var(--color-primary-dark)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                  Prosperous Livelihood Focus
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-gray-dark)', lineHeight: 1.5 }}>
                  Aligning directly with our Vision: good health, better education, and prosperous livelihood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
