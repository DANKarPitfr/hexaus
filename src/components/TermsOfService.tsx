import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TermsOfService({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] bg-luxury-bg p-4 overflow-y-auto">
      <div className="max-w-3xl mx-auto py-8">
        <button onClick={onClose} className="flex items-center gap-2 text-luxury-text mb-8 hover:text-luxury-citrus transition-colors">
          <ChevronLeft size={20} /> Back to Home
        </button>

        <div className="bg-luxury-surface/60 backdrop-blur-sm p-8 rounded-3xl border border-luxury-border shadow-neo-dark text-luxury-text">
          <h1 className="text-3xl font-bold text-luxury-cream mb-2">Terms of Service</h1>
          <p className="text-xs text-luxury-text/60 mb-8">Last Updated: June 04, 2026</p>
          
          <div className="space-y-6 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-luxury-cream mt-6">Overview</h2>
            <p><strong>HexaEstates</strong> is a platform for browsing and posting real estate listings.</p>
            
            <h2 className="text-lg font-bold text-luxury-cream mt-6">User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Users must provide accurate property information.</li>
              <li>Users must not upload fake, misleading, fraudulent, or illegal listings.</li>
              <li>Users are responsible for the content they post.</li>
            </ul>

            <h2 className="text-lg font-bold text-luxury-cream mt-6">Property Listings</h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>All property listings may be reviewed before approval.</li>
              <li>HexaEstates reserves the right to approve, reject, edit, suspend, or remove listings.</li>
              <li>Property owners are responsible for verifying the accuracy of listing details.</li>
            </ul>

            <h2 className="text-lg font-bold text-luxury-cream mt-6">Safety Notice</h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>HexaEstates does not facilitate direct property transactions between users and owners.</li>
              <li>No in-app property payments are processed.</li>
              <li>Users should independently verify properties before making any payment or commitment.</li>
              <li>Users should not send advance payments before verifying property details.</li>
            </ul>

            <h2 className="text-lg font-bold text-luxury-cream mt-6">Verified Owner Program</h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Verified Owner badges may be granted after successful verification.</li>
              <li>Verification status may be revoked if misleading information is discovered.</li>
            </ul>

            <h2 className="text-lg font-bold text-luxury-cream mt-6">Prohibited Activities</h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Fraudulent listings, Impersonation, Spam, Harassment, Illegal activities, and Uploading misleading property information are strictly prohibited.</li>
            </ul>

            <h2 className="text-lg font-bold text-luxury-cream mt-6">Account Termination</h2>
            <p>HexaEstates may suspend or terminate accounts that violate these Terms.</p>

            <h2 className="text-lg font-bold text-luxury-cream mt-6">Limitation of Liability</h2>
            <p>HexaEstates is a listing platform and is not responsible for agreements, disputes, transactions, or losses arising between users and property owners.</p>

            <h2 className="text-lg font-bold text-luxury-cream mt-6">Contact Information</h2>
            <p>For questions, please contact us at: <a href="mailto:supportbyhexaus@gmail.com" className="text-luxury-citrus font-bold hover:underline">supportbyhexaus@gmail.com</a></p>
          </div>

          <div className="mt-10 pt-6 border-t border-luxury-border flex justify-between text-xs text-luxury-text/70">
            <button onClick={onClose} className="hover:text-luxury-citrus">Home</button>
            <Link to="/privacy-policy" className="hover:text-luxury-citrus">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
