import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';
import { Camera, X, Play } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(img => img.category === filter);

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
            Impact in Action
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Media Gallery
          </h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
            Glimpses of our fieldwork, community mobilization, and empowerment initiatives across Alwar district.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          {/* Filters — using categories from galleryData */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '3rem' }}>
            {GALLERY_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: '50px',
                  background: filter === cat ? 'var(--color-terracotta)' : '#FFFFFF',
                  color: filter === cat ? '#FFFFFF' : 'var(--color-primary-dark)',
                  border: filter === cat ? 'none' : '1px solid var(--color-sand-dark)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  boxShadow: filter === cat ? 'var(--shadow-sm)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {filteredImages.map(img => (
              <div
                key={img.id}
                className="card"
                onClick={() => setLightboxImage(img)}
                style={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  position: 'relative',
                  padding: 0,
                  border: 'none',
                }}
              >
                <div style={{ position: 'relative', height: '240px', backgroundColor: '#1A2922' }}>
                  <img
                    src={img.image}
                    alt={img.caption}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    className="gallery-img"
                  />
                  {img.type === 'video' && (
                    <div style={{
                      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                      width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(0,0,0,0.6)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF'
                    }}>
                      <Play size={24} fill="currentColor" />
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="gallery-overlay" style={{
                    position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    padding: '1.5rem', opacity: 0, transition: 'opacity 0.3s ease'
                  }}>
                    <span style={{
                      fontSize: '0.75rem', color: 'var(--color-saffron)',
                      textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px', marginBottom: '0.4rem'
                    }}>
                      {img.category}
                    </span>
                    <h4 style={{ color: '#FFFFFF', margin: 0, fontSize: '1rem', lineHeight: 1.4 }}>{img.caption}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-gray)' }}>
              <Camera size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
              <p>No media found for this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)',
            zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={() => setLightboxImage(null)}
        >
          <button
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF',
              width: '44px', height: '44px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'background 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onClick={() => setLightboxImage(null)}
          >
            <X size={24} />
          </button>

          <div style={{ maxWidth: '1000px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.caption}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: '8px' }}
            />
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <span style={{
                display: 'inline-block', padding: '0.3rem 1rem', background: 'rgba(212,154,53,0.2)',
                color: 'var(--color-saffron)', borderRadius: '50px', fontSize: '0.8rem',
                fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.8rem'
              }}>
                {lightboxImage.category}
              </span>
              <p style={{ color: '#FFF', fontSize: '1rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                {lightboxImage.caption}
              </p>
              {lightboxImage.location && (
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.4rem' }}>
                  📍 {lightboxImage.location}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .card:hover .gallery-img {
          transform: scale(1.05);
        }
        .card:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}

