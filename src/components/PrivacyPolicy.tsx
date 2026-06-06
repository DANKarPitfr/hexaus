import React from 'react';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] bg-luxury-bg p-4 overflow-y-auto">
      <div className="max-w-3xl mx-auto py-8">
        <button onClick={onClose} className="flex items-center gap-2 text-luxury-text mb-8 hover:text-luxury-citrus transition-colors">
          <ChevronLeft size={20} /> Back to Home
        </button>

        <div className="bg-luxury-surface/60 backdrop-blur-sm p-8 rounded-3xl border border-luxury-border shadow-neo-dark text-luxury-text">
          <h1 className="text-3xl font-bold text-luxury-cream mb-2">Privacy Policy</h1>
          <p className="text-xs text-luxury-text/60 mb-8">Last Updated: June 04, 2026</p>
          
          <div className="space-y-6 text-sm leading-relaxed">
            <p><strong>HexaEstates</strong> is a real estate platform where users can browse and post property listings. Protecting your privacy and personal information is our priority.</p>
            
            <h2 className="text-lg font-bold text-luxury-cream mt-6">Information Collection</h2>
            <p>Users may sign in using Google Authentication. We may collect the following:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Profile photo</li>
              <li>Property listing information</li>
              <li>Property images and videos</li>
            </ul>

            <h2 className="text-lg font-bold text-luxury-cream mt-6">Purpose & Data Sharing</h2>
            <p>User data is used only for account management, property listings, security, and platform functionality. <strong>We do not sell user personal information to third parties.</strong> Uploaded property information is stored to provide listing services.</p>
            <p>We may use third-party services, including:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Google Authentication</li>
              <li>Firebase</li>
              <li>Cloudinary</li>
              <li>Vercel</li>
            </ul>
            <p>Users can request removal of their listings or account data by contacting support.</p>

            <h2 className="text-lg font-bold text-luxury-cream mt-6">Security & Usage Disclaimer</h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>No in-app payments are processed between property owners and users.</li>
              <li>Users should not send advance payments before independently verifying any property.</li>
              <li>Property listings may be reviewed before approval.</li>
              <li>Users can report suspicious listings.</li>
              <li>Verified Owner badges may be provided after verification.</li>
              <li><strong>Important:</strong> Users should only buy property from verified badge owners. Otherwise, HexaEstates is not responsible for any issues arising from transactions.</li>
            </ul>

            <h2 className="text-lg font-bold text-luxury-cream mt-6">Contact Information</h2>
            <p>For questions or requests, please contact us at: <a href="mailto:supportbyhexaus@gmail.com" className="text-luxury-citrus font-bold hover:underline">supportbyhexaus@gmail.com</a></p>
          </div>

          <div className="mt-10 pt-6 border-t border-luxury-border flex justify-between text-xs text-luxury-text/70">
            <button onClick={onClose} className="hover:text-luxury-citrus">Home</button>
            <Link to="/terms-of-service" className="hover:text-luxury-citrus">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
