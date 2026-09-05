import React from 'react';

export default function SectionHeader({ badge, title, subtitle, align = 'center', color = 'terracotta' }) {
  return (
    <div className={`section-header ${align === 'left' ? 'text-left' : ''}`}>
      {badge && (
        <span className={`badge-tag ${color === 'green' ? 'green' : ''}`}>
          {badge}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
