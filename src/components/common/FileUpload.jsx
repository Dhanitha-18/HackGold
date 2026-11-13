import React, { useState, useRef } from 'react';
import { Upload, Image, X, FileText } from 'lucide-react';

export default function FileUpload({ label, hint, accept = 'image/*', onFileSelect, preview = true, className = '' }) {
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    setSelectedFile(file);
    if (preview && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
    onFileSelect?.(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (inputRef.current) inputRef.current.value = '';
    onFileSelect?.(null);
  };

  return (
    <div className={className}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>}

      {!selectedFile ? (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`
            border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200
            ${dragging ? 'border-[#C9A44C] bg-[#C9A44C]/5' : 'border-gray-200 hover:border-[#C9A44C]/50 hover:bg-gray-50'}
          `}
        >
          <div className="flex flex-col items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${dragging ? 'bg-[#C9A44C]/15' : 'bg-gray-100'}`}>
              <Upload size={18} className={dragging ? 'text-[#C9A44C]' : 'text-gray-400'} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">
                {dragging ? 'Drop file here' : 'Click to upload or drag & drop'}
              </p>
              {hint && <p className="text-xs text-gray-400 mt-0.5">{hint}</p>}
            </div>
          </div>
          <input ref={inputRef} type="file" accept={accept} onChange={handleChange} className="hidden" />
        </div>
      ) : (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {previewUrl ? (
            <div className="relative">
              <img src={previewUrl} alt="Preview" className="w-full h-40 object-cover" />
              <button
                onClick={handleRemove}
                className="absolute top-2 right-2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={12} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 p-3">
              <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                <FileText size={16} className="text-gray-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">{selectedFile.name}</p>
                <p className="text-xs text-gray-400">{(selectedFile.size / 1024).toFixed(1)} KB</p>
              </div>
              <button onClick={handleRemove} className="text-gray-400 hover:text-red-500 transition-colors">
                <X size={16} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
