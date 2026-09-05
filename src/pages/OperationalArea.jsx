import React, { useState } from 'react';
import { ALWAR_TEHSILS, ORG_DETAILS } from '../data/organizationData';
import SectionHeader from '../components/SectionHeader';
import { MapPin, Compass } from 'lucide-react';

export default function OperationalArea() {
  const [selectedTehsil, setSelectedTehsil] = useState(ALWAR_TEHSILS[0]);

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
            Rajasthan Footprint
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Operational Area – Alwar
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            Headquartered in Alwar, Aravali Paradise Sansthan delivers field development initiatives across eastern Rajasthan.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          {/* Top info block — collapses to 1 col on mobile */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '4rem',
            alignItems: 'start',
          }}>
            {/* Left text */}
            <div>
              <span className="badge-tag">Alwar Context</span>
              <h2 className="section-title">Head Office & Regional Connection</h2>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)', marginBottom: '1.2rem' }}>
                Alwar district is situated in the north-eastern part of Rajasthan, surrounded by the scenic Aravali hill range.
                The district presents a rich combination of rural agricultural communities, tribal hamlets, and development opportunities.
              </p>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: 'var(--color-gray-dark)', marginBottom: '1.5rem' }}>
                APS's registered head office is located in Vivekanand Nagar, Sector No. 4, Alwar city. From this central
                location, project coordinators and volunteers travel to remote villages to execute educational surveys, health
                checkup camps, and women SHG workshops.
              </p>
              <div className="card" style={{ padding: '1.5rem', background: 'var(--color-sand)', borderLeft: '4px solid var(--color-terracotta)' }}>
                <h4 style={{ color: 'var(--color-primary-dark)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                  Registered Office Address
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-gray-dark)', lineHeight: 1.5 }}>
                  {ORG_DETAILS.registeredOffice.fullAddress}
                </p>
              </div>
            </div>

            {/* Right info card */}
            <div className="card" style={{ padding: '2rem', background: 'var(--color-primary-dark)', color: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem', color: 'var(--color-saffron)', flexWrap: 'wrap' }}>
                <Compass size={26} />
                <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', margin: 0 }}>Tehsil Map Overview</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
                Click on any tehsil card below to view specific community work focus.
              </p>
              {selectedTehsil && (
                <div style={{
                  padding: '1.5rem', background: 'rgba(255,255,255,0.08)',
                  borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-saffron)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>
                    Selected Tehsil
                  </span>
                  <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    {selectedTehsil.name} Tehsil
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                    {selectedTehsil.desc}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 12 Tehsils Grid */}
          <SectionHeader
            badge="District Administration"
            title="The 12 Listed Tehsils of Alwar"
            subtitle="Click to inspect operational highlights across all tehsils."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.2rem' }}>
            {ALWAR_TEHSILS.map((tehsil, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedTehsil(tehsil)}
                className="card"
                style={{
                  padding: '1.4rem',
                  cursor: 'pointer',
                  borderColor: selectedTehsil?.name === tehsil.name ? 'var(--color-terracotta)' : 'var(--color-sand-dark)',
                  backgroundColor: selectedTehsil?.name === tehsil.name ? '#FFFFFF' : 'var(--color-sand)',
                  boxShadow: selectedTehsil?.name === tehsil.name ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'all 0.2s ease',
                  userSelect: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={16} style={{ color: 'var(--color-terracotta)', flexShrink: 0 }} />
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', margin: 0 }}>{tehsil.name}</h3>
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-gray)' }}>#{idx + 1}</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--color-gray-dark)', lineHeight: 1.5 }}>{tehsil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
