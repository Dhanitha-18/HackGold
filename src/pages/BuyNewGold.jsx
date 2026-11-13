import React from 'react';
import { ArrowLeft, Sparkles, ShieldCheck, Gem, BellRing } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

export default function BuyNewGold() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in pb-12">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/dashboard')}
          className="p-2 rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-xl md:text-2xl font-serif font-bold text-gray-800">Buy New Gold</h1>
          <p className="text-xs text-gray-500">Explore hallmarked jewellery with verified purity</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm text-center relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#C9A44C]/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#14213D]/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-md mx-auto space-y-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FAF8F2] to-[#E5D5A5]/30 border border-[#C9A44C]/30 flex items-center justify-center mx-auto shadow-inner">
            <Gem size={38} className="text-[#C9A44C] animate-pulse" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A44C]/15 border border-[#C9A44C]/30 text-[#8B6914] text-xs font-bold uppercase tracking-wider">
            <Sparkles size={12} /> Coming Soon
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
            Transparent Gold Buying is on its Way
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            We are curating trusted jewellery partners where every piece comes with an indisputable BIS hallmark, pre-verified XRF digital records, and 100% price breakdown transparency.
          </p>

          <div className="pt-2 pb-4 grid grid-cols-2 gap-3 text-left">
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-800 mb-1">
                <ShieldCheck size={14} className="text-[#16865B]" /> Verified Purity
              </div>
              <p className="text-[11px] text-gray-500">Only BIS 6-digit HUID stamped jewellery items.</p>
            </div>
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-800 mb-1">
                <Gem size={14} className="text-[#C9A44C]" /> Zero Hidden Cuts
              </div>
              <p className="text-[11px] text-gray-500">Complete itemization of making charges & wastage.</p>
            </div>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="gold"
              size="lg"
              icon={BellRing}
              onClick={() => alert('[DEMO] You will be notified as soon as Buy New Gold launches!')}
            >
              Notify Me at Launch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/sell')}
            >
              Sell Old Gold Instead
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
