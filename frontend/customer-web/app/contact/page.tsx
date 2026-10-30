import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-[#F7F4EA] min-h-screen">
      <Header />

      <div className="max-w-[600px] mx-auto px-4 py-14">
        <h1 className="text-3xl font-bold text-[#174B35] mb-1">Contact Us</h1>
        <p className="text-[#737B73] mb-8">
          Have a question about a product, a seller, or want to join Pahadi
          Bazaar? We'd love to hear from you.
        </p>

        <form className="space-y-5 bg-white border border-[#E5E0D3] rounded-[14px] p-6">
          <div>
            <label className="block text-sm font-medium text-[#594638] mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Rahul Joshi"
              className="w-full border border-[#E5E0D3] bg-white rounded-[10px] px-4 py-2.5 text-sm text-[#594638] placeholder:text-[#737B73] focus:outline-none focus:border-[#174B35]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#594638] mb-1.5">
              Email address
            </label>
            <input
              type="email"
              placeholder="rahul@example.com"
              className="w-full border border-[#E5E0D3] bg-white rounded-[10px] px-4 py-2.5 text-sm text-[#594638] placeholder:text-[#737B73] focus:outline-none focus:border-[#174B35]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#594638] mb-1.5">
              Subject
            </label>
            <select className="w-full border border-[#E5E0D3] bg-white rounded-[10px] px-4 py-2.5 text-sm text-[#594638] focus:outline-none focus:border-[#174B35]">
              <option value="">Select a subject</option>
              <option>Product enquiry</option>
              <option>Seller registration</option>
              <option>Order help</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#594638] mb-1.5">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell us what you need…"
              className="w-full border border-[#E5E0D3] bg-white rounded-[10px] px-4 py-2.5 text-sm text-[#594638] placeholder:text-[#737B73] focus:outline-none focus:border-[#174B35] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#174B35] hover:bg-[#103B2B] text-white font-semibold py-3 rounded-[10px] transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-[#737B73]">
          We typically respond within 1–2 business days.
        </div>
      </div>

      <Footer />
    </div>
  );
}
