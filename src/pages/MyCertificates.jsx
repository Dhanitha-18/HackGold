import React, { useState } from 'react';
import { FileText, Download, Eye, QrCode, Gem, Shield, Award } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../components/common/Card';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import EmptyState from '../components/common/EmptyState';
import { mockCertificates } from '../data/mockData';
import { formatINR, formatDate, formatWeight } from '../utils/valuation';
import { useToastContext } from '../components/layout/Layout';

function CertificateCard({ cert, onView, onDownload }) {
  return (
    <Card hover className="p-5" onClick={onView}>
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A44C]/15 to-[#C9A44C]/5 border border-[#C9A44C]/20 flex items-center justify-center shrink-0">
          <Award size={22} className="text-[#C9A44C]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-mono text-xs text-gray-500">{cert.id}</p>
              <h3 className="font-bold text-gray-800 text-sm mt-0.5">{cert.jewelleryType}</h3>
            </div>
            <span className="shrink-0 text-xs bg-green-50 text-green-700 border border-green-200 font-semibold px-2 py-0.5 rounded-full">
              Issued
            </span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
            <span>Issued: {formatDate(cert.issueDate)}</span>
            <span>Purity: {cert.purity}</span>
            <span>Est. Value: <span className="font-semibold text-gray-800">{formatINR(cert.estimatedValue)}</span></span>
            <span>Tx: <span className="font-mono text-gray-700">{cert.transactionId}</span></span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100" onClick={e => e.stopPropagation()}>
        <Button variant="outline" size="sm" icon={Eye} onClick={onView} fullWidth>
          View
        </Button>
        <Button variant="ghost" size="sm" icon={Download} onClick={onDownload} fullWidth>
          Download PDF
        </Button>
      </div>
    </Card>
  );
}

function CertificatePreview({ cert }) {
  if (!cert) return null;
  return (
    <div className="border-2 border-[#C9A44C]/30 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#14213D] to-[#1e3a5f] px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C9A44C] flex items-center justify-center">
              <Gem size={15} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xs tracking-wide">GOLDTRUST AI</h3>
              <p className="text-[#E5D5A5] text-[9px] tracking-widest uppercase">Gold Valuation Certificate</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[#E5D5A5] text-[9px]">Certificate ID</p>
            <p className="text-white font-mono text-xs font-bold">{cert.id}</p>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="bg-[#FAF8F2] p-4 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-7xl font-black text-gray-800 -rotate-12">DEMO</span>
        </div>
        <div className="relative grid grid-cols-2 gap-x-6 gap-y-2 text-xs mb-4">
          {[
            ['Customer', cert.customerName],
            ['Jewellery Type', cert.jewelleryType],
            ['Issue Date', formatDate(cert.issueDate)],
            ['Transaction ID', cert.transactionId],
            ['Purity', cert.purity],
            ['Testing Method', cert.testingMethod],
            ['Net Gold Weight', formatWeight(cert.netGoldWeight)],
            ['Reference Rate', `₹${cert.goldRate?.toLocaleString('en-IN')}/g`],
            ['Estimated Intrinsic Value', formatINR(cert.estimatedValue)],
            ["Jeweller's Offer", formatINR(cert.jewellersOffer)],
          ].map(([lbl, val]) => (
            <div key={lbl}>
              <p className="text-gray-400 text-[10px]">{lbl}</p>
              <p className="font-semibold text-gray-800">{val}</p>
            </div>
          ))}
        </div>
        {/* Deductions */}
        {cert.deductions?.length > 0 && (
          <div className="border-t border-gray-200 pt-3 mb-3">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">Deductions (Demo)</p>
            {cert.deductions.map((d, i) => (
              <div key={i} className="flex justify-between text-xs py-0.5">
                <span className="text-gray-600">− {d.label}</span>
                <span className="text-red-600 font-semibold">−{formatINR(d.amount)}</span>
              </div>
            ))}
          </div>
        )}
        {/* Jeweller info */}
        <div className="border-t border-gray-200 pt-3 mb-4 text-xs">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1">Jeweller (Demo)</p>
          <p className="font-semibold text-gray-800">{cert.jeweller?.name}</p>
          <p className="text-gray-500">{cert.jeweller?.address} · {cert.jeweller?.licenceNo}</p>
        </div>
        {/* QR + Footer */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex flex-col items-center justify-center border border-dashed border-gray-300">
            <QrCode size={18} className="text-gray-400" />
            <span className="text-[8px] text-gray-400 mt-0.5">Demo QR</span>
          </div>
          <p className="text-[10px] text-gray-400 leading-relaxed">
            QR placeholder — not a working verification mechanism. Official certificates will include digital signatures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MyCertificates() {
  const addToast = useToastContext();
  const [selectedCert, setSelectedCert] = useState(null);

  const handleDownload = (cert) => {
    addToast(`PDF download for ${cert.id} will be available once backend integration is complete.`, 'info');
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-gray-800">My Certificates</h1>
        <p className="text-sm text-gray-500 mt-0.5">Your gold valuation certificates — Sample Demo Data</p>
      </div>

      {mockCertificates.length === 0 ? (
        <Card><CardBody>
          <EmptyState
            icon={FileText}
            title="No certificates yet"
            description="Certificates are issued after completing a full gold valuation and review."
          />
        </CardBody></Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockCertificates.map(cert => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onView={() => setSelectedCert(cert)}
              onDownload={() => handleDownload(cert)}
            />
          ))}
        </div>
      )}

      <div className="bg-[#C9A44C]/8 border border-[#C9A44C]/20 rounded-xl p-4 text-xs text-[#8B6914]">
        <strong>Demo Notice:</strong> The certificates shown above are sample data for demonstration purposes.
        Official GOLDTRUST AI certificates will bear digital signatures and verifiable QR codes once backend integration is complete.
      </div>

      {/* Certificate preview modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={`Certificate Preview — ${selectedCert?.id}`}
        size="lg"
        footer={
          <>
            <Button variant="outline" size="md" onClick={() => setSelectedCert(null)}>Close</Button>
            <Button
              variant="gold"
              size="md"
              icon={Download}
              onClick={() => { handleDownload(selectedCert); setSelectedCert(null); }}
            >
              Download PDF
            </Button>
          </>
        }
      >
        {selectedCert && <CertificatePreview cert={selectedCert} />}
      </Modal>
    </div>
  );
}
