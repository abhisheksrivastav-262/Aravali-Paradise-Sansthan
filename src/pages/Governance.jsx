import React from 'react';
import { FINANCIAL_GOVERNANCE, ORG_DETAILS } from '../data/organizationData';
import SectionHeader from '../components/SectionHeader';
import { ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export default function Governance() {
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
            Institutional Integrity
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Governance & Transparency
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            Robust administrative frameworks, yearly independent chartered audits, and transparent stakeholder participation.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Governance Card */}
            <div className="card" style={{ padding: 'clamp(1.8rem, 3vw, 2.5rem)', borderTop: '6px solid var(--color-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.4rem', flexWrap: 'wrap' }}>
                <div style={{
                  width: '50px', height: '50px', minWidth: '50px', borderRadius: '12px',
                  background: 'rgba(20,53,39,0.1)', color: 'var(--color-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <ShieldCheck size={26} />
                </div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', color: 'var(--color-primary-dark)', margin: 0 }}>
                  Organizational Governance
                </h2>
              </div>
              <p style={{ fontSize: '0.97rem', color: 'var(--color-gray-dark)', lineHeight: 1.6, marginBottom: '1.4rem' }}>
                APS operates under an Executive Committee elected by the General Body. The Secretary leads daily administration and program operations.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {FINANCIAL_GOVERNANCE.governancePoints.map((pt, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={17} style={{ color: 'var(--color-terracotta)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.93rem', color: 'var(--color-dark)', lineHeight: 1.5 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Management Card */}
            <div className="card" style={{ padding: 'clamp(1.8rem, 3vw, 2.5rem)', borderTop: '6px solid var(--color-terracotta)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.4rem', flexWrap: 'wrap' }}>
                <div style={{
                  width: '50px', height: '50px', minWidth: '50px', borderRadius: '12px',
                  background: 'rgba(168,74,41,0.1)', color: 'var(--color-terracotta)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <FileCheck size={26} />
                </div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', color: 'var(--color-primary-dark)', margin: 0 }}>
                  Financial Management
                </h2>
              </div>
              <p style={{ fontSize: '0.97rem', color: 'var(--color-gray-dark)', lineHeight: 1.6, marginBottom: '1.4rem' }}>
                Financial accounts are strictly maintained by a qualified accountant and audited annually by independent chartered accountants.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {FINANCIAL_GOVERNANCE.financialManagementPoints.map((pt, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={17} style={{ color: 'var(--color-terracotta)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.93rem', color: 'var(--color-dark)', lineHeight: 1.5 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human Resources */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <SectionHeader
            badge="Human Capital"
            title="Human Resources & Staff Welfare"
            subtitle="Operational team structure and professional staff development guidelines."
          />
          <div className="card" style={{ padding: 'clamp(1.8rem, 3vw, 3rem)', maxWidth: '840px', margin: '0 auto', background: '#FFFFFF' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--color-sand)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--color-terracotta)', fontWeight: 800 }}>8</h3>
                <p style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>Full-Time Dedicated Staff</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--color-sand)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--color-terracotta)', fontWeight: 800 }}>10</h3>
                <p style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>Committed Field Volunteers</p>
              </div>
            </div>
            <p style={{ fontSize: 'clamp(0.92rem, 2vw, 1rem)', color: 'var(--color-gray-dark)', lineHeight: 1.7 }}>
              APS follows structured human-resource management principles. Staff members operate under defined job descriptions, receive regular capacity training, participate in annual performance evaluations, and work under supportive supervisory practices to maintain high morale and project quality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
