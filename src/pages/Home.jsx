import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ORG_DETAILS, VISION_MISSION, PROGRAMS, ALWAR_TEHSILS, BENEFICIARIES } from '../data/organizationData';
import SectionHeader from '../components/SectionHeader';
import StatCard from '../components/StatCard';
import ProgramCard from '../components/ProgramCard';
import { Users, BookOpen, Heart, ShieldCheck, MapPin, ArrowRight, CheckCircle2, Award, Briefcase, X, BadgeCheck } from 'lucide-react';

/* ── inline responsive style helpers ── */
const heroTitleStyle = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'clamp(2rem, 6vw, 3.6rem)',
  fontWeight: 800,
  lineHeight: 1.15,
  marginBottom: '1.2rem',
  color: '#FFFFFF',
  letterSpacing: '-0.02em',
};

const heroSubStyle = {
  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
  lineHeight: 1.6,
  color: 'rgba(255,255,255,0.88)',
  marginBottom: '2.5rem',
  maxWidth: '720px',
};

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div>
      {/* ════════════════════ HERO ════════════════════ */}
      <section style={{
        position: 'relative',
        minHeight: 'clamp(520px, 85vh, 900px)',
        background: 'linear-gradient(180deg, rgba(20,53,39,0.87) 0%, rgba(13,35,25,0.93) 100%), url("/assets/gallery/aps-gallery-01.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(3rem, 8vh, 5rem) 0',
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            {/* Registration badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'rgba(212,154,53,0.22)', border: '1px solid rgba(212,154,53,0.5)',
              padding: '0.4rem 1rem', borderRadius: '50px',
              color: 'var(--color-saffron-light)', fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(0.72rem, 1.5vw, 0.85rem)', fontWeight: 600,
              letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '1.5rem',
              flexWrap: 'wrap',
            }}>
              <Award size={15} />
              <span>Registered Grassroots NGO • Alwar, Rajasthan (Est. 2008)</span>
            </div>

            <h1 style={heroTitleStyle}>
              Building Confidence. <br />
              <span style={{ color: 'var(--color-saffron)' }}>Creating Opportunity.</span>{' '}
              <br />Empowering Communities.
            </h1>

            <p style={heroSubStyle}>
              Aravali Paradise Sansthan (APS) works at the grassroots level in Alwar and eastern Rajasthan to support
              disadvantaged communities through quality education, healthcare checkup camps, women empowerment, youth
              vocational skills, and sustainable natural resource conservation.
            </p>

            {/* Hero CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link to="/programs" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                Explore Our Work <ArrowRight size={17} />
              </Link>
              <Link to="/get-involved" className="btn btn-white" style={{ padding: '1rem 1.8rem' }}>
                Get Involved
              </Link>
            </div>

            {/* Compliance status badges — Registered NGO | CSR | 12A | 80G */}
            <div style={{
              display: 'flex', gap: '0.6rem', flexWrap: 'wrap',
              marginBottom: '1.2rem', maxWidth: '100%',
            }}>
              {[
                'Registered NGO',
                'CSR Registered',
                '12A Registered',
                '80G Registered',
              ].map(label => (
                <span key={label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(212,154,53,0.45)',
                  padding: '0.35rem 0.85rem', borderRadius: '50px',
                  color: 'var(--color-saffron-light)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(0.7rem, 1.6vw, 0.8rem)', fontWeight: 600,
                  letterSpacing: '0.4px', whiteSpace: 'nowrap',
                }}>
                  <BadgeCheck size={14} style={{ color: 'var(--color-saffron)', flexShrink: 0 }} />
                  {label}
                </span>
              ))}
            </div>

            {/* Registration strip — exact known values only, no guessed numbers */}
            <div style={{
              display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
              borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem',
              maxWidth: '100%',
            }}>
              {[
                { label: 'Registration No.', value: ORG_DETAILS.legal.registrationNumber },
                { label: '12A', value: ORG_DETAILS.legal.twelveA || ORG_DETAILS.legal.incomeTaxRegistration },
                { label: '80G', value: ORG_DETAILS.legal.eightyG || 'Registered' },
                { label: 'CSR No.', value: ORG_DETAILS.legal.csrNumber || 'Registered' },
              ].map(item => (
                <div key={item.label} style={{ minWidth: 0 }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</span>
                  <strong style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)', color: 'var(--color-saffron)', wordBreak: 'break-word' }}>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ IMPACT STATS ════════════════════ */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <SectionHeader
            badge="Organization at a Glance"
            title="Grassroots Foundation Built on Verified Integrity"
            subtitle="Grounding our work on factual, transparent operational figures locked to our official organization profile."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <StatCard number={ORG_DETAILS.stats.fullTimeStaff} label="Full-Time Staff" icon={Users} note="Dedicated field & admin personnel" />
            <StatCard number={ORG_DETAILS.stats.volunteers} label="Active Volunteers" icon={Heart} note="Grassroots community advocates" />
            <StatCard number={ORG_DETAILS.stats.tehsilsCount} label="Listed Tehsils" icon={MapPin} note="Operational footprint in Alwar District" />
            <StatCard number={ORG_DETAILS.stats.establishedYear} label="Established Year" icon={ShieldCheck} note="Reg. Date: 24.11.2008" />
          </div>
        </div>
      </section>

      {/* ════════════════════ VISION & MISSION ════════════════════ */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Vision */}
            <div className="card" style={{
              padding: 'clamp(1.8rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.2rem)',
              background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))',
              color: '#FFFFFF', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '100px', height: '100px', borderRadius: '50%',
                background: 'rgba(212,154,53,0.1)',
              }} />
              <span className="badge-tag" style={{ background: 'rgba(212,154,53,0.2)', color: 'var(--color-saffron)' }}>Our Vision</span>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', color: '#FFFFFF', margin: '0.8rem 0 1rem' }}>
                Building Confidence & Prosperity
              </h3>
              <blockquote className="editorial-font" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--color-sand)' }}>
                "{VISION_MISSION.vision}"
              </blockquote>
            </div>

            {/* Mission */}
            <div className="card" style={{
              padding: 'clamp(1.8rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.2rem)',
              background: 'var(--color-white)', borderLeft: '5px solid var(--color-terracotta)',
            }}>
              <span className="badge-tag">Our Mission</span>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', color: 'var(--color-primary-dark)', margin: '0.8rem 0 1rem' }}>
                Maximizing Potential & Dignity
              </h3>
              <blockquote className="editorial-font" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--color-gray-dark)' }}>
                "{VISION_MISSION.mission}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ PROGRAM CARDS ════════════════════ */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <SectionHeader
            badge="Core Initiatives"
            title="Empowering Communities Across Key Social Sectors"
            subtitle="From operating our Middle School to conducting health checkups and sustainable farming, explore how APS works on the ground."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {PROGRAMS.slice(0, 6).map(prog => (
              <ProgramCard key={prog.id} program={prog} onLearnMore={setSelectedProgram} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/programs" className="btn btn-secondary">
              View All 11+ Programs <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ BENEFICIARIES ════════════════════ */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <SectionHeader
            badge="Whom We Serve"
            title="Focused Support for Disadvantaged Sections"
            subtitle="Working alongside vulnerable rural, slum, tribal, nomadic, Dalit, and landless communities."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {BENEFICIARIES.map((ben, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  backgroundColor: 'rgba(168,74,41,0.1)', color: 'var(--color-terracotta)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                }}>
                  {idx === 0 && <Users size={26} />}
                  {idx === 1 && <BookOpen size={26} />}
                  {idx === 2 && <Briefcase size={26} />}
                  {idx === 3 && <Heart size={26} />}
                </div>
                <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', marginBottom: '0.5rem' }}>{ben.group}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)', lineHeight: 1.6 }}>{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ ALWAR SPOTLIGHT ════════════════════ */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
            {/* Left text */}
            <div>
              <span className="badge-tag" style={{ background: 'rgba(212,154,53,0.2)', color: 'var(--color-saffron)' }}>
                Field Geography
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', color: '#FFFFFF', margin: '0.8rem 0 1rem' }}>
                Deeply Rooted in Alwar & Eastern Rajasthan
              </h2>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                APS operates from its registered head office in Alwar city, executing programs across 12 listed tehsils.
                Our committed volunteers and field staff work directly inside village habitations.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                gap: '0.6rem', marginBottom: '2rem',
              }}>
                {ALWAR_TEHSILS.slice(0, 6).map((teh, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--color-saffron)', flexShrink: 0 }} />
                    <span>{teh.name}</span>
                  </div>
                ))}
              </div>
              <Link to="/operational-area" className="btn btn-primary">
                Explore 12 Tehsils Map <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right info card */}
            <div className="card" style={{
              padding: '2rem',
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(255,255,255,0.1)',
            }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '0.8rem' }}>
                Registered Head Office
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, marginBottom: '0.8rem' }}>
                <strong>Aravali Paradise Sansthan (APS)</strong><br />
                {ORG_DETAILS.registeredOffice.fullAddress}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-saffron)', marginBottom: '0.4rem' }}>
                <strong>Secretary:</strong> {ORG_DETAILS.contact.contactPerson}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.82)' }}>
                <strong>Phone:</strong> {ORG_DETAILS.contact.phone1}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.82)', marginTop: '0.2rem' }}>
                {ORG_DETAILS.contact.phone2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ PROGRAM MODAL ════════════════════ */}
      {selectedProgram && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(6px)',
            zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem', overflowY: 'auto',
          }}
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="card animate-fade-in"
            style={{
              maxWidth: '680px', width: '100%', maxHeight: '90vh',
              overflowY: 'auto', padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              position: 'relative', borderRadius: '20px',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProgram(null)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-dark)', padding: '0.4rem', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}
            >
              <X size={22} />
            </button>
            <span className="badge-tag">{selectedProgram.category}</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: 'var(--color-primary-dark)', margin: '0.6rem 0 1rem' }}>
              {selectedProgram.title}
            </h2>
            <div style={{ position: 'relative', borderRadius: '12px', marginBottom: '1.2rem', backgroundColor: '#1A2922', overflow: 'hidden' }}>
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', maxHeight: '50vh', objectFit: 'contain', display: 'block' }}
              />
            </div>
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.02rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)' }}>
              {selectedProgram.fullDesc}
            </p>
            <div style={{ marginTop: '1.8rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button className="btn btn-outline" onClick={() => setSelectedProgram(null)}>Close</button>
              <Link to="/donate" className="btn btn-primary">Support This Initiative</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
