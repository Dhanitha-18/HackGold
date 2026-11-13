import React from 'react';
import { Download, Eye, QrCode, Shield, CheckCircle2, Gem } from 'lucide-react';
import { Card } from '../../components/common/Card';
import Button from '../../components/common/Button';
import {
  calculateNetGoldWeight,
  calculatePureGoldEquivalent,
  calculateIntrinsicValue,
  formatINR,
  formatWeight,
  formatDate,
} from '../../utils/valuation';
import { currentUser } from '../../data/mockData';

const DEMO_DEDUCTIONS = [
  { label: 'Stone Weight Deduction', amount: 2000 },
  { label: 'Refining Charges', amount: 3000 },
  { label: 'Wastage Charges', amount: 2000 },
];

function SummaryRow({ label, value, highlight = false }) {
  return (
    <div className={`flex justify-between items-center py-2 ${highlight ? 'border-t border-gray-200 mt-1 pt-3' : ''}`}>
      <span className={`text-xs ${highlight ? 'font-bold text-gray-800' : 'text-gray-500'}`}>{label}</span>
      <span className={`text-xs font-semibold ${highlight ? 'text-[#C9A44C] text-sm' : 'text-gray-800'}`}>{value}</span>
    </div>
  );
}

export default function Step6ReviewCertificate({ data, transactionId, onViewValuations, onDownload }) {
  const grossWeight = parseFloat(data.grossWeight) || 20;
  const nonGoldWeight = parseFloat(data.nonGoldWeight) || 2;
  const goldRate = parseFloat(data.goldRatePerGram) || 10000;
  const purity = data.purity || '22K';
  const netGoldWeight = calculateNetGoldWeight(grossWeight, nonGoldWeight);
  const pureGoldEquivalent = calculatePureGoldEquivalent(netGoldWeight, purity);
  const intrinsicValue = calculateIntrinsicValue(pureGoldEquivalent, goldRate);

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle2 size={18} className="text-green-500" />
          <h2 className="text-xl font-bold text-gray-800 font-serif">Your gold valuation summary</h2>
        </div>
        <p className="text-gray-500 text-sm">Review your complete valuation details before downloading the certificate.</p>
      </div>

      {/* Certificate preview */}
      <div className="relative border-2 border-[#C9A44C]/30 rounded-2xl overflow-hidden">
        {/* Certificate header */}
        <div className="bg-gradient-to-br from-[#14213D] to-[#1e3a5f] px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#C9A44C] flex items-center justify-center">
                <Gem size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm tracking-wide">GOLDTRUST AI</h3>
                <p className="text-[#E5D5A5] text-[10px] tracking-widest uppercase">Gold Valuation Certificate</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#E5D5A5] text-[10px]">Certificate ID</p>
              <p className="text-white font-mono text-xs font-bold">CERT-{transactionId}</p>
              <p className="text-gray-400 text-[10px] mt-0.5">Issued: {formatDate(today)}</p>
            </div>
          </div>
        </div>

        {/* DEMO watermark */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 -rotate-12 opacity-10 pointer-events-none">
          <span className="text-6xl font-black text-gray-800 tracking-widest">DEMO</span>
        </div>

        {/* Certificate body */}
        <div className="bg-[#FAF8F2] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Customer & Jewellery details */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <Shield size={12} /> Customer Details
                </h4>
                <SummaryRow label="Full Name" value={currentUser.name} />
                <SummaryRow label="Customer ID" value={currentUser.id} />
                <SummaryRow label="Contact" value={currentUser.phone} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Jewellery Details</h4>
                <SummaryRow label="Type" value={data.jewelleryType || 'Necklace'} />
                <SummaryRow label="Description" value={data.description || 'Traditional gold jewellery'} />
                <SummaryRow label="HUID" value={data.huid || 'Not provided'} />
                <SummaryRow label="Hallmarked" value={data.isHallmarked ? 'Yes' : 'Not confirmed'} />
              </div>
            </div>

            {/* Valuation details */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Weight & Purity</h4>
                <SummaryRow label="Gross Weight" value={formatWeight(grossWeight)} />
                <SummaryRow label="Non-Gold Weight" value={formatWeight(nonGoldWeight)} />
                <SummaryRow label="Net Gold Weight" value={formatWeight(netGoldWeight)} />
                <SummaryRow label="Purity" value={purity} />
                <SummaryRow label="Testing Method" value={data.testingMethod || 'XRF Test'} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Valuation</h4>
                <SummaryRow label="Reference Rate (24K)" value={`₹${goldRate.toLocaleString('en-IN')}/g`} />
                <SummaryRow label="Pure Gold Equiv." value={formatWeight(pureGoldEquivalent)} />
                <SummaryRow label="Est. Intrinsic Value" value={formatINR(intrinsicValue)} />
              </div>
            </div>
          </div>

          {/* Deductions */}
          <div className="border-t border-gray-200 mt-5 pt-4">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Jeweller's Offer & Deductions (Demo)</h4>
            <div className="space-y-1">
              <SummaryRow label="Quoted Price" value={formatINR(148500)} />
              {DEMO_DEDUCTIONS.map((d, i) => (
                <SummaryRow key={i} label={`− ${d.label}`} value={`−${formatINR(d.amount)}`} />
              ))}
              <SummaryRow label="Final Offered Amount" value={formatINR(143500)} highlight />
            </div>
          </div>

          {/* AI Review */}
          <div className="bg-green-50 border border-green-100 rounded-lg p-3.5 mt-4">
            <h4 className="text-xs font-bold text-green-700 mb-1">AI Transparency Review (Demo)</h4>
            <p className="text-xs text-green-700 leading-relaxed">
              Calculations verified as mathematically consistent. Offer is within typical market deduction range.
              Review disclosed deductions before accepting.
            </p>
          </div>

          {/* QR code placeholder */}
          <div className="flex items-center gap-4 mt-5 pt-4 border-t border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
              <QrCode size={24} className="text-gray-400" />
              <span className="text-[8px] text-gray-400 mt-0.5 text-center">QR placeholder</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-700">Transaction ID: {transactionId}</p>
              <p className="text-[10px] text-gray-400 mt-0.5 leading-relaxed">
                QR verification will be linked to actual certificate data once backend integration is complete.
                This placeholder does not represent a working verification mechanism.
              </p>
            </div>
          </div>

          {/* Certificate footer */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
            <p className="text-[10px] text-gray-400 italic">
              This is a DEMO preview. Official certificates will bear GOLDTRUST AI digital signatures.
            </p>
            <div className="text-right">
              <p className="text-[10px] text-gray-500 font-semibold">GOLDTRUST AI</p>
              <p className="text-[9px] text-gray-400">"Know Your Gold. Know Its True Worth."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="gold"
          size="lg"
          icon={Download}
          onClick={onDownload}
          fullWidth
        >
          Download Valuation Certificate
        </Button>
        <Button
          variant="outline"
          size="lg"
          icon={Eye}
          onClick={onViewValuations}
          fullWidth
        >
          View My Valuations
        </Button>
      </div>

      <p className="text-center text-xs text-gray-400 italic">
        Download functionality will generate a PDF certificate once backend integration is complete.
      </p>
    </div>
  );
}
