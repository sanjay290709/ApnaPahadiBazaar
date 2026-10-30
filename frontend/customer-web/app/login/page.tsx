import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { MountainFooter } from "@/components/MountainBackground";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[400px]">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo size="md" />
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Card header */}
            <div className="px-6 pt-6 pb-4 border-b border-gray-50">
              <h1 className="text-xl font-bold text-[#1F2937]">Login</h1>
              <p className="text-sm text-[#6B7280] mt-0.5">Welcome back to Pahadi Bazaar</p>
            </div>

            <form className="px-6 py-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">
                  Email or Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter email or mobile number"
                  className="w-full border border-[#E5E7EB] bg-white rounded-lg px-4 py-2.5 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#174B35] focus:ring-1 focus:ring-[#174B35]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border border-[#E5E7EB] bg-white rounded-lg px-4 py-2.5 pr-10 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#174B35] focus:ring-1 focus:ring-[#174B35]"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-[#6B7280] cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-[#174B35]" />
                  Remember me
                </label>
                <button type="button" className="text-[#174B35] hover:underline font-medium">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-[#174B35] hover:bg-[#103B2B] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                Login
              </button>

              <p className="text-xs text-center text-[#9CA3AF]">
                New here?{" "}
                <Link href="/register" className="text-[#174B35] font-semibold hover:underline">
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Mountain footer illustration */}
      <MountainFooter />
    </div>
  );
}
