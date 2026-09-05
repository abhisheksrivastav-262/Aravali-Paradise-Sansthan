import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ORG_DETAILS } from '../data/organizationData';
import { CheckCircle2, FileSpreadsheet } from 'lucide-react';

export default function Education() {
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
            Empowerment Through Learning
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Education & Learning Initiatives
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            Operating the APS Middle School, conducting school surveys, and promoting literacy across rural Rajasthan.
          </p>
        </div>
      </section>

      {/* APS Middle School */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
          }}>
            <div>
              <span className="badge-tag">School Education</span>
              <h2 className="section-title">APS Recognized Middle School</h2>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)', marginBottom: '1.2rem' }}>
                Aravali Paradise Sansthan operates a recognized Middle School in Alwar under official school registration
                number <strong>{ORG_DETAILS.legal.schoolRegistrationNumber}</strong>.
              </p>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)', marginBottom: '1.5rem' }}>
                The school provides quality primary and middle education to underprivileged children who might otherwise
                drop out due to economic hardships. The curriculum integrates local Rajasthani culture, arts, sports, and
                hygiene education.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {['Primary & Middle School Education', 'Technical & Health-Related Training', 'Certificate Distribution & Examinations'].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <CheckCircle2 size={17} style={{ color: 'var(--color-terracotta)', flexShrink: 0 }} />
                    <span style={{ fontWeight: 600, color: 'var(--color-primary-dark)', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)', background: 'var(--color-sand)' }}>
                <div style={{ position: 'relative', height: 'clamp(200px, 30vw, 280px)', overflow: 'hidden', borderRadius: '12px', marginBottom: '1.2rem', backgroundColor: '#1A2922' }}>
                  <img
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80"
                    alt="APS School Students"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                  />
                </div>
                <h4 style={{ color: 'var(--color-primary-dark)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                  School Reg: DEO/ALW/ORG/R/251
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-gray-dark)', lineHeight: 1.5 }}>
                  Middle school providing accessible learning and community parent meetings in Alwar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bharatpur Survey */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
          }}>
            <div className="card" style={{ padding: 'clamp(1.8rem, 3vw, 2.5rem)', background: '#FFFFFF', borderLeft: '6px solid var(--color-terracotta)' }}>
              <FileSpreadsheet size={38} style={{ color: 'var(--color-terracotta)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', color: 'var(--color-primary-dark)', marginBottom: '0.8rem' }}>
                Bharatpur Government School Survey
              </h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--color-gray-dark)', lineHeight: 1.6 }}>
                As highlighted in the official NGO profile, APS has undertaken a comprehensive government school basic
                survey in <strong>Bharatpur District</strong>.
              </p>
            </div>

            <div>
              <span className="badge-tag">Research & Policy Support</span>
              <h2 className="section-title">Government School Basic Survey Activity</h2>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)', marginBottom: '1.2rem' }}>
                Demonstrating program capability in data collection and situation assessment, APS conducted field
                surveying across rural government schools in Bharatpur District.
              </p>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)' }}>
                The survey captured baseline information on drinking water availability, sanitation facilities, classroom
                infrastructure, pupil-teacher ratios, and dropout patterns to support rural educational interventions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
