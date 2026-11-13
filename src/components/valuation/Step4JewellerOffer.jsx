import React, { useState } from 'react';
import { Info, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { Card, InfoCard } from '../../components/common/Card';
import Button from '../../components/common/Button';
import {
  calculateNetGoldWeight,
  calculatePureGoldEquivalent,
  calculateIntrinsicValue,
  calculateOfferDifference,
  formatINR,
  formatWeight,
} from '../../utils/valuation';

// Sample demo offer data
const DEMO_OFFER = {
  jewellersQuotedValue: 148500,
  deductions: [
    { label: 'Stone / Non-gold Weight Deduction', amount: 2000, explanation: 'Weight of embedded stones removed from net calculation.' },
    { label: 'Refining & Processing Charges', amount: 3000, explanation: 'Cost of melting, purifying and assaying the gold.' },
    { label: 'Wastage Charges', amount: 2000, explanation: 'Metal loss during the refining process, typically 1–3%.' },
  ],
  finalOfferedAmount: 143500,
  jeweller: {
    name: 'Shree Ram Jewellers (Demo)',
    address: 'MG Road, Bengaluru',
    licenceNo: 'BIS-KA-DEMO-0012',
  },
};

function DeductionRow({ label, amount, explanation }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(v => !v)}
        className="w-full flex items-center justify-between p-3.5 text-sm hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-700 text-left">{label}</span>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-red-600 font-semibold">− {formatINR(amount)}</span>
          {expanded ? <ChevronUp size={14} className="text-gray-400" /> : <ChevronDown size={14} className="text-gray-400" />}
        </div>
      </button>
      {expanded && (
        <div className="px-3.5 pb-3 bg-gray-50/50 border-t border-gray-100">
          <p className="text-xs text-gray-500 leading-relaxed pt-2">{explanation}</p>
        </div>
      )}
    </div>
  );
}

export default function Step4JewellerOffer({ data }) {
  const grossWeight = parseFloat(data.grossWeight) || 0;
  const nonGoldWeight = parseFloat(data.nonGoldWeight) || 0;
  const goldRate = parseFloat(data.goldRatePerGram) || 0;
  const netGoldWeight = calculateNetGoldWeight(grossWeight, nonGoldWeight);
  const pureGoldEquivalent = calculatePureGoldEquivalent(netGoldWeight, data.purity);
  const intrinsicValue = calculateIntrinsicValue(pureGoldEquivalent, goldRate);
  const diff = calculateOfferDifference(intrinsicValue, DEMO_OFFER.jewellersQuotedValue);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-gray-800 font-serif">Review the jeweller's offer</h2>
        <p className="text-gray-500 text-sm mt-1">Compare your estimated gold value with the jeweller's quoted offer.</p>
      </div>

      <InfoCard variant="gold">
        <div className="flex items-start gap-2">
          <Info size={14} className="shrink-0 mt-0.5 text-[#8B6914]" />
          <p className="text-xs text-[#8B6914]">
            <strong>DEMO DATA:</strong> The jeweller's offer shown below is sample data for UI demonstration. 
            In a live session, this will be filled by the jeweller through their portal.
          </p>
        </div>
      </InfoCard>

      {/* Comparison cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-5 border-2 border-green-100">
          <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Your Estimated Gold Value</p>
          <p className="text-3xl font-bold text-green-700">{formatINR(intrinsicValue) || '—'}</p>
          <div className="mt-3 space-y-1 text-xs text-gray-500">
            <p>Net gold weight: {formatWeight(netGoldWeight)}</p>
            <p>Purity: {data.purity || '—'}</p>
            <p>Rate: ₹{goldRate.toLocaleString('en-IN')}/g (24K)</p>
          </div>
          <p className="mt-3 text-[10px] text-gray-400 italic">Based on your inputs — estimated intrinsic value</p>
        </Card>

        <Card className="p-5 border-2 border-blue-100">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Jeweller's Quoted Value</p>
          <p className="text-3xl font-bold text-blue-700">{formatINR(DEMO_OFFER.jewellersQuotedValue)}</p>
          <div className="mt-3 space-y-1 text-xs text-gray-500">
            <p>Gross weight: {formatWeight(grossWeight)}</p>
            <p>Tested purity: {data.purity || 'As stated'}</p>
            <p>Jeweller: {DEMO_OFFER.jeweller.name}</p>
          </div>
          {diff > 0 && (
            <div className="mt-3 bg-amber-50 rounded-lg p-2">
              <p className="text-xs text-amber-700 font-semibold">
                {diff.toFixed(1)}% lower than estimated intrinsic value
              </p>
            </div>
          )}
        </Card>
      </div>

      {/* Deduction breakdown */}
      <Card className="p-5">
        <h3 className="font-bold text-gray-800 text-sm mb-4">Deduction Breakdown</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2 text-sm border-b border-gray-100">
            <span className="text-gray-600">Jeweller's Quoted Price</span>
            <span className="font-semibold text-gray-800">{formatINR(DEMO_OFFER.jewellersQuotedValue)}</span>
          </div>
          {DEMO_OFFER.deductions.map((d, i) => (
            <DeductionRow key={i} {...d} />
          ))}
          <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-lg mt-3">
            <span className="text-sm font-bold text-gray-800">Final Offered Amount</span>
            <span className="text-lg font-bold text-[#14213D]">{formatINR(DEMO_OFFER.finalOfferedAmount)}</span>
          </div>
        </div>
      </Card>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm border border-gray-200 rounded-lg text-gray-600 hover:border-[#C9A44C] hover:text-[#C9A44C] transition-all">
          <MessageSquare size={15} />
          Request Clarification
          <span className="text-[10px] text-gray-400">(Demo — not connected)</span>
        </button>
      </div>

      <InfoCard variant="info">
        <div className="flex items-start gap-2">
          <Info size={14} className="shrink-0 mt-0.5 text-blue-600" />
          <p className="text-xs text-blue-800 leading-relaxed">
            A lower offer compared to estimated intrinsic value is not always dishonest — legitimate deductions
            include refining charges, wastage, and market liquidity. Review all disclosed deductions carefully
            before accepting or declining.
          </p>
        </div>
      </InfoCard>
    </div>
  );
}
