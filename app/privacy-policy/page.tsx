"use client";

import SiteNavbar from "@/components/shared/SiteNavbar";
import SiteFooter from "@/components/shared/SiteFooter";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <SiteNavbar />

      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-500">Last updated: March 2026</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-3">We collect information you provide directly, including:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name, email address, phone number when you fill out our contact form</li>
                <li>Project details and preferences you share during consultations</li>
                <li>Payment and billing information for contracted projects</li>
                <li>Communications between you and our team</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-3">We use collected information to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Respond to your inquiries and provide quotes</li>
                <li>Manage and deliver our building services</li>
                <li>Send you project updates and relevant communications</li>
                <li>Improve our services and website experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our business (e.g., subcontractors, council bodies) only as necessary to deliver our services to you.</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">Our website may use cookies to enhance your browsing experience. You can control cookies through your browser settings. Disabling cookies may limit some functionality of our website.</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">Under Australian Privacy Principles, you have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us at hello@designhomes.com.au.</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">If you have questions about this Privacy Policy, please contact us at:</p>
              <div className="mt-3 text-gray-600">
                <p>Design Homes Pty Ltd</p>
                <p>Brisbane, QLD, Australia</p>
                <p>Email: hello@designhomes.com.au</p>
                <p>Phone: +61 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
