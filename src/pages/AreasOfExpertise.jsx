import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ORG_DETAILS } from '../data/organizationData';
import { Star } from 'lucide-react';

export default function AreasOfExpertise() {
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
            Domain Competence
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Areas of Expertise
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            The specialized sectors where Aravali Paradise Sansthan delivers deep impact.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <SectionHeader
             badge="Sectors of Focus"
             title="Our Core Institutional Competencies"
             subtitle="Drawing from years of grassroots operational experience in Alwar."
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
            {ORG_DETAILS.areasOfExpertise.map((area, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                 <div style={{ width: '40px', height: '40px', minWidth: '40px', borderRadius: '50%', background: 'rgba(212,154,53,0.15)', color: 'var(--color-saffron)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Star size={20} />
                 </div>
                 <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', margin: 0 }}>
                    {area}
                 </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
