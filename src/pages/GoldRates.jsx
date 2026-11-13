import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Clock, Info, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, InfoCard } from '../components/common/Card';
import Button from '../components/common/Button';
import { mockGoldRates } from '../data/mockData';
import { formatINR } from '../utils/valuation';

export default function GoldRates() {
  const navigate = useNavigate();
  const [rates, setRates] = useState(mockGoldRates);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('Today, 10:30 AM IST');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated('Just now (Indicative)');
    }, 600);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-bold text-gray-800">Today's Gold Rates</h1>
            <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
              <Clock size={13} className="text-[#C9A44C]" />
              Updated: <span className="font-medium text-gray-700">{lastUpdated}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Button
            variant="outline"
            size="sm"
            icon={RefreshCw}
            loading={isRefreshing}
            onClick={handleRefresh}
          >
            Refresh Rates
          </Button>
          <Button
            variant="gold"
            size="sm"
            onClick={() => navigate('/sell')}
          >
            Valuate at These Rates
          </Button>
        </div>
      </div>

      {/* Indicative Rates Disclaimer Card */}
      <InfoCard variant="gold">
        <div className="flex items-start gap-2.5">
          <Info size={16} className="text-[#8B6914] shrink-0 mt-0.5" />
          <div className="text-xs text-[#8B6914] leading-relaxed">
            <span className="font-bold">Illustrative Sample Rates:</span> Gold prices shown here are indicative reference rates for prototype demonstration. Actual retail buying and selling prices may vary by jeweller, city taxes, hallmarking fees, and live bullion market conditions.
          </div>
        </div>
      </InfoCard>

      {/* Rates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rates.map((item, idx) => {
          const isPrimary = idx === 0 || idx === 1; // 24K and 22K
          return (
            <Card
              key={item.purity}
              className={`p-5 relative transition-all duration-300 hover:shadow-md ${
                isPrimary ? 'border-[#C9A44C]/30 bg-gradient-to-b from-[#FAF8F2]/60 to-white' : ''
              }`}
            >
              {isPrimary && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#C9A44C]/15 text-[#8B6914] text-[10px] font-bold">
                    <Sparkles size={10} /> Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#C9A44C]" />
                <h3 className="font-serif font-bold text-lg text-gray-900">{item.purity}</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">{item.fineness}</p>

              <div className="space-y-3 pt-2 border-t border-gray-100">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-medium text-gray-500">1 Gram</span>
                  <div className="text-right">
                    <span className="text-xl font-bold text-[#14213D]">{formatINR(item.pricePerGram)}</span>
                    <span className="block text-[10px] font-semibold text-emerald-600">{item.change}</span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between pt-2 border-t border-dashed border-gray-100">
                  <span className="text-xs font-medium text-gray-500">10 Grams (1 Tola)</span>
                  <span className="text-base font-bold text-[#C9A44C]">{formatINR(item.pricePer10Gram)}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-[11px] text-gray-500 line-clamp-2">{item.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Market Guidance Card */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#14213D]/10 flex items-center justify-center shrink-0">
            <TrendingUp size={24} className="text-[#14213D]" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm">Selling Your Gold Today?</h3>
            <p className="text-xs text-gray-600 mt-1 max-w-xl leading-relaxed">
              Before taking your gold to a retail shop, calculate the true pure-gold equivalent weight and see how much should be deducted for stone weight vs refining charges.
            </p>
          </div>
        </div>
        <Button
          variant="gold"
          size="md"
          className="whitespace-nowrap shrink-0 w-full md:w-auto"
          onClick={() => navigate('/sell')}
        >
          Start Valuation Workflow
        </Button>
      </div>
    </div>
  );
}
