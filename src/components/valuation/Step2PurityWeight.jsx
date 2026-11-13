import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { Input, Select } from '../../components/common/FormFields';
import { ReadOnlyField } from '../../components/common/FormFields';
import { InfoCard } from '../../components/common/Card';
import FileUpload from '../../components/common/FileUpload';
import { purityOptions, testingMethods } from '../../data/mockData';
import { calculateNetGoldWeight, formatWeight } from '../../utils/valuation';

export default function Step2PurityWeight({ data, onChange }) {
  const updateField = (field) => (e) => {
    const val = e.target.value;
    onChange({ [field]: val });
  };

  const netWeight = calculateNetGoldWeight(data.grossWeight, data.nonGoldWeight);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-gray-800 font-serif">Gold purity and weight details</h2>
        <p className="text-gray-500 text-sm mt-1">Enter the measured weight and verified purity details.</p>
      </div>

      {/* Weight section */}
      <div className="bg-gray-50 rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-bold text-gray-700">Weight Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Gross Jewellery Weight (grams)"
            type="number"
            step="0.01"
            min="0"
            placeholder="e.g., 20.00"
            value={data.grossWeight}
            onChange={updateField('grossWeight')}
            required
            hint="Total weight of the jewellery including stones/fittings."
          />
          <Input
            label="Stone / Non-Gold Weight (grams)"
            type="number"
            step="0.01"
            min="0"
            placeholder="e.g., 2.00"
            value={data.nonGoldWeight}
            onChange={updateField('nonGoldWeight')}
            hint="Optional: Weight of diamonds, stones, or non-gold parts."
          />
        </div>

        {/* Calculated net weight */}
        <div className="flex items-center gap-3 mt-2">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">Net Gold Weight (Calculated)</label>
            <div className="flex items-center gap-2 px-3.5 py-2.5 bg-gradient-to-r from-[#C9A44C]/10 to-transparent border border-[#C9A44C]/30 rounded-lg">
              <span className="text-lg font-bold text-[#C9A44C]">
                {data.grossWeight ? formatWeight(netWeight) : '—'}
              </span>
              <span className="text-xs text-gray-500">
                = {data.grossWeight || '0'}g gross − {data.nonGoldWeight || '0'}g non-gold
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Purity section */}
      <div className="bg-gray-50 rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-bold text-gray-700">Purity Information</h3>

        <Select
          label="Gold Purity"
          value={data.purity}
          onChange={updateField('purity')}
          required
          hint="Select the purity based on actual testing or reliable hallmark information."
        >
          <option value="">Select purity…</option>
          {purityOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </Select>

        <Select
          label="Testing / Verification Method"
          value={data.testingMethod}
          onChange={updateField('testingMethod')}
          required
        >
          <option value="">Select testing method…</option>
          {testingMethods.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </Select>

        {data.testingMethod === 'Not Yet Tested' && (
          <InfoCard variant="warning">
            <div className="flex items-start gap-2">
              <AlertTriangle size={15} className="shrink-0 mt-0.5 text-amber-600" />
              <p className="text-xs">
                <strong>Purity not yet verified.</strong> An unverified purity estimate may differ significantly from tested results.
                We recommend getting an XRF test or hallmark verification before finalising any transaction.
              </p>
            </div>
          </InfoCard>
        )}

        {/* Test report upload */}
        <FileUpload
          label="Testing Report / Hallmark Certificate (optional)"
          hint="PDF, JPG, or PNG · Max 10MB"
          accept=".pdf,image/*"
          onFileSelect={(file) => onChange({ testReport: file })}
        />
      </div>

      {/* Important note */}
      <InfoCard variant="gold">
        <div className="flex items-start gap-2">
          <Info size={15} className="shrink-0 mt-0.5 text-[#8B6914]" />
          <div>
            <p className="font-semibold text-[#6B4E10] text-xs mb-1">Important Note on Purity</p>
            <p className="text-xs leading-relaxed text-[#8B6914]">
              Gold purity should be based on an <strong>actual testing result or reliable hallmark information</strong>.
              A photograph alone <strong>cannot establish gold purity</strong>. The purity value entered here directly
              affects the estimated gold value calculation.
            </p>
          </div>
        </div>
      </InfoCard>
    </div>
  );
}
