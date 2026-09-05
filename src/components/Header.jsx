import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ORG_DETAILS } from '../data/organizationData';
import { Phone, Mail, MapPin, Menu, X, Heart, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeMobileDrawer = () => {
    setMobileDrawerOpen(false);
    setMobileWorkOpen(false);
  };

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
          {/* Simple top-level items */}
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/vision-mission', label: 'Vision' },
          ].map(item => (
            <li className="mobile-nav-item" key={item.path}>
              <Link
                to={item.path}
                className="mobile-nav-link"
                onClick={closeMobileDrawer}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Our Work — collapsible */}
          <li className="mobile-nav-item">
            <button
              onClick={() => setMobileWorkOpen(prev => !prev)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.85rem 1.2rem',
                fontSize: '1rem', fontWeight: 600,
                color: 'var(--color-primary-dark)',
                fontFamily: 'var(--font-heading)',
                borderBottom: '1px solid var(--color-sand-dark)',
              }}
              aria-expanded={mobileWorkOpen}
            >
              <span>Our Work</span>
              <ChevronDown
                size={18}
                style={{
                  transition: 'transform 0.25s ease',
                  transform: mobileWorkOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: 'var(--color-terracotta)',
                }}
              />
            </button>

            {mobileWorkOpen && (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, background: 'var(--color-sand)' }}>
                {[
                  { path: '/programs', label: 'All Programs', bold: true },
                  { path: '/education', label: 'Education & Schools' },
                  { path: '/health', label: 'Health & Wellness' },
                  { path: '/women-youth', label: 'Women & Youth' },
                  { path: '/environment', label: 'Environment & Water' },
                  { path: '/livelihood', label: 'Livelihood & Skills' },
                ].map(item => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={closeMobileDrawer}
                      style={{
                        display: 'block',
                        padding: '0.7rem 1.2rem 0.7rem 2rem',
                        fontSize: '0.92rem',
                        color: item.bold ? 'var(--color-primary-dark)' : 'var(--color-gray-dark)',
                        fontWeight: item.bold ? 700 : 500,
                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                        textDecoration: 'none',
                      }}
                    >
                      {item.bold ? item.label : `↳ ${item.label}`}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Remaining top-level items */}
          {[
            { path: '/objectives', label: 'Objectives' },
            { path: '/governance', label: 'Governance' },
            { path: '/gallery', label: 'Gallery' },
            { path: '/contact', label: 'Contact' },
            { path: '/donate', label: 'Donate' },
          ].map(item => (
            <li className="mobile-nav-item" key={item.path}>
              <Link
                to={item.path}
                className="mobile-nav-link"
                onClick={closeMobileDrawer}
                style={{
                  fontWeight: item.path === '/donate' ? 700 : undefined,
                  color: item.path === '/donate' ? 'var(--color-terracotta)' : undefined,
                }}
              >
                {item.path === '/donate' ? `♥ ${item.label}` : item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

