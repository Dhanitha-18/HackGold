import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, AlertTriangle, Info, Sparkles, Brain } from 'lucide-react';
import { Card, InfoCard } from '../../components/common/Card';
import { AIStatusBadge } from '../../components/common/StatusBadge';
import {
  calculateNetGoldWeight,
  calculatePureGoldEquivalent,
  calculateIntrinsicValue,
  calculateOfferDifference,
  formatINR,
} from '../../utils/valuation';

const DEMO_JEWELLER_OFFER = 143500;
const DEMO_QUOTED = 148500;

function AICheckRow({ label, status, detail }) {
  const icons = {
    'Verified': <CheckCircle size={15} className="text-green-500 shrink-0" />,
    'Consistent': <CheckCircle size={15} className="text-green-500 shrink-0" />,
    'Missing': <AlertTriangle size={15} className="text-amber-500 shrink-0" />,
    'Needs Review': <AlertCircle size={15} className="text-orange-500 shrink-0" />,
    'Incomplete': <AlertTriangle size={15} className="text-amber-500 shrink-0" />,
  };

  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
      {icons[status] || <Info size={15} className="text-gray-400 shrink-0" />}
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-gray-800">{label}</span>
          <AIStatusBadge status={status} />
        </div>
        {detail && <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{detail}</p>}
      </div>
    </div>
  );
}

export default function Step5AICheck({ data }) {
  const [analyzing, setAnalyzing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnalyzing(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const grossWeight = parseFloat(data.grossWeight) || 0;
  const nonGoldWeight = parseFloat(data.nonGoldWeight) || 0;
  const goldRate = parseFloat(data.goldRatePerGram) || 0;
  const netGoldWeight = calculateNetGoldWeight(grossWeight, nonGoldWeight);
  const pureGoldEquivalent = calculatePureGoldEquivalent(netGoldWeight, data.purity);
  const intrinsicValue = calculateIntrinsicValue(pureGoldEquivalent, goldRate);
  const diff = intrinsicValue ? calculateOfferDifference(intrinsicValue, DEMO_JEWELLER_OFFER) : 15.1;

  const checks = [
    {
      label: 'Calculation Consistency',
      status: 'Consistent',
      detail: 'Net weight, purity factor, and rate multiplication are mathematically consistent.',
    },
    {
      label: 'Weight Information',
      status: data.grossWeight ? 'Verified' : 'Missing',
      detail: data.grossWeight
        ? `Gross weight (${data.grossWeight}g) and non-gold weight (${data.nonGoldWeight || 0}g) provided.`
        : 'Gross weight not entered. Net gold weight cannot be reliably calculated.',
    },
    {
      label: 'Purity Evidence Status',
      status: data.testingMethod && data.testingMethod !== 'Not Yet Tested' ? 'Verified' : 'Needs Review',
      detail: data.testingMethod && data.testingMethod !== 'Not Yet Tested'
        ? `Purity based on: ${data.testingMethod}. This provides a basis for the purity claim.`
        : 'No testing method provided. Purity figure is unverified and should not be treated as confirmed.',
    },
    {
      label: 'Deduction Explanation Status',
      status: 'Consistent',
      detail: 'All three deductions (stone deduction, refining, wastage) have explanations provided.',
    },
    {
      label: 'Offer vs. Estimated Value',
      status: diff > 20 ? 'Needs Review' : 'Consistent',
      detail: `Jeweller's offer is ${diff.toFixed(1)}% lower than estimated intrinsic value.${diff > 20 ? ' This difference is above typical ranges — review deductions carefully.' : ' This is within a typical range for processing deductions.'}`,
    },
  ];

  if (analyzing) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A44C]/20 to-[#C9A44C]/5 flex items-center justify-center">
            <Brain size={28} className="text-[#C9A44C] animate-pulse" />
          </div>
          <div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-[#C9A44C] flex items-center justify-center">
            <Sparkles size={10} className="text-white" />
          </div>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-gray-800 text-base">Running Transparency Check…</h3>
          <p className="text-gray-500 text-sm mt-1">Reviewing your valuation inputs and offer data</p>
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-2 h-2 bg-[#C9A44C] rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Brain size={18} className="text-[#C9A44C]" />
          <h2 className="text-xl font-bold text-gray-800 font-serif">Your valuation transparency check</h2>
        </div>
        <p className="text-gray-500 text-sm">AI-assisted review of your valuation — <strong>DEMO OUTPUT</strong></p>
      </div>

      <InfoCard variant="warning">
        <div className="flex items-start gap-2">
          <AlertTriangle size={14} className="shrink-0 mt-0.5 text-amber-600" />
          <p className="text-xs text-amber-800">
            <strong>Demo Analysis Only:</strong> This AI review is simulated for demonstration purposes.
            Actual AI analysis will be integrated in a later stage. This output does not represent real verification,
            and cannot independently prove gold purity or detect fraud from photographs.
          </p>
        </div>
      </InfoCard>

      {/* Overall score */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800 text-sm">Overall Review Summary</h3>
          <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 text-xs font-bold rounded-full">
            Mostly Consistent
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
          <div className="h-2 rounded-full bg-gradient-to-r from-[#C9A44C] to-green-500" style={{ width: '72%' }} />
        </div>
        <p className="text-xs text-gray-500">72 / 100 — Good transparency level based on available information</p>
      </Card>

      {/* Check items */}
      <Card className="p-5">
        <h3 className="font-bold text-gray-800 text-sm mb-3">Transparency Checklist</h3>
        <div>
          {checks.map((check, i) => (
            <AICheckRow key={i} {...check} />
          ))}
        </div>
      </Card>

      {/* AI Insights */}
      <Card className="p-5 border border-[#C9A44C]/20 bg-gradient-to-br from-[#C9A44C]/3 to-transparent">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-[#C9A44C]" />
          <h3 className="font-bold text-gray-800 text-sm">AI Insights</h3>
          <span className="text-[10px] bg-[#C9A44C]/15 text-[#8B6914] px-2 py-0.5 rounded-full font-semibold">DEMO</span>
        </div>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3.5 border border-gray-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              💡 The jeweller's offer is <strong>{diff.toFixed(1)}% lower</strong> than the estimated intrinsic gold value.
              This difference is {diff > 20 ? 'above the typical range' : 'within a typical range'} for standard
              refining and processing deductions. <strong>Review the disclosed deductions and ask the jeweller for
              written clarification before accepting the offer.</strong>
            </p>
          </div>
          <div className="bg-white rounded-lg p-3.5 border border-gray-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              📋 {data.testingMethod && data.testingMethod !== 'Not Yet Tested'
                ? `Purity was verified using "${data.testingMethod}". This provides a credible basis for the purity claim.`
                : 'Purity has not been independently tested. Consider requesting an XRF test before finalising the transaction.'
              }
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
