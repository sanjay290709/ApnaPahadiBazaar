import Header from "@/components/Header";
import Footer from "@/components/Footer";

function PolicyPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#F7F4EA] min-h-screen">
      <Header />
      <div className="max-w-[760px] mx-auto px-4 py-14">
        <h1 className="text-3xl font-bold text-[#174B35] mb-8">{title}</h1>
        <div className="prose prose-sm text-[#594638] space-y-4">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export function PrivacyPage() {
  return (
    <PolicyPage title="Privacy Policy">
      <p className="text-[#737B73] text-sm">Last updated: October 2026</p>
      <p>Pahadi Bazaar collects only the information necessary to provide our services — your name, email address and optionally your mobile number when you create an account.</p>
      <p>We do not sell your personal data to third parties. Your information is used solely to manage your account and communicate with you about products and orders.</p>
      <p>Full privacy policy will be published prior to the transactional launch of Pahadi Bazaar.</p>
    </PolicyPage>
  );
}

export function TermsPage() {
  return (
    <PolicyPage title="Terms of Use">
      <p className="text-[#737B73] text-sm">Last updated: October 2026</p>
      <p>By accessing Pahadi Bazaar you agree to use the platform only for lawful purposes and in accordance with these terms.</p>
      <p>All product information is provided in good faith. Pahadi Bazaar verifies seller claims before listing products but cannot guarantee the accuracy of all information.</p>
      <p>Full terms of service will be published prior to the transactional launch of Pahadi Bazaar.</p>
    </PolicyPage>
  );
}

export function ShippingPage() {
  return (
    <PolicyPage title="Shipping Policy">
      <p className="text-[#737B73] text-sm">Last updated: October 2026</p>
      <p>Pahadi Bazaar is currently in catalogue mode. Ordering and delivery are not yet active.</p>
      <p>When ordering is enabled, delivery will be available to serviceable pincodes across India. Specific timelines and charges will be published at that time.</p>
      <p>For product enquiries, please use the Contact page.</p>
    </PolicyPage>
  );
}

export function RefundsPage() {
  return (
    <PolicyPage title="Refund Policy">
      <p className="text-[#737B73] text-sm">Last updated: October 2026</p>
      <p>Pahadi Bazaar is currently in catalogue mode. Transactions are not yet active.</p>
      <p>A full refund and cancellation policy will be published before ordering goes live. We are committed to a fair and transparent refund process.</p>
      <p>For any questions, please contact us through the Contact page.</p>
    </PolicyPage>
  );
}
