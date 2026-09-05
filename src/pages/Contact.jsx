import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { ORG_DETAILS } from '../data/organizationData';
import { MapPin, Phone, Mail, User, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `Namaste! New Contact Form Message:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/${ORG_DETAILS.contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const contactItems = [
    { icon: <MapPin size={20} />, label: 'Registered Address', content: ORG_DETAILS.registeredOffice.fullAddress },
    { icon: <Phone size={20} />, label: 'Phone Contacts', content: `${ORG_DETAILS.contact.phone1}\n${ORG_DETAILS.contact.phone2}`, isPhone: true },
    { icon: <Mail size={20} />, label: 'Official Email', content: ORG_DETAILS.contact.email, isEmail: true },
    { icon: <User size={20} />, label: 'Official Contact Person', content: `${ORG_DETAILS.contact.contactPerson} (${ORG_DETAILS.contact.designation})` },
  ];

  const iconBg = ['rgba(168,74,41,0.1)', 'rgba(20,53,39,0.1)', 'rgba(212,154,53,0.15)', 'rgba(20,53,39,0.1)'];
  const iconColor = ['var(--color-terracotta)', 'var(--color-primary)', 'var(--color-saffron)', 'var(--color-primary)'];

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
            Get In Touch
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Contact Registered Office
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            We welcome queries from volunteers, donors, community members, government bodies, and institutions.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          {/* Info + Form – collapses to 1-col on mobile */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '4rem',
          }}>
            {/* Contact Info */}
            <div>
              <span className="badge-tag">Official Desk</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Headquarters Info</h2>
              <div className="card" style={{ padding: 'clamp(1.5rem, 2.5vw, 2rem)', background: '#FFFFFF' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {contactItems.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '42px', height: '42px', minWidth: '42px', borderRadius: '10px',
                        background: iconBg[idx], color: iconColor[idx],
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {item.icon}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <strong style={{ fontSize: '1rem', color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.2rem' }}>
                          {item.label}
                        </strong>
                        {item.isPhone ? (
                          <div>
                            <a href={`tel:${ORG_DETAILS.contact.phone1}`} style={{ display: 'block', color: 'var(--color-gray-dark)', fontSize: '0.9rem' }}>{ORG_DETAILS.contact.phone1}</a>
                            <a href={`tel:${ORG_DETAILS.contact.phone2}`} style={{ display: 'block', color: 'var(--color-gray-dark)', fontSize: '0.9rem' }}>{ORG_DETAILS.contact.phone2}</a>
                          </div>
                        ) : item.isEmail ? (
                          <a href={`mailto:${item.content}`} style={{ color: 'var(--color-gray-dark)', fontSize: '0.9rem', wordBreak: 'break-all' }}>{item.content}</a>
                        ) : (
                          <p style={{ color: 'var(--color-gray-dark)', fontSize: '0.9rem', lineHeight: 1.5, wordBreak: 'break-word' }}>{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ padding: 'clamp(1.8rem, 3vw, 3rem)', background: '#FFFFFF' }}>
              <SectionHeader
                badge="Send Message"
                title="Direct Inquiry Form"
                subtitle="Fill out your inquiry to send a direct message to Secretary Mr. Rudradutt Joshi."
                align="left"
              />

              <form onSubmit={handleSubmit}>
                {/* 2-col grid on desktop, 1-col on mobile */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                }}>
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input type="text" required className="form-input" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Full Name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input type="tel" required className="form-input" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 00000 00000" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input type="email" required className="form-input" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="email@example.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input type="text" required className="form-input" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} placeholder="Inquiry Subject" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message Details *</label>
                  <textarea required rows={4} className="form-textarea" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="Write your message here..." />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                  <MessageCircle size={18} /> Send Message via WhatsApp
                </button>

                {submitted && (
                  <div style={{
                    marginTop: '1.2rem', padding: '1rem',
                    background: 'rgba(37,211,102,0.08)', border: '1px solid #25D366',
                    borderRadius: '10px', color: '#143527',
                    display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem',
                  }}>
                    <CheckCircle2 size={18} style={{ color: '#25D366', flexShrink: 0, marginTop: '2px' }} />
                    <span>Enquiry sent! Opening WhatsApp chat with official APS contact...</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Google Map embed */}
          <SectionHeader
            badge="Location Map"
            title="Registered Office Location – Alwar"
            subtitle="Vivekanand Nagar, Sector No. 4, Panna Lal Ka Kuan, Alwar, Rajasthan – 301001"
          />
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: 'clamp(300px, 45vw, 400px)' }}>
            <iframe
              title="APS Location Map"
              src="https://maps.google.com/maps?q=Alwar%20Rajasthan%20301001&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
