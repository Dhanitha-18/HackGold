import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Scale, Gem, ShieldCheck, TrendingUp, ChevronRight, User
} from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-3xl space-y-6 sm:space-y-8 animate-fade-in min-w-0">
      
      {/* 
        1. SHORT WELCOME HEADING (Centered)
      */}
      <div className="text-center pt-2 sm:pt-4 space-y-1.5">
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#14213D] tracking-tight leading-tight">
          What would you like to do?
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Your gold, valued with transparency.
        </p>
      </div>

      {/* 
        2. FOUR COMPACT FEATURE BOXES (2 × 2 Grid - Centered Design)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
        
        {/* CARD 1: SELL OLD GOLD */}
        <div
          onClick={() => navigate('/sell')}
          className="group bg-white hover:bg-[#FAF8F2] border border-gray-200/90 hover:border-[#C9A44C] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center h-[135px] sm:h-[140px]"
        >
          <div className="w-11 h-11 rounded-xl bg-[#FAF8F2] group-hover:bg-[#C9A44C]/15 border border-[#C9A44C]/30 flex items-center justify-center text-[#8B6914] mb-2.5 transition-colors">
            <Scale size={22} className="text-[#8B6914]" />
          </div>
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#14213D] group-hover:text-[#8B6914] transition-colors leading-snug">
            Sell Old Gold
          </h3>
          <p className="text-xs text-gray-500 mt-0.5 truncate max-w-full">
            Get transparent gold valuation
          </p>
        </div>

        {/* CARD 2: BUY NEW GOLD */}
        <div
          onClick={() => navigate('/buy')}
          className="group bg-white hover:bg-[#FAF8F2] border border-gray-200/90 hover:border-[#C9A44C] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center h-[135px] sm:h-[140px]"
        >
          <div className="w-11 h-11 rounded-xl bg-[#FAF8F2] group-hover:bg-[#C9A44C]/15 border border-[#C9A44C]/30 flex items-center justify-center text-[#8B6914] mb-2.5 transition-colors">
            <Gem size={22} className="text-[#8B6914]" />
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#14213D] group-hover:text-[#8B6914] transition-colors leading-snug">
              Buy New Gold
            </h3>
            <span className="text-[9px] font-semibold uppercase tracking-wider bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
              Coming Soon
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5 truncate max-w-full">
            Explore new jewellery
          </p>
        </div>

        {/* CARD 3: VERIFY HUID */}
        <div
          onClick={() => navigate('/huid')}
          className="group bg-white hover:bg-[#FAF8F2] border border-gray-200/90 hover:border-[#C9A44C] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center h-[135px] sm:h-[140px]"
        >
          <div className="w-11 h-11 rounded-xl bg-[#FAF8F2] group-hover:bg-[#C9A44C]/15 border border-[#C9A44C]/30 flex items-center justify-center text-[#8B6914] mb-2.5 transition-colors">
            <ShieldCheck size={22} className="text-[#8B6914]" />
          </div>
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#14213D] group-hover:text-[#8B6914] transition-colors leading-snug">
            Verify HUID
          </h3>
          <p className="text-xs text-gray-500 mt-0.5 truncate max-w-full">
            Check gold hallmark
          </p>
        </div>

        {/* CARD 4: GOLD RATES */}
        <div
          onClick={() => navigate('/rates')}
          className="group bg-white hover:bg-[#FAF8F2] border border-gray-200/90 hover:border-[#C9A44C] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center h-[135px] sm:h-[140px]"
        >
          <div className="w-11 h-11 rounded-xl bg-[#FAF8F2] group-hover:bg-[#C9A44C]/15 border border-[#C9A44C]/30 flex items-center justify-center text-[#8B6914] mb-2.5 transition-colors">
            <TrendingUp size={22} className="text-[#8B6914]" />
          </div>
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#14213D] group-hover:text-[#8B6914] transition-colors leading-snug">
            Gold Rates
          </h3>
          <p className="text-xs text-gray-500 mt-0.5 truncate max-w-full">
            View today's gold prices
          </p>
        </div>

      </div>

      {/* 
        3. MY PROFILE SECTION (Clean, compact box with all extra text removed)
      */}
      <div
        onClick={() => navigate('/profile')}
        className="group bg-white hover:bg-[#FAF8F2] border border-gray-200/90 hover:border-[#14213D]/40 rounded-2xl px-5 py-3.5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#14213D] text-[#E5D5A5] flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
            <User size={19} className="text-[#E5D5A5]" />
          </div>
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#14213D] group-hover:text-[#8B6914] transition-colors leading-none">
            My Profile
          </h3>
        </div>

        <ChevronRight size={18} className="text-gray-400 group-hover:text-[#14213D] group-hover:translate-x-0.5 transition-all shrink-0" />
      </div>

    </div>
  );
}
