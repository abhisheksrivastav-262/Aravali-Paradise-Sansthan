import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ORG_DETAILS } from '../data/organizationData';
import { User } from 'lucide-react';

export default function Team() {
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
            Our Leadership
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Governing Body
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            The dedicated Executive Committee leading Aravali Paradise Sansthan.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <SectionHeader
             badge="Executive Committee"
             title="Official Representatives"
             subtitle="Elected members responsible for the strategic direction and legal compliance of the NGO."
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
             
             {/* President */}
             <div className="card" style={{ padding: '2rem', textAlign: 'center', borderTop: '4px solid var(--color-primary)' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-sand-dark)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
                   <User size={36} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '0.2rem' }}>{ORG_DETAILS.leadership.president}</h3>
                <p style={{ color: 'var(--color-terracotta)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>President</p>
             </div>

             {/* Secretary */}
             <div className="card" style={{ padding: '2rem', textAlign: 'center', borderTop: '4px solid var(--color-saffron)', transform: 'translateY(-10px)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-sand-dark)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
                   <User size={36} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '0.2rem' }}>{ORG_DETAILS.leadership.secretary}</h3>
                <p style={{ color: 'var(--color-saffron)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Secretary & Chief Functionary</p>
                <a href={`mailto:${ORG_DETAILS.contact.email}`} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Contact Official</a>
             </div>

             {/* Treasurer */}
             <div className="card" style={{ padding: '2rem', textAlign: 'center', borderTop: '4px solid var(--color-primary)' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-sand-dark)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
                   <User size={36} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '0.2rem' }}>{ORG_DETAILS.leadership.treasurer}</h3>
                <p style={{ color: 'var(--color-terracotta)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Treasurer</p>
             </div>
             
          </div>
        </div>
      </section>
    </div>
  );
}
