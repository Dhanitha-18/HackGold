import React from 'react';
import { Check } from 'lucide-react';

export default function Stepper({ steps, currentStep }) {
  return (
    <div className="w-full">
      {/* Desktop stepper */}
      <div className="hidden md:flex items-center w-full">
        {steps.map((step, idx) => {
          const stepNum = idx + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;
          const isLast = idx === steps.length - 1;

          return (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center gap-1.5 relative">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300
                    ${isCompleted ? 'bg-[#C9A44C] border-[#C9A44C] text-white' :
                      isActive ? 'bg-white border-[#C9A44C] text-[#C9A44C]' :
                      'bg-white border-gray-200 text-gray-400'
                    }
                  `}
                >
                  {isCompleted ? <Check size={14} /> : stepNum}
                </div>
                <span
                  className={`text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive ? 'text-[#C9A44C]' : isCompleted ? 'text-gray-700' : 'text-gray-400'
                  }`}
                >
                  {step}
                </span>
              </div>
              {!isLast && (
                <div className={`flex-1 h-0.5 mx-2 mb-5 rounded transition-colors duration-300 ${isCompleted ? 'bg-[#C9A44C]' : 'bg-gray-200'}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile stepper */}
      <div className="md:hidden flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#C9A44C] flex items-center justify-center text-white text-xs font-bold">
            {currentStep}
          </div>
          <div>
            <p className="text-xs text-gray-500">Step {currentStep} of {steps.length}</p>
            <p className="text-sm font-semibold text-gray-800">{steps[currentStep - 1]}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx + 1 <= currentStep ? 'bg-[#C9A44C]' : 'bg-gray-200'
              } ${idx + 1 === currentStep ? 'w-6' : 'w-2'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
