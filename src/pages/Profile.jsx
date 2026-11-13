import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  User, Mail, Phone, MapPin, Globe, Edit3, Save, X, Camera,
  Shield, CheckCircle2, ClipboardList, FileText, History, Settings,
  ArrowRight, ExternalLink, ChevronRight
} from 'lucide-react';
import { Card, CardHeader, CardBody, InfoCard } from '../components/common/Card';
import Button from '../components/common/Button';
import { Input, Select } from '../components/common/FormFields';
import { StatusBadge } from '../components/common/StatusBadge';
import { currentUser, mockValuations, mockCertificates, mockTransactionHistory } from '../data/mockData';
import { formatINR, formatDate } from '../utils/valuation';
import { useToastContext } from '../components/layout/Layout';

const LANGUAGES = ['English', 'Hindi', 'Marathi', 'Tamil', 'Telugu', 'Kannada', 'Bengali', 'Gujarati'];

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const addToast = useToastContext();

  // Active section tab: 'details', 'valuations', 'certificates', 'history', 'settings'
  const [activeTab, setActiveTab] = useState('details');

  // Handle URL query or state params to switch tab directly
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    if (tabParam && ['details', 'valuations', 'certificates', 'history', 'settings'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location.search]);

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...currentUser });
  const [savedData, setSavedData] = useState({ ...currentUser });

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSave = () => {
    setSavedData({ ...formData });
    setEditing(false);
    addToast('Profile updated successfully!', 'success');
  };

  const handleCancel = () => {
    setFormData({ ...savedData });
    setEditing(false);
  };

  const tabs = [
    { id: 'details', label: 'Personal Details', icon: User },
    { id: 'valuations', label: 'My Valuations', icon: ClipboardList, count: mockValuations.length },
    { id: 'certificates', label: 'My Certificates', icon: FileText, count: mockCertificates.length },
    { id: 'history', label: 'Transaction History', icon: History, count: mockTransactionHistory.length },
    { id: 'settings', label: 'Account Settings', icon: Settings },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-serif font-bold text-gray-800">My Profile & Account</h1>
          <p className="text-xs text-gray-500 mt-0.5">Manage your personal details, valuations, certificates, and settings</p>
        </div>
        {activeTab === 'details' && (
          <div>
            {!editing ? (
              <Button variant="outline" size="sm" icon={Edit3} onClick={() => setEditing(true)}>
                Edit Details
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" icon={X} onClick={handleCancel}>
                  Cancel
                </Button>
                <Button variant="gold" size="sm" icon={Save} onClick={handleSave}>
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Profile Overview Card */}
      <Card className="p-5 md:p-6 bg-gradient-to-r from-white via-white to-[#FAF8F2]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#14213D] to-[#1e3a5f] border-2 border-[#C9A44C] flex items-center justify-center text-white text-2xl md:text-3xl font-serif font-bold shadow-md">
                {savedData.name.charAt(0)}
              </div>
              {editing && (
                <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                  <Camera size={12} className="text-gray-600" />
                </button>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg md:text-xl font-bold text-gray-800">{savedData.name}</h2>
                <span className="flex items-center gap-1 text-[10px] bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-semibold">
                  <CheckCircle2 size={10} /> KYC Verified
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">{savedData.email}</p>
              <p className="text-[11px] text-gray-400 mt-1">
                Customer ID: <span className="font-mono text-gray-600 font-semibold">{savedData.id}</span>
              </p>
            </div>
          </div>

          <div className="flex sm:flex-col gap-2 justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
            <Button
              variant="gold"
              size="sm"
              onClick={() => navigate('/sell')}
            >
              Start New Valuation
            </Button>
          </div>
        </div>
      </Card>

      {/* Tabs Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-gray-200 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-[#14213D] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Icon size={14} className={isActive ? 'text-[#C9A44C]' : 'text-gray-400'} />
              <span>{tab.label}</span>
              {typeof tab.count === 'number' && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-[#C9A44C] text-[#14213D] font-bold' : 'bg-gray-200 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT: Personal Details */}
      {activeTab === 'details' && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <User size={16} className="text-[#C9A44C]" />
                <h3 className="font-bold text-gray-800 text-sm">Personal Information</h3>
              </div>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <Input
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange('name')}
                  disabled={!editing}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    disabled={!editing}
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    disabled={!editing}
                  />
                </div>
                <Input
                  label="Address"
                  value={formData.address}
                  onChange={handleChange('address')}
                  disabled={!editing}
                />
                <Select
                  label="Preferred Language"
                  value={formData.preferredLanguage}
                  onChange={handleChange('preferredLanguage')}
                  disabled={!editing}
                >
                  {LANGUAGES.map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </Select>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[#C9A44C]" />
                <h3 className="font-bold text-gray-800 text-sm">Account Information</h3>
              </div>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Customer ID</p>
                  <p className="text-xs font-mono font-semibold text-gray-800">{currentUser.id}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">KYC Status</p>
                  <p className="text-xs font-semibold text-emerald-700">Verified</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Member Since</p>
                  <p className="text-xs font-semibold text-gray-800">{formatDate(currentUser.joinedDate)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Account Type</p>
                  <p className="text-xs font-semibold text-gray-800">Customer</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      )}

      {/* TAB CONTENT: My Valuations */}
      {activeTab === 'valuations' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-800 text-base">Previous Valuations</h3>
              <p className="text-xs text-gray-500">Access and manage all previous gold estimation records</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={ExternalLink}
              iconPosition="right"
              onClick={() => navigate('/valuations')}
            >
              Open Full Valuations Page
            </Button>
          </div>

          <Card>
            <CardBody className="p-0">
              <div className="divide-y divide-gray-100">
                {mockValuations.map((val) => (
                  <div key={val.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gray-50/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#C9A44C]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <ClipboardList size={18} className="text-[#C9A44C]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-gray-700">{val.id}</span>
                          <span className="text-xs font-semibold text-gray-800">• {val.jewelleryType}</span>
                          <span className="text-[10px] bg-[#C9A44C]/15 text-[#8B6914] px-2 py-0.2 rounded-full font-bold">{val.purity}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          Date: {formatDate(val.date)} | Gross Weight: {val.grossWeight}g
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 self-stretch sm:self-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                      <div className="text-left sm:text-right">
                        <p className="text-xs text-gray-400">Est. Intrinsic Value</p>
                        <p className="text-sm font-bold text-[#14213D]">{formatINR(val.estimatedValue)}</p>
                      </div>
                      <StatusBadge status={val.status} />
                      <button
                        onClick={() => navigate('/valuations')}
                        className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-400 hover:text-gray-700 transition-colors"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      )}

      {/* TAB CONTENT: My Certificates */}
      {activeTab === 'certificates' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-800 text-base">Generated Digital Certificates</h3>
              <p className="text-xs text-gray-500">Official digital verification certificates for completed gold transactions</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={ExternalLink}
              iconPosition="right"
              onClick={() => navigate('/certificates')}
            >
              Open Full Certificates Library
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockCertificates.map((cert) => (
              <Card key={cert.id} className="p-5 border border-gray-100 hover:border-[#C9A44C]/50 transition-all">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#14213D]/10 flex items-center justify-center shrink-0">
                      <FileText size={20} className="text-[#14213D]" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-gray-400 font-semibold">{cert.id}</span>
                      <h4 className="font-bold text-gray-800 text-sm">{cert.jewelleryType}</h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    Issued
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Issue Date:</span>
                    <p className="font-semibold text-gray-700">{formatDate(cert.issueDate)}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Verified Purity:</span>
                    <p className="font-semibold text-gray-700">{cert.purity}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Est. Value:</span>
                    <p className="font-bold text-[#C9A44C]">{formatINR(cert.estimatedValue)}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Jeweller Offer:</span>
                    <p className="font-bold text-[#14213D]">{formatINR(cert.jewellersOffer)}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => navigate('/certificates')}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: Transaction History */}
      {activeTab === 'history' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-800 text-base">Activity & Transaction History</h3>
              <p className="text-xs text-gray-500">Record of valuation requests, HUID checks, and verified offers</p>
            </div>
          </div>

          <Card>
            <CardBody className="p-0">
              <div className="divide-y divide-gray-100">
                {mockTransactionHistory.map((item) => (
                  <div key={item.id} className="p-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                        <History size={16} className="text-gray-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-gray-700">{item.id}</span>
                          <span className="text-xs font-semibold text-gray-900">• {item.type}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{item.item} • {formatDate(item.date)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {item.amount ? (
                        <span className="text-sm font-bold text-[#14213D]">{formatINR(item.amount)}</span>
                      ) : (
                        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Verified</span>
                      )}
                      <span className="block text-[10px] text-gray-400 mt-0.5">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      )}

      {/* TAB CONTENT: Account Settings */}
      {activeTab === 'settings' && (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-gray-800 text-base">Account Settings</h3>
            <p className="text-xs text-gray-500">Manage security, notifications, and customer preferences</p>
          </div>

          <Card className="p-5 space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div>
                <h4 className="text-sm font-semibold text-gray-800">SMS & WhatsApp Alerts</h4>
                <p className="text-xs text-gray-500">Receive gold rate updates and jeweller offer notifications</p>
              </div>
              <input type="checkbox" defaultChecked className="accent-[#C9A44C] w-4 h-4 cursor-pointer" />
            </div>

            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div>
                <h4 className="text-sm font-semibold text-gray-800">Two-Factor Authentication (2FA)</h4>
                <p className="text-xs text-gray-500">Require an OTP when generating official certificates</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">Enabled</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <h4 className="text-sm font-semibold text-gray-800">Data & Privacy</h4>
                <p className="text-xs text-gray-500">Your jewellery photographs are never shared publicly</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => alert('[DEMO] Data privacy policy')}>
                View Policy
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Demo Notice Banner */}
      <InfoCard variant="info">
        <div className="flex items-start gap-2">
          <Shield size={14} className="shrink-0 mt-0.5 text-blue-600" />
          <p className="text-xs text-blue-800 leading-relaxed">
            <strong>Customer Portal Profile:</strong> All sections (Personal Details, My Valuations, My Certificates, Transaction History, and Account Settings) are interactive and linked directly to your session data.
          </p>
        </div>
      </InfoCard>
    </div>
  );
}
