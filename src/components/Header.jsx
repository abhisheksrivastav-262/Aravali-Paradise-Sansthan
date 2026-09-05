import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ORG_DETAILS } from '../data/organizationData';
import { Phone, Mail, MapPin, Menu, X, Heart, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeMobileDrawer = () => setMobileDrawerOpen(false);

  return (
    <>
      {/* Topbar — hidden on mobile via CSS */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-info">
            <span className="topbar-item">
              <MapPin size={13} />
              <span>{ORG_DETAILS.registeredOffice.city}, {ORG_DETAILS.registeredOffice.state} (Reg: {ORG_DETAILS.legal.registrationNumber})</span>
            </span>
            <span className="topbar-item">
              <Phone size={13} />
              <a href={`tel:${ORG_DETAILS.contact.phone1}`}>{ORG_DETAILS.contact.phone1}</a>
            </span>
            <span className="topbar-item">
              <Mail size={13} />
              <a href={`mailto:${ORG_DETAILS.contact.email}`}>{ORG_DETAILS.contact.email}</a>
            </span>
          </div>
          <div style={{
            fontSize: '0.78rem',
            background: 'rgba(212,154,53,0.2)',
            padding: '2px 8px',
            borderRadius: '4px',
            color: 'var(--color-saffron)',
            fontWeight: 600,
            whiteSpace: 'nowrap'
          }}>
            12AA Registered NGO
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container header-container">
          {/* Logo */}
          <Link to="/" className="brand-logo">
            <div className="logo-badge">APS</div>
            <div className="brand-text">
              <h1>Aravali Paradise Sansthan</h1>
              <p>Grassroots Social Development • Alwar</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main Navigation" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ul className="nav-menu">
              <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
              <li><Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link></li>
              <li><Link to="/vision-mission" className={`nav-link ${isActive('/vision-mission') ? 'active' : ''}`}>Vision</Link></li>

              {/* Work Dropdown */}
              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link to="/programs" className={`nav-link ${location.pathname.startsWith('/programs') ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  Our Work <ChevronDown size={13} />
                </Link>
                {dropdownOpen && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0,
                    width: '220px', background: '#FFFFFF',
                    boxShadow: 'var(--shadow-md)', borderRadius: '12px',
                    padding: '0.6rem 0', border: '1px solid var(--color-sand-dark)', zIndex: 1100
                  }}>
                    {[
                      { path: '/programs', label: 'All Programs' },
                      { path: '/education', label: 'Education & Schools' },
                      { path: '/health', label: 'Health & Wellness' },
                      { path: '/women-youth', label: 'Women & Youth' },
                      { path: '/environment', label: 'Environment & Water' },
                      { path: '/livelihood', label: 'Livelihood & Skills' },
                    ].map(item => (
                      <Link key={item.path} to={item.path} style={{
                        display: 'block', padding: '0.5rem 1.2rem',
                        fontSize: '0.88rem', color: 'var(--color-dark)',
                        fontWeight: item.path === '/programs' ? 700 : 500
                      }}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li><Link to="/objectives" className={`nav-link ${isActive('/objectives') ? 'active' : ''}`}>Objectives</Link></li>
              <li><Link to="/governance" className={`nav-link ${isActive('/governance') ? 'active' : ''}`}>Governance</Link></li>
              <li><Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>Gallery</Link></li>
              <li><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link></li>
            </ul>
          </nav>

          {/* Right Side CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>

            <button
              className="mobile-toggle"
              onClick={() => setMobileDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileDrawerOpen && (
        <div className="drawer-backdrop" onClick={closeMobileDrawer} aria-hidden="true" />
      )}

      {/* Mobile Drawer */}
      <nav className={`mobile-drawer ${mobileDrawerOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <div className="brand-logo" style={{ pointerEvents: 'none' }}>
            <div className="logo-badge" style={{ width: '36px', height: '36px', minWidth: '36px', fontSize: '0.9rem' }}>APS</div>
            <div className="brand-text">
              <h1 style={{ fontSize: '0.95rem' }}>Aravali Paradise Sansthan</h1>
            </div>
          </div>
          <button className="drawer-close-btn" onClick={closeMobileDrawer} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About APS' },
            { path: '/vision-mission', label: 'Vision & Mission' },
            { path: '/programs', label: 'All Programs' },
            { path: '/education', label: '  ↳ Education & Schools' },
            { path: '/health', label: '  ↳ Health & Wellness' },
            { path: '/women-youth', label: '  ↳ Women & Youth' },
            { path: '/environment', label: '  ↳ Environment & Water' },
            { path: '/livelihood', label: '  ↳ Livelihood & Skills' },
            { path: '/objectives', label: 'Objectives & Strategies' },
            { path: '/governance', label: 'Governance & Transparency' },
            { path: '/team', label: 'Governing Body' },
            { path: '/operational-area', label: 'Alwar Operational Area' },
            { path: '/expertise', label: 'Areas of Expertise' },
            { path: '/beneficiaries', label: 'Beneficiaries' },
            { path: '/gallery', label: 'Photo Gallery' },
            { path: '/get-involved', label: 'Get Involved / Volunteer' },
            { path: '/contact', label: 'Contact Us' },
          ].map(item => (
            <li className="mobile-nav-item" key={item.path}>
              <Link
                to={item.path}
                className="mobile-nav-link"
                onClick={closeMobileDrawer}
                style={{ fontSize: item.label.startsWith('  ↳') ? '0.88rem' : '1rem', color: item.label.startsWith('  ↳') ? 'var(--color-gray-dark)' : 'var(--color-primary-dark)' }}
              >
                {item.label}
              </Link>
            </li>
          ))}

        </ul>
      </nav>
    </>
  );
}
