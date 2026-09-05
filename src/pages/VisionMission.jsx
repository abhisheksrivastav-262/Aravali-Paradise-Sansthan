import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { VISION_MISSION } from '../data/organizationData';
import { Compass, Target, Navigation } from 'lucide-react';

export default function VisionMission() {
  return (
    <div>
      {/* Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))',
        color: '#FFFFFF',
        padding: 'clamp(2.5rem, 6vw, 4rem) 0 clamp(2rem, 4vw, 3rem)',
        textAlign: 'center',
      }}>
        <div className="container">
          <span className="badge-tag" style={{ background: 'rgba(212,154,53,0.2)', color: 'var(--color-saffron)' }}>
            Our North Star
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Vision & Mission
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            The core philosophy driving Aravali Paradise Sansthan's community interventions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            {/* Vision */}
            <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', background: '#FFFFFF', textAlign: 'center', borderTop: '6px solid var(--color-saffron)' }}>
              <div style={{
                width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(212,154,53,0.1)', color: 'var(--color-saffron)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem'
              }}>
                <Compass size={34} />
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>
                Our Vision
              </h2>
              <blockquote className="editorial-font" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', fontStyle: 'italic', lineHeight: 1.8, color: 'var(--color-gray-dark)' }}>
                "{VISION_MISSION.vision}"
              </blockquote>
              <p style={{ marginTop: '1.5rem', color: 'var(--color-gray)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                A future where disadvantaged communities possess the confidence, education, and resources to build their own prosperity.
              </p>
            </div>

            {/* Mission */}
            <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', background: '#FFFFFF', textAlign: 'center', borderTop: '6px solid var(--color-terracotta)' }}>
              <div style={{
                width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(168,74,41,0.1)', color: 'var(--color-terracotta)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem'
              }}>
                <Target size={34} />
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>
                Our Mission
              </h2>
              <blockquote className="editorial-font" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', fontStyle: 'italic', lineHeight: 1.8, color: 'var(--color-gray-dark)' }}>
                "{VISION_MISSION.mission}"
              </blockquote>
              <p style={{ marginTop: '1.5rem', color: 'var(--color-gray)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Maximizing individual and collective potential while firmly protecting human dignity and ensuring equitable opportunities.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
           <SectionHeader 
            badge="Guiding Principles"
            title="Core Values We Stand By"
            subtitle="How we conduct our work within rural communities."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
             {[
               { title: 'Dignity', desc: 'Respecting the inherent worth of every individual we serve.' },
               { title: 'Equity', desc: 'Ensuring fair access to opportunities for marginalized groups.' },
               { title: 'Transparency', desc: 'Maintaining clear, honest operations and financial integrity.' },
               { title: 'Sustainability', desc: 'Building long-term capacity rather than short-term relief.' }
             ].map((val, idx) => (
               <div key={idx} style={{ padding: '1.5rem', background: 'var(--color-sand)', borderRadius: '16px' }}>
                 <Navigation size={24} style={{ color: 'var(--color-terracotta)', marginBottom: '1rem' }} />
                 <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>{val.title}</h4>
                 <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)', lineHeight: 1.5 }}>{val.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
