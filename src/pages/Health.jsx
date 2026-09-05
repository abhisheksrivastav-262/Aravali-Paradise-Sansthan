import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { CheckCircle2, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Health() {
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
            Rural Wellness
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Health & Healthcare Checkups
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            Providing essential diagnostic services, nutrition awareness, and maternal care to remote communities.
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
              <span className="badge-tag">Medical Outreach</span>
              <h2 className="section-title">Bringing Healthcare to the Doorstep</h2>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)', marginBottom: '1.2rem' }}>
                Access to primary healthcare remains a significant challenge in rural Alwar. APS organizes comprehensive
                health checkup camps within villages, ensuring vulnerable families receive timely diagnosis and treatment advice.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
                {[
                  'Organizing village-level general health checkup camps',
                  'Participating in government Pulse Polio immunization drives',
                  'Maternal and child nutrition awareness programs',
                  'Sanitation and hygiene (WASH) workshops for women'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={17} style={{ color: 'var(--color-terracotta)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: 'clamp(0.92rem, 1.8vw, 1rem)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/get-involved" className="btn btn-primary">Partner for a Medical Camp</Link>
            </div>

            <div>
              <div className="card" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)', background: 'var(--color-sand)' }}>
                <div style={{ position: 'relative', height: 'clamp(200px, 30vw, 300px)', overflow: 'hidden', borderRadius: '12px', marginBottom: '1.2rem', backgroundColor: '#1A2922' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80" 
                    alt="Health Checkup Camp" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
                  />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#FFFFFF', padding: '0.5rem', borderRadius: '50%', color: 'var(--color-terracotta)' }}>
                     <HeartPulse size={24} />
                  </div>
                </div>
                <h4 style={{ color: 'var(--color-primary-dark)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                  Preventive Care Focus
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-gray-dark)', lineHeight: 1.5 }}>
                  By catching diseases early and improving nutrition, we help families avoid catastrophic medical expenses that drive rural debt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
