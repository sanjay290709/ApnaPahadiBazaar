import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#F7F4EA] min-h-screen">
      <Header />

      <section className="bg-[#174B35] text-white py-14 px-4 text-center">
        <div className="max-w-[700px] mx-auto">
          <p className="text-[#D99A36] text-xs font-semibold uppercase tracking-widest mb-2">
            Our Story
          </p>
          <h1 className="text-4xl font-bold mb-3">About Pahadi Bazaar</h1>
          <p className="text-[#A8C4B0]">
            A Pahadi-first marketplace for local products, local people and a
            stronger Uttarakhand.
          </p>
        </div>
      </section>

      <div className="max-w-[760px] mx-auto px-4 py-14 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-[#174B35] mb-3">Why we exist</h2>
          <p className="text-[#594638] leading-relaxed">
            Uttarakhand's mountains are home to extraordinary food — wild honey,
            heritage grains, hand-ground spices and generational recipes passed
            down through families for centuries. But most of it never travels
            beyond the village. Middlemen take the margins. Farmers and artisans
            earn less than they should. And buyers never know the story behind
            what they eat.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#174B35] mb-3">What we do</h2>
          <p className="text-[#594638] leading-relaxed">
            Pahadi Bazaar connects local farmers and food artisans from Kumaon
            and Garhwal directly with people who care about real food, honest
            provenance and supporting mountain communities. Every product on our
            platform is verified by our team before it is listed.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#174B35] mb-3">Our values</h2>
          <ul className="space-y-3">
            {[
              ["🌿", "Authenticity", "We list only products we can verify. No unverified claims about ingredients or production methods."],
              ["🤝", "Community first", "Sellers are partners, not suppliers. We aim to build a platform that helps mountain communities thrive."],
              ["📍", "Local identity", "Kumaon and Garhwal are not just geographies — they are distinct culinary traditions we're proud to represent."],
              ["🔍", "Transparency", "Origin, seller, ingredients and shelf life are visible on every product page."],
            ].map(([icon, title, desc]) => (
              <li key={title} className="flex gap-4">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <p className="font-semibold text-[#103B2B]">{title}</p>
                  <p className="text-sm text-[#594638]">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#E8EFE6] rounded-[14px] p-6 text-center">
          <p className="text-[#174B35] font-semibold mb-2">
            Want to know more or list your products?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#174B35] hover:bg-[#103B2B] text-white font-semibold px-6 py-3 rounded-[10px] transition-colors mt-2"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
