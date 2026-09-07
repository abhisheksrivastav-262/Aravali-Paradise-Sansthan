import React, { useState, useEffect, useCallback } from 'react';
import SectionHeader from '../components/SectionHeader';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(img => img.category === filter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const stepLightbox = useCallback((dir) => {
    setLightboxIndex(prev => {
      if (prev === null) return prev;
      const n = filteredImages.length;
      if (n === 0) return null;
      return (prev + dir + n) % n;
    });
  }, [filteredImages.length]);

  // Lock background scroll + keyboard nav while lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') stepLightbox(1);
      if (e.key === 'ArrowLeft') stepLightbox(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, stepLightbox]);

  // Reset lightbox when filter changes via handler (no effect setState)
  const handleFilter = (cat) => {
    setFilter(cat);
    setLightboxIndex(null);
  };

  const activeImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

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
            Glimpses of our fieldwork, school campus, senior care and community events across Alwar district.
          </p>
          <p style={{ marginTop: '0.8rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
            Showing {filteredImages.length} of {GALLERY_ITEMS.length} photos
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          {/* Filters */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2.5rem' }}>
            {GALLERY_CATEGORIES.map(cat => {
              const count = cat === 'All' ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter(i => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
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
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Masonry grid — natural image ratios, NO cropping */}
          <div className="aps-masonry">
            {filteredImages.map((img, idx) => (
              <figure
                key={img.id}
                className="card aps-masonry-item"
                onClick={() => setLightboxIndex(idx)}
                style={{
                  cursor: 'zoom-in',
                  overflow: 'hidden',
                  position: 'relative',
                  padding: 0,
                  border: 'none',
                  margin: 0,
                  breakInside: 'avoid',
                }}
              >
                <div style={{ backgroundColor: '#1A2922', lineHeight: 0 }}>
                  <img
                    src={img.image}
                    alt={`${img.title} — ${img.caption}`}
                    loading={idx < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                    className="gallery-img"
                    onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
                  />
                </div>
                <figcaption
                  className="gallery-overlay"
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0) 55%)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    padding: '1.2rem', opacity: 0, transition: 'opacity 0.3s ease',
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{
                    fontSize: '0.72rem', color: 'var(--color-saffron)',
                    textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px', marginBottom: '0.35rem'
                  }}>
                    {img.category}
                  </span>
                  <strong style={{ color: '#FFFFFF', margin: 0, fontSize: '0.95rem' }}>{img.title}</strong>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.82rem', marginTop: '0.25rem' }}>{img.location}</span>
                </figcaption>
              </figure>
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

      {/* Lightbox Modal — full image, prev/next, responsive */}
      {activeImage && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)',
            zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'clamp(0.8rem, 3vw, 2rem)', overflowY: 'auto',
          }}
          onClick={closeLightbox}
        >
          <button
            aria-label="Close"
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'rgba(255,255,255,0.12)', border: 'none', color: '#FFF',
              width: '44px', height: '44px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 2,
            }}
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); stepLightbox(-1); }}
            style={{
              position: 'absolute', left: 'clamp(0.4rem, 2vw, 1.5rem)', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.12)', border: 'none', color: '#FFF',
              width: '46px', height: '46px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2,
            }}
          >
            <ChevronLeft size={26} />
          </button>

          <button
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); stepLightbox(1); }}
            style={{
              position: 'absolute', right: 'clamp(0.4rem, 2vw, 1.5rem)', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.12)', border: 'none', color: '#FFF',
              width: '46px', height: '46px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2,
            }}
          >
            <ChevronRight size={26} />
          </button>

          <div style={{ maxWidth: '1000px', width: '100%', maxHeight: '100%', margin: 'auto' }} onClick={e => e.stopPropagation()}>
            <img
              src={activeImage.image}
              alt={`${activeImage.title} — ${activeImage.caption}`}
              style={{
                width: '100%', height: 'auto', maxHeight: 'calc(100vh - 250px)', maxWidth: '100%',
                objectFit: 'contain', borderRadius: '10px', background: '#000', display: 'block', margin: '0 auto',
              }}
            />
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <span style={{
                display: 'inline-block', padding: '0.3rem 1rem', background: 'rgba(212,154,53,0.2)',
                color: 'var(--color-saffron)', borderRadius: '50px', fontSize: '0.8rem',
                fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.6rem'
              }}>
                {activeImage.category} • {lightboxIndex + 1} / {filteredImages.length}
              </span>
              <p style={{ color: '#FFF', fontSize: '1rem', fontWeight: 700, margin: '0 0 0.3rem' }}>
                {activeImage.title}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                {activeImage.caption}
              </p>
              {activeImage.location && (
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.4rem' }}>
                  📍 {activeImage.location}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .aps-masonry {
          columns: 4 260px;
          column-gap: 1.5rem;
        }
        .aps-masonry-item {
          margin-bottom: 1.5rem;
          border-radius: 14px;
        }
        .aps-masonry-item .gallery-img {
          border-radius: 14px;
        }
        .aps-masonry-item:hover .gallery-img {
          transform: none;
        }
        .aps-masonry-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 1280px) {
          .aps-masonry { columns: 3 240px; }
        }
        @media (max-width: 900px) {
          .aps-masonry { columns: 2 200px; column-gap: 1rem; }
          .aps-masonry-item { margin-bottom: 1rem; }
        }
        @media (max-width: 520px) {
          .aps-masonry { columns: 1 100%; }
        }
      `}</style>
    </div>
  );
}
