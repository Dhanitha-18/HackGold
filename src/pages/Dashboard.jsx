import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Scale, Gem, ShieldCheck, TrendingUp, ChevronRight, User, ArrowUpRight
} from 'lucide-react';
import { mockGoldRates } from '../data/mockData';

export default function Dashboard() {
  const navigate = useNavigate();

  // Exactly 5 purity benchmark rates per gram for the compact rates panel
  const ratesList = [
    { purity: '24K', fineness: '999', price: '₹10,000' },
    { purity: '22K', fineness: '916', price: '₹9,167' },
    { purity: '20K', fineness: '833', price: '₹8,333' },
    { purity: '18K', fineness: '750', price: '₹7,500' },
    { purity: '14K', fineness: '585', price: '₹5,833' },
  ];

  return (
    <div className="w-full max-w-[960px] mx-auto py-2 sm:py-4 space-y-6 sm:space-y-7 animate-fade-in min-w-0">
      
      {/* 
        1. SHORT WELCOME HEADING
        - Clean, compact, zero clutter
      */}
      <div className="pt-1">
        <h1 className="font-serif text-2xl sm:text-[28px] font-bold text-[#14213D] tracking-tight leading-tight">
          What would you like to do?
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Your gold, valued with transparency.
        </p>
      </div>

      {/* 
        2. FOUR COMPACT FEATURE BOXES (2 × 2 Grid)
        - Main focus of the homepage
        - Small, compact, consistent card height (~120px-130px)
        - Minimal internal padding (16px–20px)
        - Light ivory / gold background with subtle borders and elegant hover
        - Entire card clickable
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
        
        {/* CARD 1: SELL OLD GOLD */}
        <div
          onClick={() => navigate('/sell')}
          className="group bg-white hover:bg-[#FAF8F2] border border-gray-200/90 hover:border-[#C9A44C] rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-between gap-3.5 h-[120px] sm:h-[128px]"
        >
          <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F2] group-hover:bg-[#C9A44C]/15 border border-[#C9A44C]/30 flex items-center justify-center text-[#8B6914] shrink-0 transition-colors">
              <Scale size={24} className="text-[#8B6914]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#14213D] group-hover:text-[#8B6914] transition-colors leading-snug">
                Sell Old Gold
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5 truncate">
                Get transparent gold valuation
              </p>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray-400 group-hover:text-[#8B6914] group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>

        {/* CARD 2: BUY NEW GOLD */}
        <div
          onClick={() => navigate('/buy')}
          className="group bg-white hover:bg-[#FAF8F2] border border-gray-200/90 hover:border-[#C9A44C] rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-between gap-3.5 h-[120px] sm:h-[128px]"
        >
          <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F2] group-hover:bg-[#C9A44C]/15 border border-[#C9A44C]/30 flex items-center justify-center text-[#8B6914] shrink-0 transition-colors">
              <Gem size={24} className="text-[#8B6914]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#14213D] group-hover:text-[#8B6914] transition-colors leading-snug">
                  Buy New Gold
                </h3>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">
                  Coming Soon
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5 truncate">
                Explore new jewellery
              </p>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray-400 group-hover:text-[#8B6914] group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>

        {/* CARD 3: VERIFY HUID */}
        <div
          onClick={() => navigate('/huid')}
          className="group bg-white hover:bg-[#FAF8F2] border border-gray-200/90 hover:border-[#C9A44C] rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-between gap-3.5 h-[120px] sm:h-[128px]"
        >
          <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F2] group-hover:bg-[#C9A44C]/15 border border-[#C9A44C]/30 flex items-center justify-center text-[#8B6914] shrink-0 transition-colors">
              <ShieldCheck size={24} className="text-[#8B6914]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#14213D] group-hover:text-[#8B6914] transition-colors leading-snug">
                Verify HUID
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5 truncate">
                Check gold hallmark
              </p>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray-400 group-hover:text-[#8B6914] group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>

        {/* CARD 4: GOLD RATES */}
        <div
          onClick={() => navigate('/rates')}
          className="group bg-white hover:bg-[#FAF8F2] border border-gray-200/90 hover:border-[#C9A44C] rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-between gap-3.5 h-[120px] sm:h-[128px]"
        >
          <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F2] group-hover:bg-[#C9A44C]/15 border border-[#C9A44C]/30 flex items-center justify-center text-[#8B6914] shrink-0 transition-colors">
              <TrendingUp size={24} className="text-[#8B6914]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#14213D] group-hover:text-[#8B6914] transition-colors leading-snug">
                Gold Rates
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5 truncate">
                View today's gold prices
              </p>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray-400 group-hover:text-[#8B6914] group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>

      </div>

      {/* 
        3. TODAY'S GOLD RATES PANEL (Exactly ONE compact panel)
        - Clean table/grid of 24K, 22K, 20K, 18K, 14K
        - Clearly labelled illustrative sample values
        - Link to View All Rates
      */}
      <div className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 shadow-xs w-full">
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-gray-100">
          <div>
            <h2 className="font-serif text-base sm:text-lg font-bold text-[#14213D]">
              Today's Gold Rates
            </h2>
            <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">
              Indicative reference rates per gram (sample values)
            </p>
          </div>
          <button
            onClick={() => navigate('/rates')}
            className="text-xs font-bold text-[#8B6914] hover:text-[#C9A44C] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View All Rates</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* 5-Column Purity Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4">
          {ratesList.map((item) => (
            <div
              key={item.purity}
              className="bg-[#FAF8F2] border border-[#C9A44C]/20 rounded-xl p-3 text-center"
            >
              <span className="text-xs font-bold text-gray-500 block uppercase">
                {item.purity} <span className="text-[10px] text-gray-400 font-normal">({item.fineness})</span>
              </span>
              <p className="text-base sm:text-lg font-bold text-[#14213D] mt-1">
                {item.price}
              </p>
              <span className="text-[10px] text-gray-400 font-medium block mt-0.5">
                per gram
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 
        4. MY PROFILE SECTION (Compact Card Below Rates)
        - Navigates to /profile
        - Direct access to Personal Details, My Valuations, My Certificates, etc.
      */}
      <div
        onClick={() => navigate('/profile')}
        className="group bg-white hover:bg-[#FAF8F2] border border-gray-200/90 hover:border-[#14213D]/40 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer w-full"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-[#14213D] text-[#E5D5A5] flex items-center justify-center font-bold text-base shadow-xs shrink-0">
              <User size={22} className="text-[#E5D5A5]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#14213D] group-hover:text-[#8B6914] transition-colors leading-snug">
                My Profile
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5">
                Manage your personal details and gold records.
              </p>
              
              {/* Quick Access Badges inside My Profile */}
              <div className="flex items-center gap-2 mt-2 flex-wrap text-[11px] text-gray-500">
                <span className="px-2 py-0.5 bg-gray-100 rounded-md font-medium">Personal Details</span>
                <span className="text-gray-300">•</span>
                <span className="px-2 py-0.5 bg-gray-100 rounded-md font-medium">My Valuations</span>
                <span className="text-gray-300">•</span>
                <span className="px-2 py-0.5 bg-gray-100 rounded-md font-medium">My Certificates</span>
                <span className="text-gray-300">•</span>
                <span className="px-2 py-0.5 bg-gray-100 rounded-md font-medium">Settings</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 group-hover:text-[#14213D] shrink-0 self-end sm:self-center transition-colors">
            <span>Open Profile</span>
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>

    </div>
  );
}
