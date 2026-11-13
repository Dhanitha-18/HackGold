import React, { useState } from 'react';
import { Search, QrCode, Info, CheckCircle, AlertCircle, XCircle, Shield } from 'lucide-react';
import { Card, CardBody, InfoCard } from '../components/common/Card';
import Button from '../components/common/Button';
import { VerificationBadge } from '../components/common/StatusBadge';
import { mockHuidData } from '../data/mockData';
import { formatDate } from '../utils/valuation';

const SAMPLE_HUIDS = Object.keys(mockHuidData);

export default function HUIDVerification() {
  const [huidInput, setHuidInput] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleVerify = () => {
    if (!huidInput.trim()) return;
    setLoading(true);
    setResult(null);
    setNotFound(false);

    // Simulate async lookup
    setTimeout(() => {
      const found = mockHuidData[huidInput.trim().toUpperCase()];
      if (found) {
        setResult(found);
        setNotFound(false);
      } else {
        setNotFound(true);
        setResult(null);
      }
      setLoading(false);
    }, 1200);
  };

  const handleSampleClick = (huid) => {
    setHuidInput(huid);
    setResult(null);
    setNotFound(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 font-serif">Verify your gold hallmark</h1>
        <p className="text-gray-500 text-sm mt-1">Check the hallmark details associated with your jewellery's HUID.</p>
      </div>

      {/* Important disclaimer */}
      <InfoCard variant="warning">
        <div className="flex items-start gap-2">
          <Info size={15} className="shrink-0 mt-0.5 text-amber-600" />
          <div>
            <p className="font-semibold text-amber-800 text-xs mb-0.5">Demo Verification Only</p>
            <p className="text-xs text-amber-700 leading-relaxed">
              This is a <strong>local demo lookup</strong> using sample data. It is <strong>not connected to the official
              BIS HUID verification system</strong>. Official integration with the Bureau of Indian Standards (BIS) 
              will be implemented in a later stage.
            </p>
          </div>
        </div>
      </InfoCard>

      {/* What is HUID card */}
      <Card className="p-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#14213D]/10 flex items-center justify-center shrink-0">
            <Shield size={18} className="text-[#14213D]" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm mb-1">What is HUID?</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>HUID (Hallmark Unique ID)</strong> is a 6-digit alphanumeric code assigned to each piece of hallmarked jewellery
              by an BIS-recognised Assaying and Hallmarking Centre. It allows anyone to verify the purity, jeweller details,
              and hallmarking date of a piece of gold jewellery. Hallmarking has been mandatory in India for certain 
              gold jewellery since January 2022.
            </p>
          </div>
        </div>
      </Card>

      {/* Search form */}
      <Card className="p-5">
        <h3 className="font-bold text-gray-800 text-sm mb-4">Enter HUID Number</h3>
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={huidInput}
              onChange={(e) => setHuidInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
              placeholder="e.g., HU241100001"
              className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-white uppercase placeholder:normal-case focus:border-[#C9A44C] focus:ring-2 focus:ring-[#C9A44C]/10 outline-none transition-all font-mono"
            />
          </div>
          <Button
            variant="gold"
            size="md"
            onClick={handleVerify}
            loading={loading}
            disabled={!huidInput.trim()}
          >
            Verify
          </Button>
        </div>

        {/* QR scan option */}
        <button className="mt-3 flex items-center gap-2 text-xs text-gray-500 hover:text-[#C9A44C] transition-colors">
          <QrCode size={14} />
          Scan QR code instead
          <span className="text-[10px] text-gray-400">(UI only — not yet connected)</span>
        </button>

        {/* Sample HUIDs */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">Try sample HUIDs for demo:</p>
          <div className="flex flex-wrap gap-2">
            {SAMPLE_HUIDS.map(h => (
              <button
                key={h}
                onClick={() => handleSampleClick(h)}
                className="font-mono text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-[#C9A44C]/10 hover:text-[#C9A44C] transition-all"
              >
                {h}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Loading */}
      {loading && (
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-[#C9A44C] border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-gray-600">Looking up HUID details…</p>
          </div>
        </Card>
      )}

      {/* Result — Found */}
      {result && (
        <Card className="animate-fade-in border-green-100">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-green-50/50 rounded-t-xl">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              <h3 className="font-bold text-gray-800 text-sm">HUID Found — Demo Result</h3>
            </div>
            <VerificationBadge status={result.status} />
          </div>
          <CardBody>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[
                ['HUID Number', result.huid],
                ['Purity', result.purity],
                ['Jewellery Type', result.jewelleryType],
                ['Description', result.description],
                ['Weight', result.weight],
                ['Date of Hallmarking', formatDate(result.dateOfHallmarking)],
                ['Hallmark Centre', result.hallmarkCentre],
                ['Jeweller', result.jeweller],
                ['BIS Licence No.', result.bisLicenceNo],
                ['Verification Status', result.status],
              ].map(([lbl, val]) => (
                <div key={lbl}>
                  <p className="text-xs text-gray-500 mb-0.5">{lbl}</p>
                  <p className="font-semibold text-gray-800 text-xs">{val}</p>
                </div>
              ))}
            </div>
            <InfoCard variant="gold" className="mt-4">
              <div className="flex items-start gap-2">
                <Info size={13} className="shrink-0 mt-0.5 text-[#8B6914]" />
                <p className="text-xs text-[#8B6914]">
                  This is <strong>sample demo data</strong>. The displayed result is not from the actual BIS HUID database.
                  Official BIS verification will be integrated in a later stage.
                </p>
              </div>
            </InfoCard>
          </CardBody>
        </Card>
      )}

      {/* Result — Not Found */}
      {notFound && (
        <Card className="animate-fade-in border-red-100">
          <CardBody>
            <div className="flex items-start gap-3">
              <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">HUID Not Found in Demo Database</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  The HUID "<span className="font-mono font-semibold">{huidInput}</span>" was not found in the demo dataset.
                  Try one of the sample HUIDs above, or verify that the number is entered correctly.
                  Official BIS verification may return different results.
                </p>
                <VerificationBadge status="Unable to Verify" />
              </div>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
