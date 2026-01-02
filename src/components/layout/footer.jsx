import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-purple-50 to-indigo-100 pt-20 pb-10 overflow-hidden font-sans">
      
      {/* 1. Decorative Blurred Orbs (The "Soft" Vibe) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Purple Orb */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        {/* Pink/Blue Orb */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      {/* 2. The Content (Z-Index 10 to sit on top) */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-b border-purple-200 pb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">GiftShop.</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs font-medium">
              Curating emotions and delivering happiness since 2024. 
              Make every moment count.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:text-center space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Explore</h3>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li><a href="#" className="hover:text-purple-600 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 3: Socials (Colorful Bubbles) */}
          <div className="flex flex-col md:items-end space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Connect With Us</h3>
            <div className="flex items-center gap-4">
              
              {/* Instagram */}
              <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md hover:scale-110 transition-all group border border-purple-100">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-600 group-hover:text-pink-600 transition-colors">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                 </svg>
              </a>

              {/* WhatsApp */}
              <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md hover:scale-110 transition-all group border border-purple-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-600 group-hover:text-green-600 transition-colors">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md hover:scale-110 transition-all group border border-purple-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-600 group-hover:text-red-600 transition-colors">
                   <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                   <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>&copy; 2025 GiftShop Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-700 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;