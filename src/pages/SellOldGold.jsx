import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react';
import { Card, CardBody } from '../components/common/Card';
import Button from '../components/common/Button';
import Stepper from '../components/common/Stepper';
import Step1JewelleryDetails from '../components/valuation/Step1JewelleryDetails';
import Step2PurityWeight from '../components/valuation/Step2PurityWeight';
import Step3GoldValuation from '../components/valuation/Step3GoldValuation';
import Step4JewellerOffer from '../components/valuation/Step4JewellerOffer';
import Step5AICheck from '../components/valuation/Step5AICheck';
import Step6ReviewCertificate from '../components/valuation/Step6ReviewCertificate';
import { useToastContext } from '../components/layout/Layout';
import { generateTransactionId } from '../utils/valuation';

const STEPS = [
  'Jewellery Details',
  'Purity & Weight',
  'Gold Valuation',
  "Jeweller's Offer",
  'AI Check',
  'Review & Certificate',
];

const INITIAL_DATA = {
  // Step 1
  jewelleryType: '',
  description: '',
  huid: '',
  isHallmarked: false,
  photo: null,
  // Step 2
  grossWeight: '',
  nonGoldWeight: '',
  purity: '',
  testingMethod: '',
  testReport: null,
  // Step 3
  goldRatePerGram: '10000',
};

function validateStep(step, data) {
  switch (step) {
    case 1:
      if (!data.jewelleryType) return 'Please select a jewellery type to continue.';
      return null;
    case 2:
      if (!data.grossWeight || parseFloat(data.grossWeight) <= 0) return 'Please enter the gross jewellery weight.';
      if (!data.purity) return 'Please select a purity level.';
      if (!data.testingMethod) return 'Please select a testing/verification method.';
      return null;
    case 3:
      if (!data.goldRatePerGram || parseFloat(data.goldRatePerGram) <= 0) return 'Please enter the reference gold rate per gram.';
      return null;
    default:
      return null;
  }
}

export default function SellOldGold() {
  const navigate = useNavigate();
  const addToast = useToastContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [validationError, setValidationError] = useState(null);
  const [transactionId] = useState(() => generateTransactionId());

  const updateData = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }));
    setValidationError(null);
  };

  const handleNext = () => {
    const error = validateStep(currentStep, formData);
    if (error) {
      setValidationError(error);
      return;
    }
    setValidationError(null);
    setCurrentStep(s => Math.min(s + 1, STEPS.length));
    if (currentStep === 4) {
      addToast('Running AI transparency check…', 'info');
    }
  };

  const handleBack = () => {
    setValidationError(null);
    setCurrentStep(s => Math.max(s - 1, 1));
  };

  const handleDownload = () => {
    addToast('Certificate download will be available once backend integration is complete.', 'info');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1JewelleryDetails data={formData} onChange={updateData} />;
      case 2: return <Step2PurityWeight data={formData} onChange={updateData} />;
      case 3: return <Step3GoldValuation data={formData} onChange={updateData} />;
      case 4: return <Step4JewellerOffer data={formData} />;
      case 5: return <Step5AICheck data={formData} />;
      case 6: return (
        <Step6ReviewCertificate
          data={formData}
          transactionId={transactionId}
          onViewValuations={() => navigate('/valuations')}
          onDownload={handleDownload}
        />
      );
      default: return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in w-full">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Sell Old Gold</h1>
        <p className="text-gray-500 text-sm mt-0.5">Complete the step-by-step transparent valuation process.</p>
      </div>

      {/* Stepper */}
      <Card className="p-5">
        <Stepper steps={STEPS} currentStep={currentStep} />
      </Card>

      {/* Validation error */}
      {validationError && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 animate-fade-in">
          <AlertCircle size={15} className="text-red-500 shrink-0" />
          <p className="text-sm text-red-700">{validationError}</p>
        </div>
      )}

      {/* Step content */}
      <Card>
        <CardBody className="p-6 md:p-8">
          {renderStep()}
        </CardBody>
      </Card>

      {/* Navigation */}
      {currentStep < 6 && (
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="md"
            icon={ArrowLeft}
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Step {currentStep} of {STEPS.length}</span>
            <Button
              variant="gold"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              onClick={handleNext}
            >
              {currentStep === 5 ? 'View Summary' : 'Continue'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
