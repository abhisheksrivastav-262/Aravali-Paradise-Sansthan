import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { BENEFICIARIES } from '../data/organizationData';
import { Users, BookOpen, Briefcase, Heart } from 'lucide-react';

export default function Beneficiaries() {
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
            Whom We Serve
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Target Beneficiaries
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            APS directs its resources toward the most vulnerable and marginalized sections of rural society.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <SectionHeader
             badge="Our Focus Groups"
             title="Supporting Those Who Need It Most"
             subtitle="Ensuring equity and inclusivity in all our community interventions."
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {BENEFICIARIES.map((ben, idx) => (
              <div key={idx} className="card" style={{ padding: 'clamp(1.8rem, 3vw, 2.5rem)', textAlign: 'center', borderTop: `4px solid ${idx % 2 === 0 ? 'var(--color-terracotta)' : 'var(--color-primary)'}` }}>
                <div style={{ 
                  width: '64px', height: '64px', borderRadius: '50%', 
                  background: idx % 2 === 0 ? 'rgba(168,74,41,0.1)' : 'rgba(20,53,39,0.1)', 
                  color: idx % 2 === 0 ? 'var(--color-terracotta)' : 'var(--color-primary)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' 
                }}>
                  {idx === 0 && <Users size={30} />}
                  {idx === 1 && <BookOpen size={30} />}
                  {idx === 2 && <Briefcase size={30} />}
                  {idx === 3 && <Heart size={30} />}
                </div>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)', color: 'var(--color-primary-dark)', marginBottom: '0.6rem' }}>
                   {ben.group}
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--color-gray-dark)', lineHeight: 1.6 }}>
                   {ben.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
