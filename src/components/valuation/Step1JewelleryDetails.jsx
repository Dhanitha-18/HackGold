import React, { useState } from 'react';
import { Info, Camera } from 'lucide-react';
import { Input, Select, Textarea } from '../../components/common/FormFields';
import { InfoCard } from '../../components/common/Card';
import FileUpload from '../../components/common/FileUpload';
import { jewelleryTypes } from '../../data/mockData';

export default function Step1JewelleryDetails({ data, onChange }) {
  const updateField = (field) => (e) => onChange({ [field]: e.target.value });

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-gray-800 font-serif">Tell us about your jewellery</h2>
        <p className="text-gray-500 text-sm mt-1">Let's start with a few details about the gold you want to sell.</p>
      </div>

      {/* Jewellery type selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Jewellery Type <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {jewelleryTypes.map(type => (
            <button
              key={type}
              type="button"
              onClick={() => onChange({ jewelleryType: type })}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                data.jewelleryType === type
                  ? 'bg-[#C9A44C] text-white border-[#C9A44C] shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#C9A44C]/50 hover:text-[#C9A44C]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <Textarea
        label="Jewellery Description"
        placeholder="e.g., Traditional gold necklace with floral design, approximately 25 years old…"
        value={data.description}
        onChange={updateField('description')}
        hint="Optional: Describe the design, age, or any special characteristics."
        rows={3}
      />

      {/* HUID */}
      <Input
        label="HUID Number (if available)"
        placeholder="e.g., HU241100001"
        value={data.huid}
        onChange={updateField('huid')}
        hint="Optional: 6-digit BIS HUID number found on the hallmark."
      />

      {/* Hallmarked checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              checked={data.isHallmarked}
              onChange={(e) => onChange({ isHallmarked: e.target.checked })}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
              data.isHallmarked ? 'bg-[#C9A44C] border-[#C9A44C]' : 'border-gray-300 group-hover:border-[#C9A44C]/50'
            }`}>
              {data.isHallmarked && (
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-700">This jewellery is BIS hallmarked</span>
            <p className="text-xs text-gray-500 mt-0.5">I can see hallmark details stamped on the jewellery.</p>
          </div>
        </label>
      </div>

      {/* Photo upload */}
      <FileUpload
        label="Upload Jewellery Photograph"
        hint="JPG, PNG or WEBP · Max 10MB"
        accept="image/*"
        onFileSelect={(file) => onChange({ photo: file })}
      />

      {/* Info note */}
      <InfoCard variant="info">
        <div className="flex items-start gap-2">
          <Info size={15} className="shrink-0 mt-0.5 text-blue-600" />
          <div>
            <p className="font-semibold text-blue-800 text-xs mb-0.5">About Photographs</p>
            <p className="text-xs leading-relaxed">
              Photographs help document the jewellery and assist with identification, but <strong>cannot establish gold purity</strong>.
              Purity must be determined through an XRF test, official hallmark, or other verified testing method.
            </p>
          </div>
        </div>
      </InfoCard>
    </div>
  );
}
