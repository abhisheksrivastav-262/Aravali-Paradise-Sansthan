import React from 'react';
import { Link } from 'react-router-dom';
import { ORG_DETAILS } from '../data/organizationData';
import { MapPin, Phone, Mail, Heart, ShieldCheck, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: About Organization */}
          <div className="footer-col">
            <div className="brand-logo" style={{ marginBottom: '1.2rem' }}>
              <div className="logo-badge" style={{ background: 'var(--color-saffron)' }}>APS</div>
              <div className="brand-text">
                <h2 style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>Aravali Paradise Sansthan</h2>
                <p style={{ color: 'var(--color-saffron-light)' }}>Social Development Organization</p>
              </div>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
              A registered grassroots NGO dedicated to empowering disadvantaged communities across Alwar and eastern Rajasthan through education, healthcare, sustainable livelihoods, women development, and natural resource conservation.
            </p>
            <div className="reg-badge-list">
              <div className="reg-badge-item">
                <strong>Reg No:</strong> {ORG_DETAILS.legal.registrationNumber} (24.11.2008)
              </div>
              <div className="reg-badge-item">
                <strong>IT Registration:</strong> {ORG_DETAILS.legal.incomeTaxRegistration} • PAN: {ORG_DETAILS.legal.pan}
              </div>
              <div className="reg-badge-item">
                <strong>Middle School Reg:</strong> {ORG_DETAILS.legal.schoolRegistrationNumber}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About APS</Link></li>
              <li><Link to="/vision-mission">Vision & Mission</Link></li>
              <li><Link to="/objectives">Objectives & Strategies</Link></li>
              <li><Link to="/governance">Governance & Transparency</Link></li>
              <li><Link to="/team">Governing Body</Link></li>
              <li><Link to="/operational-area">Alwar Field Area (12 Tehsils)</Link></li>
              <li><Link to="/gallery">Photo Gallery</Link></li>
              <li><Link to="/get-involved">Get Involved / Volunteer</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Programs */}
          <div className="footer-col">
            <h3>Our Initiatives</h3>
            <ul className="footer-links">
              <li><Link to="/education">APS Middle School</Link></li>
              <li><Link to="/education">Govt School Survey (Bharatpur)</Link></li>
              <li><Link to="/health">Health Checkup Camps</Link></li>
              <li><Link to="/health">Pulse Polio Immunization</Link></li>
              <li><Link to="/women-youth">Women SHG Empowerment</Link></li>
              <li><Link to="/women-youth">Youth Skill Development</Link></li>
              <li><Link to="/environment">Sustainable Agriculture</Link></li>
              <li><Link to="/environment">Natural Resource Conservation</Link></li>
            </ul>
          </div>

          {/* Col 4: Registered Office & Contact */}
          <div className="footer-col">
            <h3>Registered Office</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-saffron)', flexShrink: 0, marginTop: '3px' }} />
                <span>{ORG_DETAILS.registeredOffice.fullAddress}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--color-saffron)' }} />
                <span>{ORG_DETAILS.contact.phone1} / {ORG_DETAILS.contact.phone2}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--color-saffron)' }} />
                <span>{ORG_DETAILS.contact.email}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-saffron)' }} />
                <span>Contact Person: {ORG_DETAILS.contact.contactPerson} ({ORG_DETAILS.contact.designation})</span>
              </div>

              <div style={{ marginTop: '0.8rem' }}>
                <Link to="/donate" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', width: '100%' }}>
                  <Heart size={14} fill="currentColor" /> Support Our Grassroots Work
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} <strong>Aravali Paradise Sansthan (APS)</strong>. All Rights Reserved. 
            Registered under Rajasthan Societies Registration Act.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/governance" style={{ color: 'rgba(255,255,255,0.6)' }}>Transparency Policy</Link>
            <Link to="/contact" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
