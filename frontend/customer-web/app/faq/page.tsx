import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faqs } from "@/lib/mockData";

export default function FaqPage() {
  return (
    <div className="bg-[#F7F4EA] min-h-screen">
      <Header />

      <div className="max-w-[700px] mx-auto px-4 py-14">
        <h1 className="text-3xl font-bold text-[#174B35] mb-1">
          Frequently Asked Questions
        </h1>
        <p className="text-[#737B73] mb-10">
          Everything you need to know about Apna Pahadi Bazaar.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-[#E5E0D3] rounded-[14px] p-5"
            >
              <p className="font-semibold text-[#103B2B] mb-2">{faq.q}</p>
              <p className="text-sm text-[#594638] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#E8EFE6] rounded-[14px] p-6 text-center">
          <p className="font-semibold text-[#174B35] mb-1">Still have questions?</p>
          <p className="text-sm text-[#737B73] mb-4">
            Our team is happy to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#174B35] hover:bg-[#103B2B] text-white font-semibold px-6 py-2.5 rounded-[10px] transition-colors text-sm"
          >
            Contact us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
