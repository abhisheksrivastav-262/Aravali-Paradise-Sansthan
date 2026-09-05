import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { ORG_DETAILS } from '../data/organizationData';
import { Heart, ShieldCheck, Lock, CheckCircle2, Building, Mail } from 'lucide-react';

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedSector, setSelectedSector] = useState('Education & Schooling');

  const amounts = ['500', '1000', '2500', '5000'];
  const getEffectiveAmount = () => (selectedAmount === 'custom' ? customAmount || '0' : selectedAmount);

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
            Responsible Philanthropy
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Support Change at the Grassroots
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            Empower rural education, health checkup camps, women self-help groups, and natural resource conservation in Alwar.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          {/* Main grid: donation form + sidebar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
          }}>
            {/* Donation selector */}
            <div className="card" style={{ padding: 'clamp(1.8rem, 3vw, 3rem)', background: '#FFFFFF' }}>
              <SectionHeader
                badge="Select Support Contribution"
                title="Choose Donation Amount"
                subtitle="Your contributions directly power community development in Alwar."
                align="left"
              />

              {/* Amount buttons — 2 per row on all screens */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem', marginBottom: '1.4rem' }}>
                {amounts.map(amt => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                    style={{
                      padding: '1.1rem 0.5rem',
                      borderRadius: '12px',
                      border: selectedAmount === amt ? '2px solid var(--color-terracotta)' : '1.5px solid var(--color-sand-dark)',
                      backgroundColor: selectedAmount === amt ? 'rgba(168,74,41,0.07)' : 'var(--color-sand)',
                      color: selectedAmount === amt ? 'var(--color-terracotta)' : 'var(--color-primary-dark)',
                      fontFamily: 'var(--font-heading)', fontWeight: 700,
                      fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                      cursor: 'pointer', transition: 'all 0.2s ease',
                      minHeight: '58px',
                    }}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>

              <div className="form-group">
                <label className="form-label">Or Enter Custom Amount (₹)</label>
                <input
                  type="number" placeholder="e.g. 10000"
                  className="form-input" value={customAmount}
                  onChange={e => { setCustomAmount(e.target.value); setSelectedAmount('custom'); }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Program Sector</label>
                <select className="form-select" value={selectedSector} onChange={e => setSelectedSector(e.target.value)}>
                  <option value="Education & Schooling">APS Middle School & Education</option>
                  <option value="Health Camps">Village Health Checkup Camps & Pulse Polio</option>
                  <option value="Women SHGs">Women Empowerment & Self-Help Groups</option>
                  <option value="Youth Skills">Youth Vocational Skill Training</option>
                  <option value="Environment">Sustainable Agriculture & Environment</option>
                  <option value="General Fund">Where Needed Most (General Fund)</option>
                </select>
              </div>

              <div style={{
                background: 'var(--color-sand)', padding: '1.2rem', borderRadius: '12px',
                marginBottom: '1.8rem', display: 'flex',
                alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: '0.8rem',
              }}>
                <div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-gray)', display: 'block' }}>Selected Support:</span>
                  <div style={{ fontSize: 'clamp(1.4rem, 4vw, 1.6rem)', fontWeight: 800, color: 'var(--color-terracotta)', fontFamily: 'var(--font-heading)' }}>
                    ₹{getEffectiveAmount()} INR
                  </div>
                </div>
                <div style={{
                  fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 600,
                  background: 'rgba(20,53,39,0.1)', padding: '0.4rem 0.8rem',
                  borderRadius: '6px', maxWidth: '160px', wordBreak: 'break-word',
                }}>
                  {selectedSector}
                </div>
              </div>

              <button
                onClick={() => alert(`Thank you for your pledge of ₹${getEffectiveAmount()} toward ${selectedSector}. Please use the bank transfer details on the right.`)}
                className="btn btn-primary"
                style={{ width: '100%', padding: '1rem', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}
              >
                <Lock size={18} /> Proceed to Secure Donation
              </button>
            </div>

            {/* Sidebar: tax badge + bank details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {/* Tax Status */}
              <div className="card" style={{ padding: 'clamp(1.5rem, 2.5vw, 2rem)', background: 'var(--color-primary-dark)', color: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <ShieldCheck size={26} style={{ color: 'var(--color-saffron)', flexShrink: 0 }} />
                  <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', margin: 0 }}>Tax Registration Status</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  Aravali Paradise Sansthan is registered under Income Tax Section 12AA in Alwar, Rajasthan.
                </p>
                <ul style={{ listStyle: 'none', fontSize: '0.86rem', color: 'rgba(255,255,255,0.8)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>IT Registration:</strong> {ORG_DETAILS.legal.incomeTaxRegistration}</li>
                  <li><strong>PAN:</strong> {ORG_DETAILS.legal.pan}</li>
                  <li><strong>Registration Date:</strong> 24.11.2008</li>
                </ul>
              </div>

              {/* Bank Details */}
              <div className="card" style={{ padding: 'clamp(1.5rem, 2.5vw, 2rem)', background: '#FFFFFF', borderLeft: '6px solid var(--color-terracotta)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <Building size={24} style={{ color: 'var(--color-terracotta)', flexShrink: 0 }} />
                  <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', color: 'var(--color-primary-dark)', margin: 0 }}>Direct Bank Transfer</h3>
                </div>
                <div style={{ background: 'var(--color-sand)', padding: '1.1rem', borderRadius: '10px', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' }}>
                  <div><strong>Account Name:</strong> Aravali Paradise Sansthan</div>
                  <div><strong>Bank Name:</strong> {ORG_DETAILS.legal.bankName}</div>
                  <div><strong>Branch:</strong> Alwar, Rajasthan</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-terracotta)', fontWeight: 600, marginTop: '0.4rem', background: 'rgba(168,74,41,0.08)', padding: '0.4rem 0.7rem', borderRadius: '6px' }}>
                    * Full account number provided upon administrative contact for security.
                  </div>
                </div>
                <a
                  href={`mailto:${ORG_DETAILS.contact.email}?subject=Bank Account Details Request for Donation`}
                  className="btn btn-outline"
                  style={{ width: '100%', fontSize: '0.86rem', padding: '0.7rem', justifyContent: 'center', display: 'flex' }}
                >
                  <Mail size={15} /> Request Bank Details via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
