import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { ORG_DETAILS } from '../data/organizationData';
import { UserPlus, Handshake, Heart, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function GetInvolved() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', type: 'Volunteer', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `Namaste! New Website Enquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterest Type: ${formData.type}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/${ORG_DETAILS.contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const pathways = [
    { icon: <UserPlus size={28} />, title: 'Volunteer With Us', desc: "Join APS's grassroots team in Alwar to assist in health camps, school tutoring, environment drives, and field surveys.", bg: 'rgba(20,53,39,0.1)', color: 'var(--color-primary)' },
    { icon: <Handshake size={28} />, title: 'Partner With Us', desc: 'For institutions, government bodies, CSR foundations, and academic groups seeking collaborative program execution.', bg: 'rgba(168,74,41,0.1)', color: 'var(--color-terracotta)' },
    { icon: <Heart size={28} fill="currentColor" />, title: 'Support Our Work', desc: 'Provide responsible financial or material support toward expanding education, healthcare, and sustainable agriculture.', bg: 'rgba(212,154,53,0.15)', color: 'var(--color-saffron)' },
  ];

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
            Join Our Mission
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>Get Involved</h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            Three major pathways to contribute toward community empowerment in Alwar and Rajasthan.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          {/* 3 Pathway Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.8rem', marginBottom: '4rem' }}>
            {pathways.map((p, idx) => (
              <div key={idx} className="card" style={{ padding: 'clamp(1.8rem, 3vw, 2.5rem)', textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: p.bg, color: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto' }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: 'var(--color-primary-dark)', marginBottom: '0.8rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--color-gray-dark)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(1.8rem, 3vw, 3rem)', background: '#FFFFFF' }}>
            <SectionHeader
              badge="Application Form"
              title="Submit Your Interest"
              subtitle="Fill out the form below. Submitting will format a direct WhatsApp message to our official Secretary desk."
            />

            <form onSubmit={handleSubmit}>
              {/* 2-col on desktop, 1-col on mobile */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" required className="form-input" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" required className="form-input" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 00000 00000" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="yourname@example.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">How Would You Like to Help? *</label>
                  <select className="form-select" value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })}>
                    <option value="Volunteer">Grassroots Volunteer</option>
                    <option value="Institutional Partner">Institutional Partnership / CSR</option>
                    <option value="Donor / Supporter">Donation / Material Support</option>
                    <option value="General Inquiry">General Enquiry</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message / Skills Offered *</label>
                <textarea
                  required rows={4} className="form-textarea" value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share brief details about your background or how you wish to collaborate with APS..."
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                <MessageCircle size={18} /> Submit & Open WhatsApp Enquiry
              </button>
            </form>

            {submitted && (
              <div style={{
                marginTop: '1.4rem', padding: '1rem',
                background: 'rgba(37,211,102,0.08)', border: '1px solid #25D366',
                borderRadius: '10px', color: '#143527',
                display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem',
              }}>
                <CheckCircle2 size={18} style={{ color: '#25D366', flexShrink: 0, marginTop: '2px' }} />
                <span>Enquiry prepared! Opening WhatsApp chat window with official APS contact number...</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
