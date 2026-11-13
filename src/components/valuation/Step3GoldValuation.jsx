import React from 'react';
import { Info, Edit3, TrendingUp } from 'lucide-react';
import { Input } from '../../components/common/FormFields';
import { Card, InfoCard } from '../../components/common/Card';
import {
  calculateNetGoldWeight,
  calculatePureGoldEquivalent,
  calculateIntrinsicValue,
  formatINR,
  formatWeight,
} from '../../utils/valuation';

function CalcRow({ label, value, highlight = false, bordered = false, unit = '' }) {
  return (
    <div className={`flex items-center justify-between py-2.5 ${bordered ? 'border-b border-gray-100' : ''}`}>
      <span className={`text-sm ${highlight ? 'font-bold text-gray-800' : 'text-gray-600'}`}>{label}</span>
      <span className={`text-sm font-semibold ${highlight ? 'text-[#C9A44C] text-base' : 'text-gray-800'}`}>
        {value}{unit}
      </span>
    </div>
  );
}

export default function Step3GoldValuation({ data, onChange }) {
  const grossWeight = parseFloat(data.grossWeight) || 0;
  const nonGoldWeight = parseFloat(data.nonGoldWeight) || 0;
  const goldRate = parseFloat(data.goldRatePerGram) || 0;
  const netGoldWeight = calculateNetGoldWeight(grossWeight, nonGoldWeight);
  const pureGoldEquivalent = calculatePureGoldEquivalent(netGoldWeight, data.purity);
  const intrinsicValue = calculateIntrinsicValue(pureGoldEquivalent, goldRate);
  const karat = parseInt(data.purity) || 0;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-gray-800 font-serif">Understand your gold's estimated value</h2>
        <p className="text-gray-500 text-sm mt-1">Review the valuation calculation based on your inputs.</p>
      </div>

      {/* Gold rate input */}
      <div className="bg-[#14213D] rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={16} className="text-[#C9A44C]" />
          <h3 className="text-white font-semibold text-sm">Reference Gold Rate</h3>
        </div>
        <div className="flex items-center gap-3">
          <Input
            type="number"
            step="100"
            min="0"
            value={data.goldRatePerGram}
            onChange={(e) => onChange({ goldRatePerGram: e.target.value })}
            placeholder="e.g., 10000"
            className="flex-1"
          />
          <span className="text-gray-400 text-sm whitespace-nowrap">₹ / gram (24K)</span>
        </div>
        <div className="flex items-start gap-2 mt-3">
          <Edit3 size={12} className="text-[#E5D5A5] shrink-0 mt-0.5" />
          <p className="text-[#E5D5A5] text-xs leading-relaxed">
            This is an editable reference rate for prototype purposes. The actual rate will be sourced from a verified
            market data provider in a later stage. <strong>Do not treat this as a live market price.</strong>
          </p>
        </div>
      </div>

      {/* Calculation breakdown */}
      <Card className="p-5">
        <h3 className="font-bold text-gray-800 text-sm mb-4 flex items-center gap-2">
          <span className="w-5 h-5 rounded bg-[#C9A44C]/15 flex items-center justify-center">
            <span className="text-[#C9A44C] text-[10px] font-bold">=</span>
          </span>
          Valuation Breakdown
        </h3>

        <div className="space-y-0 divide-y divide-gray-50">
          <CalcRow label="Gross Jewellery Weight" value={formatWeight(grossWeight)} bordered />
          <CalcRow label="Non-Gold Weight (Stones / Fittings)" value={`− ${formatWeight(nonGoldWeight)}`} bordered />
          <CalcRow label="Net Gold Weight" value={formatWeight(netGoldWeight)} highlight bordered />
          <CalcRow label="Gold Purity" value={data.purity || '—'} bordered />
          <CalcRow
            label={`Pure Gold Equivalent (${netGoldWeight.toFixed(2)}g × ${karat}/24)`}
            value={formatWeight(pureGoldEquivalent)}
            bordered
          />
          <CalcRow label="Reference Rate (24K)" value={goldRate ? `₹${goldRate.toLocaleString('en-IN')}/g` : '—'} bordered />
          <div className="pt-3 mt-1">
            <div className="flex items-center justify-between bg-gradient-to-r from-[#C9A44C]/10 to-transparent rounded-xl p-4">
              <span className="text-sm font-bold text-gray-800">Estimated Intrinsic Gold Value</span>
              <span className="text-2xl font-bold text-[#C9A44C]">
                {intrinsicValue ? formatINR(intrinsicValue) : '—'}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Example demo notice */}
      {!data.grossWeight && !data.goldRatePerGram && (
        <div className="bg-gray-50 rounded-xl p-4 border border-dashed border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            💡 <strong>Demo example:</strong> Gross weight 20g, Non-gold 2g, Purity 22K, Rate ₹10,000/g →
            Net 18g × 22/24 = 16.5g pure gold → Value = ₹1,65,000
          </p>
        </div>
      )}

      {/* Disclaimer */}
      <InfoCard variant="warning">
        <div className="flex items-start gap-2">
          <Info size={14} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs leading-relaxed">
            <strong>This is an estimated intrinsic gold value, not a guaranteed selling price.</strong>{' '}
            Actual jeweller offers may differ due to refining charges, wastage, making charges, and other market factors.
            All values shown are illustrative and based on the data you have entered.
          </p>
        </div>
      </InfoCard>
    </div>
  );
}
