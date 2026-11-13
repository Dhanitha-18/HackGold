import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Scale, Gem, ShieldCheck, TrendingUp, ArrowUpRight,
  Sparkles, CheckCircle2, ChevronRight, Clock, Award,
  FileText, Shield, ArrowRight, Zap, RefreshCw, Layers
} from 'lucide-react';
import { currentUser, mockValuations, mockCertificates } from '../data/mockData';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Services', count: 4, icon: Layers },
    { id: 'sell', label: 'Sell Old Gold', badge: 'Primary', icon: Scale },
    { id: 'huid', label: 'Verify HUID', badge: 'BIS', icon: ShieldCheck },
    { id: 'rates', label: 'Live Rates', badge: '₹10k', icon: TrendingUp },
    { id: 'buy', label: 'Buy New Gold', badge: 'Soon', icon: Gem },
    { id: 'vault', label: 'Digital Vault', count: mockCertificates.length, icon: FileText },
  ];

  const services = [
    {
      id: 'sell',
      category: 'PRIMARY SERVICE',
      eyebrow: 'CALCULATE TRUE INTRINSIC WORTH',
      title: 'Sell Old Gold Jewellery',
      description:
        'Get a 100% transparent valuation for your old gold ornaments. Guided 6-step workflow with net weight calculation, stone & wax deduction analysis, and multi-jeweller offer comparison.',
      features: [
        'Gross & Net Weight Calculation',
        'Stone & Enamel Deductions',
        'Simulated AI Purity Check',
        'Instant Digital Certificate'
      ],
      timing: 'Est. 3-5 Mins',
      timingBadge: 'Guided 6-Step Workflow',
      btnText: 'Start 6-Step Valuation',
      route: '/sell',
      primary: true,
      colorTheme: {
        gradient: 'from-[#14213D] via-[#1a2d52] to-[#0d1627]',
        badgeBg: 'bg-[#C9A44C]',
        badgeText: 'text-[#14213D]',
        accent: '#C9A44C',
        ring: 'ring-[#C9A44C]/30',
        cardBorder: 'border-[#C9A44C]/40 hover:border-[#C9A44C]',
        iconBg: 'bg-[#C9A44C]/20 border border-[#C9A44C]/40 text-[#E5D5A5]',
        ctaBg: 'bg-[#14213D] hover:bg-[#1a2b4f] text-[#FAF8F2]'
      },
      icon: Scale,
      subBadge: 'AI-Powered Valuation Engine'
    },
    {
      id: 'huid',
      category: 'BIS GOVT STANDARD',
      eyebrow: 'PURITY & LEGAL COMPLIANCE',
      title: 'Verify Hallmark & HUID',
      description:
        'Verify the 6-digit alphanumeric Hallmark Unique Identification (HUID) stamped on your jewellery against the Bureau of Indian Standards database to confirm authenticity and purity.',
      features: [
        'Hallmarking Center Registry',
        'Jeweller BIS License Check',
        'Purity Standard (916/750/585)',
        'Stamping Date Verification'
      ],
      timing: 'Instant Lookup',
      timingBadge: 'Official BIS Database',
      btnText: 'Verify 6-Digit HUID',
      route: '/huid',
      primary: false,
      colorTheme: {
        gradient: 'from-[#0b3825] via-[#124d35] to-[#062417]',
        badgeBg: 'bg-emerald-500',
        badgeText: 'text-white',
        accent: '#10b981',
        ring: 'ring-emerald-500/30',
        cardBorder: 'border-emerald-200/80 hover:border-emerald-500',
        iconBg: 'bg-emerald-400/20 border border-emerald-400/30 text-emerald-300',
        ctaBg: 'bg-emerald-800 hover:bg-emerald-900 text-white'
      },
      icon: ShieldCheck,
      subBadge: 'Govt BIS Assaying Registry'
    },
    {
      id: 'rates',
      category: 'LIVE BENCHMARK',
      eyebrow: 'DAILY MARKET RATES',
      title: "Today's Gold Reference Rates",
      description:
        'Track live indicative reference rates across 24K, 22K, 20K, 18K and 14K purities. Compare 1g and 10g prices so no jeweller or buyer can underquote your gold.',
      features: [
        '24K Pure Gold: ₹10,000/g',
        '22K Hallmark: ₹9,167/g',
        '18K Modern: ₹7,500/g',
        'Daily Market Trend Analysis'
      ],
      timing: 'Live Updated',
      timingBadge: '10:30 AM IST Benchmark',
      btnText: 'View All Purity Rates',
      route: '/rates',
      primary: false,
      colorTheme: {
        gradient: 'from-[#3e2709] via-[#5c3c0a] to-[#251704]',
        badgeBg: 'bg-amber-500',
        badgeText: 'text-white',
        accent: '#f59e0b',
        ring: 'ring-amber-500/30',
        cardBorder: 'border-amber-200/80 hover:border-amber-500',
        iconBg: 'bg-amber-400/20 border border-amber-400/30 text-amber-300',
        ctaBg: 'bg-[#8B6914] hover:bg-[#725510] text-white'
      },
      icon: TrendingUp,
      subBadge: 'Bullion Association Rates'
    },
    {
      id: 'buy',
      category: 'COMING SOON',
      eyebrow: 'CURATED JEWELLERY',
      title: 'Buy Certified New Gold',
      description:
        'Explore hallmark-certified gold jewellery with 100% transparent making charges, authentic certification, zero hidden cuts, and digital ownership verification.',
      features: [
        'Zero Hidden Making Charges',
        '100% HUID Certified Stock',
        'Direct Artisan Partnerships',
        'Digital Certificate Included'
      ],
      timing: 'Catalog Preview',
      timingBadge: 'Curated Artisan Network',
      btnText: 'Preview Upcoming Collection',
      route: '/buy',
      primary: false,
      colorTheme: {
        gradient: 'from-[#2b1649] via-[#3b2061] to-[#1a0c2e]',
        badgeBg: 'bg-purple-600',
        badgeText: 'text-white',
        accent: '#a855f7',
        ring: 'ring-purple-500/30',
        cardBorder: 'border-purple-200/80 hover:border-purple-500',
        iconBg: 'bg-purple-400/20 border border-purple-400/30 text-purple-300',
        ctaBg: 'bg-[#2b1649] hover:bg-[#3b2061] text-white'
      },
      icon: Gem,
      subBadge: 'Ethical Jewellery Marketplace'
    }
  ];

  const visibleServices = activeFilter === 'all'
    ? services
    : services.filter((s) => s.id === activeFilter);

  return (
    <div className="w-full max-w-[1520px] mx-auto space-y-6 animate-fade-in min-w-0">
      
      {/* 
        1. WELCOME HERO BANNER (Crisp & High-End)
      */}
      <div className="w-full bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9A44C] animate-pulse shrink-0" />
              <span className="text-xs font-bold text-[#8B6914] uppercase tracking-wider">
                GOLDTRUST AI • VERIFIED CUSTOMER PORTAL
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Welcome back, {currentUser.name}!
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl leading-relaxed">
              Verify purity, calculate true intrinsic gold value, and decode jeweller deduction cuts with transparent AI calculations.
            </p>
          </div>

          {/* Quick Rate & Action pill on banner */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 bg-[#FAF8F2] border border-[#C9A44C]/30 rounded-2xl p-4">
            <div className="text-left sm:text-right">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                24K Pure Gold (999)
              </span>
              <p className="text-xl sm:text-2xl font-bold text-[#14213D] leading-tight mt-0.5">
                ₹10,000 <span className="text-xs font-medium text-gray-500">/ gram</span>
              </p>
              <div className="flex items-center gap-1.5 mt-1 sm:justify-end text-[11px] font-semibold text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Live Bullion Reference</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/rates')}
              className="p-3 rounded-xl bg-white hover:bg-[#C9A44C] hover:text-[#14213D] text-[#14213D] transition-all border border-gray-200 shadow-xs cursor-pointer shrink-0"
              title="View full rate cards"
            >
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 
        2. HORIZONTAL SERVICE FILTER TABS (Directly inspired by reference UI weekday bar)
      */}
      <div className="w-full bg-white border border-gray-200/90 rounded-2xl p-2.5 shadow-xs overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === 'vault') {
                    navigate('/profile?tab=certificates');
                  } else {
                    setActiveFilter(tab.id);
                  }
                }}
                className={`
                  flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap
                  ${isActive
                    ? 'bg-[#14213D] text-white shadow-sm ring-2 ring-[#14213D]/20'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-200/60'
                  }
                `}
              >
                <Icon size={16} className={isActive ? 'text-[#C9A44C]' : 'text-gray-500'} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                    isActive ? 'bg-[#C9A44C] text-[#14213D]' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {tab.count}
                  </span>
                )}
                {tab.badge && (
                  <span className={`px-2 py-0.5 rounded-md text-[9px] uppercase tracking-wider font-extrabold ${
                    isActive ? 'bg-[#C9A44C] text-[#14213D]' : 'bg-[#C9A44C]/15 text-[#8B6914]'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 
        3. LIVE REFERENCE RATES STRIP (Market benchmark bar)
      */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-white border border-gray-200/90 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs text-gray-400 font-bold uppercase tracking-wider">
            <span>24K Pure Gold</span>
            <span className="text-emerald-700 font-extrabold text-[11px]">+0.42%</span>
          </div>
          <div className="text-xl font-bold text-gray-900 mt-1">
            ₹10,000 <span className="text-xs font-medium text-gray-500">/g</span>
          </div>
          <p className="text-[11px] text-gray-500 mt-1">99.9% Purity • 999 Fineness</p>
        </div>

        <div className="bg-white border border-gray-200/90 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs text-gray-400 font-bold uppercase tracking-wider">
            <span>22K Hallmark</span>
            <span className="text-emerald-700 font-extrabold text-[11px]">Standard</span>
          </div>
          <div className="text-xl font-bold text-gray-900 mt-1">
            ₹9,167 <span className="text-xs font-medium text-gray-500">/g</span>
          </div>
          <p className="text-[11px] text-gray-500 mt-1">91.6% Purity • BIS 916</p>
        </div>

        <div className="bg-white border border-gray-200/90 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs text-gray-400 font-bold uppercase tracking-wider">
            <span>18K Jewellery</span>
            <span className="text-gray-500 font-extrabold text-[11px]">Studded</span>
          </div>
          <div className="text-xl font-bold text-gray-900 mt-1">
            ₹7,500 <span className="text-xs font-medium text-gray-500">/g</span>
          </div>
          <p className="text-[11px] text-gray-500 mt-1">75.0% Purity • BIS 750</p>
        </div>

        <div className="bg-white border border-gray-200/90 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs text-gray-400 font-bold uppercase tracking-wider">
            <span>BIS Verified</span>
            <span className="text-emerald-700 font-extrabold text-[11px]">Govt Active</span>
          </div>
          <div className="text-xl font-bold text-gray-900 mt-1">
            1,420+ <span className="text-xs font-medium text-gray-500">Centers</span>
          </div>
          <p className="text-[11px] text-gray-500 mt-1">Assaying & Hallmarking Online</p>
        </div>
      </div>

      {/* 
        4. SECTION HEADER: TRANSPARENCY MODULES
      */}
      <div className="flex items-center justify-between px-1 pt-1">
        <div>
          <h2 className="text-sm sm:text-base font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
            <span>TRANSPARENCY & VALUATION MODULES</span>
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            {activeFilter === 'all'
              ? 'Showing all 4 primary modules'
              : `Showing selected filter: ${filterTabs.find(t => t.id === activeFilter)?.label || activeFilter}`
            }
          </p>
        </div>
        <div className="flex items-center gap-2">
          {activeFilter !== 'all' && (
            <button
              onClick={() => setActiveFilter('all')}
              className="text-xs text-[#C9A44C] font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              <RefreshCw size={12} /> View All
            </button>
          )}
          <span className="text-xs font-bold text-[#8B6914] bg-[#C9A44C]/15 border border-[#C9A44C]/30 px-3 py-1 rounded-full">
            {visibleServices.length} Active {visibleServices.length === 1 ? 'Module' : 'Modules'}
          </span>
        </div>
      </div>

      {/* 
        5. HORIZONTAL CARDS GRID (Exact Structure of Reference UI omsailuxurypg.in/mess)
        - 2 columns on desktop (grid-cols-1 xl:grid-cols-2)
        - Each card: Left media banner container + Right content details container
      */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
        {visibleServices.map((service) => {
          const Icon = service.icon;
          const theme = service.colorTheme;

          return (
            <div
              key={service.id}
              onClick={() => navigate(service.route)}
              className={`
                group bg-white rounded-2xl border-2 ${theme.cardBorder} shadow-xs hover:shadow-xl
                transition-all duration-300 cursor-pointer overflow-hidden flex flex-col sm:flex-row items-stretch
              `}
            >
              {/* LEFT MEDIA / VISUAL CONTAINER */}
              <div
                className={`
                  sm:w-52 lg:w-56 shrink-0 relative bg-gradient-to-br ${theme.gradient} p-5
                  flex flex-col justify-between items-start text-white overflow-hidden
                `}
              >
                {/* Background decorative circles */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -left-8 -top-8 w-28 h-28 rounded-full bg-white/5 pointer-events-none" />

                {/* Top Badge */}
                <div className="relative z-10 w-full flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider ${theme.badgeBg} ${theme.badgeText} shadow-xs`}>
                    {service.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-white/80 transition-colors">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Central Icon Illustration */}
                <div className="relative z-10 my-6 sm:my-auto self-center text-center">
                  <div className={`w-16 h-16 rounded-2xl ${theme.iconBg} flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} />
                  </div>
                  <p className="text-[11px] font-bold text-white/80 mt-3 tracking-wide">
                    {service.subBadge}
                  </p>
                </div>

                {/* Bottom Chip */}
                <div className="relative z-10 w-full pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/70">
                  <span className="flex items-center gap-1 font-semibold">
                    <Clock size={11} className="text-[#E5D5A5]" /> {service.timing}
                  </span>
                  <span className="font-bold text-[#E5D5A5]">Verified</span>
                </div>
              </div>

              {/* RIGHT CONTENT DETAILS CONTAINER */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between min-w-0 bg-white">
                <div>
                  {/* Eyebrow */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-extrabold text-[#8B6914] uppercase tracking-wider">
                      {service.eyebrow}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      {service.timingBadge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-[22px] font-bold text-gray-900 group-hover:text-[#14213D] transition-colors leading-tight mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Feature Checklist Tags */}
                  <div className="grid grid-cols-2 gap-1.5 mb-5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] font-medium text-gray-700">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-gray-500 hidden sm:inline-block">
                    Click to launch module
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(service.route);
                    }}
                    className={`
                      ml-auto px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs group-hover:shadow-md
                      ${theme.ctaBg}
                    `}
                  >
                    <span>{service.btnText}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 
        6. MY PROFILE & DIGITAL VAULT (Structured Horizontal Card)
      */}
      <div className="w-full bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left: Avatar + Account Meta */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-5 min-w-0 flex-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#14213D] to-[#1e3a5f] border-2 border-[#C9A44C] flex items-center justify-center text-[#E5D5A5] text-xl sm:text-2xl font-serif font-bold shadow-md shrink-0">
              {currentUser.name.charAt(0)}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap mb-1">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                  {currentUser.name}
                </h3>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                  <CheckCircle2 size={11} /> KYC Verified
                </span>
                <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  Customer ID: {currentUser.id}
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed max-w-2xl">
                Access your digital gold vault, past valuation certificates, hallmarking audit trails, and verified jeweller quotes.
              </p>
            </div>
          </div>

          {/* Right: Valuation and Certificate links */}
          <div className="flex flex-wrap items-center gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-100">
            <button
              onClick={() => navigate('/profile?tab=valuations')}
              className="px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-[#C9A44C]/15 hover:text-[#8B6914] text-xs font-semibold text-gray-700 border border-gray-200 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>My Valuations</span>
              <span className="px-2 py-0.5 bg-white rounded-full text-[10px] font-bold text-gray-800 border border-gray-200">
                {mockValuations.length}
              </span>
            </button>

            <button
              onClick={() => navigate('/profile?tab=certificates')}
              className="px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-[#C9A44C]/15 hover:text-[#8B6914] text-xs font-semibold text-gray-700 border border-gray-200 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>My Certificates</span>
              <span className="px-2 py-0.5 bg-white rounded-full text-[10px] font-bold text-gray-800 border border-gray-200">
                {mockCertificates.length}
              </span>
            </button>

            <button
              onClick={() => navigate('/profile')}
              className="px-4 py-2.5 rounded-xl bg-[#14213D] hover:bg-[#1e3a5f] text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Manage Profile</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
