import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Scale, Gem, ShieldCheck, TrendingUp, User, ArrowUpRight,
  Sparkles, CheckCircle2, ChevronRight, Award, History
} from 'lucide-react';
import { currentUser, mockValuations, mockCertificates } from '../data/mockData';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 md:space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Welcome Greeting Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-white via-white to-[#FAF8F2] border border-gray-100/80 rounded-2xl p-4 md:p-5 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#C9A44C] animate-pulse" />
            <span className="text-xs font-bold text-[#C9A44C] uppercase tracking-wider">Customer Portal</span>
          </div>
          <h1 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">
            Welcome, {currentUser.name.split(' ')[0]}!
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Know the true intrinsic worth of your gold before you buy or sell.
          </p>
        </div>

        <div className="flex items-center gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
          <div className="text-left sm:text-right">
            <p className="text-[10px] uppercase font-bold text-gray-400">24K Reference Rate</p>
            <p className="text-sm sm:text-base font-bold text-[#14213D]">₹10,000 / gram</p>
          </div>
          <button
            onClick={() => navigate('/rates')}
            className="p-2 rounded-xl bg-gray-50 hover:bg-[#C9A44C]/10 text-gray-600 hover:text-[#C9A44C] transition-colors border border-gray-100"
            title="View Rates"
          >
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* SECTION: FOUR MAIN FEATURE CARDS (2x2 GRID) */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider">
            Main Features
          </h2>
          <span className="text-[11px] text-[#C9A44C] font-semibold">4 Transparent Tools</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {/* CARD 1: SELL OLD GOLD (PRIMARY FEATURE) */}
          <div
            onClick={() => navigate('/sell')}
            className="group relative bg-white hover:bg-[#FAF8F2] border-2 border-gray-100 hover:border-[#C9A44C] rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#C9A44C]/10 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div>
              <div className="flex items-start justify-between mb-4">
                {/* Visual Icon Illustration */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#14213D] to-[#1e3a5f] border-2 border-[#C9A44C] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                  <Scale size={28} className="text-[#E5D5A5]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#C9A44C] text-[#14213D] uppercase tracking-wide">
                    Primary
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#C9A44C] group-hover:text-white flex items-center justify-center text-gray-400 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#14213D] transition-colors">
                Sell Old Gold
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5 leading-relaxed">
                Get a transparent valuation for your old gold jewellery with 6-step purity & deduction checks.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#C9A44C] group-hover:text-[#b8923a]">
              <span>Start 6-Step Valuation</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* CARD 2: BUY NEW GOLD (COMING SOON) */}
          <div
            onClick={() => navigate('/buy')}
            className="group relative bg-white hover:bg-[#FAF8F2] border-2 border-gray-100 hover:border-[#14213D]/40 rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#14213D]/5 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FAF8F2] to-[#E5D5A5]/40 border border-[#C9A44C]/30 flex items-center justify-center text-[#C9A44C] shadow-sm group-hover:scale-105 transition-transform">
                  <Gem size={28} className="text-[#C9A44C]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-600 uppercase tracking-wide">
                    Coming Soon
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#14213D] group-hover:text-white flex items-center justify-center text-gray-400 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#14213D] transition-colors">
                Buy New Gold
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5 leading-relaxed">
                Explore gold jewellery with transparent purity, hallmarked certificates, and zero hidden deductions.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-600 group-hover:text-[#14213D]">
              <span>Explore Collection Preview</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* CARD 3: VERIFY HUID */}
          <div
            onClick={() => navigate('/huid')}
            className="group relative bg-white hover:bg-[#FAF8F2] border-2 border-gray-100 hover:border-emerald-500/40 rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-emerald-500/5 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-sm group-hover:scale-105 transition-transform">
                  <ShieldCheck size={28} className="text-emerald-700" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wide">
                    BIS Hallmark
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center text-gray-400 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#14213D] transition-colors">
                Verify HUID
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5 leading-relaxed">
                Check hallmark and 6-digit HUID details of your jewellery for instant authenticity verification.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
              <span>Verify Hallmark Number</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* CARD 4: TODAY'S GOLD RATES */}
          <div
            onClick={() => navigate('/rates')}
            className="group relative bg-white hover:bg-[#FAF8F2] border-2 border-gray-100 hover:border-amber-500/40 rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-amber-500/5 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shadow-sm group-hover:scale-105 transition-transform">
                  <TrendingUp size={28} className="text-amber-700" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 uppercase tracking-wide">
                    Live Indicative
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center text-gray-400 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#14213D] transition-colors">
                Today's Gold Rates
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5 leading-relaxed">
                Stay updated with indicative gold prices across 24K, 22K, 20K, 18K and 14K purity levels.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-800">
              <span>View Rates Breakdown</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: MY PROFILE (WIDE CARD BELOW 2x2 GRID) */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider">
            Your Account Hub
          </h2>
          <span className="text-[11px] text-gray-400">Valuations & Certificates</span>
        </div>

        <div
          onClick={() => navigate('/profile')}
          className="group relative bg-white hover:bg-[#FAF8F2] border-2 border-gray-100 hover:border-[#14213D] rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#14213D] to-[#1e3a5f] border-2 border-[#C9A44C] flex items-center justify-center text-white text-2xl font-serif font-bold shadow-md shrink-0">
                {currentUser.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#14213D] transition-colors">
                    My Profile
                  </h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={10} /> Active
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-lg leading-relaxed">
                  Manage your account, valuations and certificates in one place.
                </p>
              </div>
            </div>

            {/* Quick shortcuts to subsections */}
            <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/profile?tab=valuations');
                }}
                className="px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-[#C9A44C]/15 hover:text-[#8B6914] text-xs font-semibold text-gray-700 border border-gray-100 transition-all flex items-center gap-1.5"
              >
                <span>My Valuations</span>
                <span className="px-1.5 py-0.2 bg-white rounded-full text-[10px] font-bold shadow-xs">
                  {mockValuations.length}
                </span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/profile?tab=certificates');
                }}
                className="px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-[#C9A44C]/15 hover:text-[#8B6914] text-xs font-semibold text-gray-700 border border-gray-100 transition-all flex items-center gap-1.5"
              >
                <span>My Certificates</span>
                <span className="px-1.5 py-0.2 bg-white rounded-full text-[10px] font-bold shadow-xs">
                  {mockCertificates.length}
                </span>
              </button>

              <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#14213D] group-hover:text-white flex items-center justify-center text-gray-500 transition-colors ml-auto sm:ml-0">
                <ChevronRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
