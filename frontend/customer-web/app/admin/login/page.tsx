import Logo from "@/components/Logo";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[#0F2B1F] flex flex-col items-center justify-center px-4">
      {/* Dark green panel */}
      <div className="w-full max-w-sm">
        {/* Panel header */}
        <div className="bg-[#1B4332] rounded-t-2xl p-8 text-center border border-[#2D6A4F]/50">
          <div className="flex justify-center mb-4">
            <Logo size="lg" />
          </div>
          <p className="text-white font-bold text-lg mt-3">Admin Panel</p>
          <p className="text-[#6EE7B7] text-sm mt-1">Manage your marketplace</p>

          {/* Small mountain silhouette */}
          <div className="mt-4 opacity-30">
            <svg viewBox="0 0 200 40" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 40 L0 25 L40 5 L80 20 L100 2 L120 18 L160 8 L200 22 L200 40Z" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Login form */}
        <div className="bg-white rounded-b-2xl p-6 shadow-xl">
          <h2 className="text-base font-bold text-[#1F2937] mb-4">Admin Login</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter admin email"
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#174B35] focus:ring-1 focus:ring-[#174B35]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#174B35] focus:ring-1 focus:ring-[#174B35]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#174B35] hover:bg-[#103B2B] text-white font-semibold py-2.5 rounded-lg transition-colors text-sm mt-1"
            >
              Login
            </button>
          </form>

          <p className="text-xs text-center text-[#9CA3AF] mt-4">
            Admin access only. Unauthorised access is prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
