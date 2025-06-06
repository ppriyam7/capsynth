import React, { useState, useRef, useCallback } from "react";
import {
  Upload,
  Image,
  Video,
  FileText,
  Zap,
  Copy,
  Download,
  Eye,
  Tag,
  Brain,
  AlertCircle,
  CheckCircle,
  Loader2,
  X,
} from "lucide-react";

// UploadBox Component
const UploadBox = ({
  onFileSelect,
  isUploading,
  acceptedTypes = "image/*,video/*",
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragOver(false);
      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        onFileSelect(files[0]);
      }
    },
    [onFileSelect]
  );

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div
      className={`
        relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer
        transition-all duration-300 bg-gradient-to-br from-slate-50 to-blue-50
        ${
          isDragOver
            ? "border-blue-400 bg-blue-50 scale-105"
            : "border-slate-300 hover:border-blue-300"
        }
        ${isUploading ? "pointer-events-none opacity-70" : ""}
      `}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedTypes}
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="flex flex-col items-center space-y-6">
        <div
          className={`
          w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
          flex items-center justify-center transition-transform duration-300
          ${isDragOver ? "scale-110" : "hover:scale-105"}
        `}
        >
          {isUploading ? (
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          ) : (
            <Upload className="w-8 h-8 text-white" />
          )}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            {isUploading ? "Processing..." : "Upload Media"}
          </h3>
          <p className="text-slate-600 mb-4">
            Drag & drop your files here, or click to browse
          </p>
          <div className="flex justify-center space-x-4 text-sm text-slate-500">
            <div className="flex items-center space-x-1">
              <Image className="w-4 h-4" />
              <span>Images</span>
            </div>
            <div className="flex items-center space-x-1">
              <Video className="w-4 h-4" />
              <span>Videos</span>
            </div>
          </div>
        </div>
      </div>

      {isDragOver && (
        <div className="absolute inset-0 bg-blue-500/20 rounded-2xl flex items-center justify-center">
          <div className="text-blue-600 font-medium text-lg">
            Drop to upload
          </div>
        </div>
      )}
    </div>
  );
};
