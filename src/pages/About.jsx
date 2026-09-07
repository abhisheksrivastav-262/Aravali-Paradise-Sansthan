import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ORG_DETAILS } from '../data/organizationData';
import { CheckCircle2, Shield, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

/* Shared 2-col → 1-col grid */
const splitGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 'clamp(2rem, 4vw, 3.5rem)',
  alignItems: 'center',
};

export default function About() {
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
            Grassroots Story
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            About Aravali Paradise Sansthan
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            Empowering disadvantaged rural communities through education, healthcare, sustainable livelihoods, and participatory development in Alwar, Rajasthan.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={splitGrid}>
            {/* Text */}
            <div>
              <span className="badge-tag">Who We Are</span>
              <h2 className="section-title">Rooted in Grassroots Service Since 2008</h2>

              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)', marginBottom: '1.2rem' }}>
                <strong>Aravali Paradise Sansthan (APS)</strong> is a non-governmental organization registered in
                Alwar, Rajasthan (Reg No: 174/Alwar/2008-09, dated 24.11.2008). The organization operates from
                Alwar and has field interventions primarily across eastern Rajasthan.
              </p>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)', marginBottom: '1.2rem' }}>
                APS works through a dedicated team of <strong>8 full-time staff members</strong> and{' '}
                <strong>10 active volunteers</strong> committed to making a positive difference in disadvantaged people's lives.
              </p>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)', marginBottom: '1.5rem' }}>
                Our focus is to partner with vulnerable families and rural communities to build economic opportunity,
                strengthen local agriculture and natural resources, improve maternal and child nutrition, provide
                quality education, and foster micro-economic self-reliance.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-terracotta)', flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong>Community Partnership</strong>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-gray)' }}>Projects shaped with direct local participant ownership.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-terracotta)', flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong>Dignity & Equity</strong>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-gray)' }}>Preserving human dignity and building long-term confidence.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials card */}
            <div>
              <div className="card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', background: 'var(--color-sand)' }}>
                  <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: '12px', marginBottom: '1.5rem', backgroundColor: '#1A2922' }}>
                  <img
                    src="/assets/gallery/aps-gallery-25.jpeg"
                    alt="APS Community Engagement"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center top' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.8rem' }}>
                  Institutional Credentials
                </h3>
                <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--color-gray-dark)', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  <li><strong>Registration Date:</strong> 24.11.2008 (174/Alwar/2008-09)</li>
                  <li><strong>Middle School Reg:</strong> DEO/ALW/ORG/R/251</li>
                  <li><strong>Income Tax Status:</strong> 12AA Registered in Alwar</li>
                  <li><strong>PAN:</strong> {ORG_DETAILS.legal.pan}</li>
                  <li><strong>Banker:</strong> {ORG_DETAILS.legal.bankName}</li>
                  <li><strong>Secretary:</strong> {ORG_DETAILS.contact.contactPerson}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field Approach */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <SectionHeader
            badge="Our Field Approach"
            title="Grassroots Mobilization & Sustainable Partnership"
            subtitle="APS works side by side with village leaders, women groups, and youth to address core developmental needs."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Users size={30} />, title: 'Grassroots Mobilization', desc: 'Engaging directly with villagers in remote habitations, ensuring equal participation of women, youth, Dalit, and landless households.' },
              { icon: <Target size={30} />, title: 'Capacity Building', desc: 'Building skills, institutional strength, and financial literacy among Self-Help Groups and local village committees.' },
              { icon: <Shield size={30} />, title: 'State Collaboration', desc: 'Collaborating with government departments to bridge public schemes, government school surveys, and health drives.' },
            ].map((item, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem' }}>
                <div style={{ color: 'var(--color-terracotta)', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--color-gray)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
            Partner with APS in Rural Development
          </h2>
          <p style={{ maxWidth: '640px', margin: '0 auto 2rem', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
            Join hands with Aravali Paradise Sansthan to support grassroots education, healthcare, and sustainable livelihoods in Rajasthan.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-involved" className="btn btn-primary">Join As Volunteer</Link>
            <Link to="/contact" className="btn btn-white">Contact Registered Office</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
