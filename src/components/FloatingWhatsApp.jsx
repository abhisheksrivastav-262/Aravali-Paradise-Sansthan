import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ORG_DETAILS } from '../data/organizationData';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${ORG_DETAILS.contact.whatsapp}?text=${encodeURIComponent("Namaste! I would like to learn more about Aravali Paradise Sansthan (APS) and how to support your community initiatives.")}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      title="Connect with APS on WhatsApp"
    >
      <MessageCircle size={22} fill="currentColor" />
      <span>Chat with APS Desk</span>
    </a>
  );
}
