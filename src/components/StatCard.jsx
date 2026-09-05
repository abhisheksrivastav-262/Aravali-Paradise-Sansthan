import React from 'react';

export default function StatCard({ number, label, icon: Icon, note }) {
  return (
    <div className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {Icon && (
        <div style={{ 
          width: '56px', 
          height: '56px', 
          borderRadius: '50%', 
          backgroundColor: 'rgba(20, 53, 39, 0.08)', 
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}>
          <Icon size={26} />
        </div>
      )}
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'var(--color-terracotta)', lineHeight: 1 }}>
        {number}
      </div>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary-dark)', marginTop: '0.5rem' }}>
        {label}
      </div>
      {note && (
        <div style={{ fontSize: '0.82rem', color: 'var(--color-gray)', marginTop: '0.3rem' }}>
          {note}
        </div>
      )}
    </div>
  );
}
