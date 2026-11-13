import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Scale, Gem, ShieldCheck, TrendingUp, ArrowUpRight,
  Sparkles, CheckCircle2, ChevronRight, Award, History
} from 'lucide-react';
import { currentUser, mockValuations, mockCertificates } from '../data/mockData';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 md:space-y-8 animate-fade-in w-full">
      {/* Welcome Greeting Strip (Spans full available width) */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-white via-white to-[#FAF8F2] border border-gray-200/80 rounded-2xl p-6 md:p-8 shadow-xs">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A44C] animate-pulse shrink-0" />
            <span className="text-xs font-bold text-[#8B6914] uppercase tracking-wider">
              GOLDTRUST AI • Customer Portal
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            Welcome back, {currentUser.name}!
          </h1>
          <p className="text-sm text-gray-600 mt-1.5 max-w-2xl leading-relaxed">
            Verify purity, calculate true intrinsic worth, and analyze jeweller deduction transparency before selling or buying old gold.
          </p>
        </div>

        <div className="flex items-center gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 shrink-0">
          <div className="text-left md:text-right">
            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Reference 24K Rate</p>
            <p className="text-lg md:text-xl font-bold text-[#14213D]">₹10,000 <span className="text-xs font-medium text-gray-500">/ g</span></p>
            <span className="text-[10px] font-semibold text-emerald-600">Indicative Market Price</span>
          </div>
          <button
            onClick={() => navigate('/rates')}
            className="p-3 rounded-2xl bg-white hover:bg-[#FAF8F2] text-[#14213D] hover:text-[#C9A44C] transition-all border border-gray-200 shadow-xs hover:shadow-md cursor-pointer shrink-0"
            title="View All Rates"
          >
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>

      {/* SECTION: FOUR MAIN FEATURE CARDS (2x2 BALANCED GRID ON DESKTOP) */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-4 px-1">
          <div>
            <h2 className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-wider">
              Transparency Tools
            </h2>
            <p className="text-xs text-gray-500">Select a feature to get started</p>
          </div>
          <span className="text-xs font-semibold text-[#8B6914] bg-[#C9A44C]/15 px-3 py-1 rounded-full">
            4 Core Modules
          </span>
        </div>

        {/* 2-Column Responsive Grid with Equal Widths: grid-cols-1 md:grid-cols-2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* CARD 1: SELL OLD GOLD (PRIMARY FEATURE) */}
          <div
            onClick={() => navigate('/sell')}
            className="group relative bg-white hover:bg-[#FAF8F2]/60 border-2 border-[#C9A44C]/40 hover:border-[#C9A44C] rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#C9A44C]/10 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#14213D] to-[#1e3a5f] border-2 border-[#C9A44C] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Scale size={28} className="text-[#E5D5A5]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#C9A44C] text-[#14213D] uppercase tracking-wider shadow-xs">
                    Primary Feature
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#C9A44C] group-hover:text-white flex items-center justify-center text-gray-400 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#14213D] transition-colors">
                Sell Old Gold
              </h3>
              <p className="text-sm text-gray-600 mt-2.5 leading-relaxed">
                Get a transparent valuation for your old gold jewellery with our guided 6-step workflow, net weight deduction analysis, and simulated AI check.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#8B6914] group-hover:text-[#C9A44C]">
              <span>Start 6-Step Valuation</span>
              <span className="group-hover:translate-x-1.5 transition-transform font-bold text-sm">→</span>
            </div>
          </div>

          {/* CARD 2: BUY NEW GOLD (COMING SOON) */}
          <div
            onClick={() => navigate('/buy')}
            className="group relative bg-white hover:bg-[#FAF8F2]/60 border-2 border-gray-200 hover:border-[#14213D]/60 rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#14213D]/5 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FAF8F2] to-[#E5D5A5]/40 border border-[#C9A44C]/40 flex items-center justify-center text-[#C9A44C] shadow-sm group-hover:scale-105 transition-transform shrink-0">
                  <Gem size={28} className="text-[#C9A44C]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-gray-100 text-gray-600 uppercase tracking-wider">
                    Coming Soon
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#14213D] group-hover:text-white flex items-center justify-center text-gray-400 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#14213D] transition-colors">
                Buy New Gold
              </h3>
              <p className="text-sm text-gray-600 mt-2.5 leading-relaxed">
                Explore gold jewellery with transparent purity and hallmark details. Curated collections with zero hidden cuts and verified digital authenticity certificates.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-600 group-hover:text-[#14213D]">
              <span>Preview Upcoming Collection</span>
              <span className="group-hover:translate-x-1.5 transition-transform font-bold text-sm">→</span>
            </div>
          </div>

          {/* CARD 3: VERIFY HUID */}
          <div
            onClick={() => navigate('/huid')}
            className="group relative bg-white hover:bg-[#FAF8F2]/60 border-2 border-gray-200 hover:border-emerald-500/60 rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-emerald-500/5 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-sm group-hover:scale-105 transition-transform shrink-0">
                  <ShieldCheck size={28} className="text-emerald-700" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                    BIS Hallmark
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center text-gray-400 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#14213D] transition-colors">
                Verify HUID
              </h3>
              <p className="text-sm text-gray-600 mt-2.5 leading-relaxed">
                Check hallmark and 6-digit HUID details of your jewellery. Look up hallmarking center records, jeweller registration, and stamping date.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
              <span>Verify 6-Digit Hallmark Number</span>
              <span className="group-hover:translate-x-1.5 transition-transform font-bold text-sm">→</span>
            </div>
          </div>

          {/* CARD 4: TODAY'S GOLD RATES */}
          <div
            onClick={() => navigate('/rates')}
            className="group relative bg-white hover:bg-[#FAF8F2]/60 border-2 border-gray-200 hover:border-amber-500/60 rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-amber-500/5 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shadow-sm group-hover:scale-105 transition-transform shrink-0">
                  <TrendingUp size={28} className="text-amber-700" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800 uppercase tracking-wider">
                    Live Rates
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center text-gray-400 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#14213D] transition-colors">
                Today's Gold Rates
              </h3>
              <p className="text-sm text-gray-600 mt-2.5 leading-relaxed">
                Stay updated with indicative gold prices across 24K, 22K, 20K, 18K and 14K purities. Compare 1g and 10g rates for informed selling decisions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-800">
              <span>View All Purity Rates</span>
              <span className="group-hover:translate-x-1.5 transition-transform font-bold text-sm">→</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: MY PROFILE & ACCOUNT HUB (FULL-WIDTH WIDE CARD BELOW 2x2 GRID) */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-wider">
            Your Account & Records
          </h2>
          <span className="text-xs text-gray-500">Valuations • Certificates • Settings</span>
        </div>

        <div
          onClick={() => navigate('/profile')}
          className="group relative bg-white hover:bg-[#FAF8F2]/60 border-2 border-gray-200 hover:border-[#14213D] rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden w-full"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5 min-w-0">
              <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-gradient-to-br from-[#14213D] to-[#1e3a5f] border-2 border-[#C9A44C] flex items-center justify-center text-[#E5D5A5] text-2xl md:text-3xl font-serif font-bold shadow-md shrink-0">
                {currentUser.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#14213D] transition-colors">
                    My Profile & Digital Vault
                  </h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                    <CheckCircle2 size={11} /> KYC Verified
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
                  Manage your personal account details, view past gold valuation records, and download generated valuation certificates.
                </p>
              </div>
            </div>

            {/* Quick shortcuts to tabs */}
            <div className="flex flex-wrap items-center gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-100">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/profile?tab=valuations');
                }}
                className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-[#C9A44C]/15 hover:text-[#8B6914] text-xs font-semibold text-gray-700 border border-gray-200 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>My Valuations</span>
                <span className="px-2 py-0.5 bg-white rounded-full text-[10px] font-bold text-gray-800 shadow-xs border border-gray-100">
                  {mockValuations.length}
                </span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/profile?tab=certificates');
                }}
                className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-[#C9A44C]/15 hover:text-[#8B6914] text-xs font-semibold text-gray-700 border border-gray-200 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>My Certificates</span>
                <span className="px-2 py-0.5 bg-white rounded-full text-[10px] font-bold text-gray-800 shadow-xs border border-gray-100">
                  {mockCertificates.length}
                </span>
              </button>

              <div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-[#14213D] group-hover:text-white flex items-center justify-center text-gray-500 transition-colors ml-auto lg:ml-0">
                <ChevronRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
