import React from 'react';
import { HelpCircle, MessageSquare, Mail, Phone, FileQuestion, ExternalLink } from 'lucide-react';
import { Card } from '../components/common/Card';

const faqs = [
  { q: 'How is the estimated gold value calculated?', a: 'The estimated intrinsic value is calculated by multiplying the net gold weight (gross weight minus non-gold weight) by the purity factor, then multiplying by the reference 24K gold rate. This gives you the pure gold equivalent value based on current market rates.' },
  { q: 'What is HUID and why does it matter?', a: 'HUID (Hallmark Unique ID) is a unique 6-character alphanumeric code stamped on BIS-hallmarked jewellery. It enables traceability and verification of purity claims through the BIS portal.' },
  { q: 'Can I trust the AI analysis to verify gold purity?', a: 'No. The AI analysis checks calculation consistency and information completeness, but cannot verify gold purity from photographs or descriptions. Purity must be established through an XRF test, official hallmark, or other verified testing method.' },
  { q: 'Why is the jeweller\'s offer lower than my estimated value?', a: 'Jewellers factor in refining charges, wastage during melting, and their margin. The difference is not necessarily dishonest — but all deductions should be explained in writing. Use the deduction breakdown to understand each charge.' },
  { q: 'Are my valuation records stored securely?', a: 'During this demo stage, all data is stored in your browser session only. Once backend integration is complete, data will be stored securely in a cloud database with proper access controls.' },
];

export default function HelpSupport() {
  return (
    <div className="max-w-2xl mx-auto space-y-5 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-gray-800">Help & Support</h1>
        <p className="text-sm text-gray-500 mt-0.5">Find answers or reach out to our team</p>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: MessageSquare, title: 'Live Chat', desc: 'Chat with our team', note: 'Coming soon' },
          { icon: Mail, title: 'Email', desc: 'support@goldtrust.ai', note: 'Response within 24h' },
          { icon: Phone, title: 'Phone', desc: '+91 1800-XXX-XXXX', note: 'Mon–Sat, 9AM–6PM' },
        ].map(item => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="p-4 text-center">
              <div className="w-9 h-9 rounded-xl bg-[#C9A44C]/10 flex items-center justify-center mx-auto mb-3">
                <Icon size={18} className="text-[#C9A44C]" />
              </div>
              <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{item.note}</p>
            </Card>
          );
        })}
      </div>

      {/* FAQs */}
      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <FileQuestion size={16} className="text-[#C9A44C]" />
          <h3 className="font-bold text-gray-800 text-sm">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-gray-100 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors text-sm font-medium text-gray-800 select-none">
                {faq.q}
                <HelpCircle size={15} className="text-gray-400 shrink-0 group-open:text-[#C9A44C] transition-colors" />
              </summary>
              <div className="px-4 pb-3 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Card>
    </div>
  );
}
