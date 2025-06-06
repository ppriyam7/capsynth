import React, { useState, useRef, useCallback } from "react";
const MediaPreview = ({ file, onRemove }) => {
  const [preview, setPreview] = useState(null);

  React.useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  if (!file) return null;

  const isVideo = file.type.startsWith("video/");
  const isImage = file.type.startsWith("image/");

  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {isImage && <Image className="w-5 h-5 text-blue-600" />}
          {isVideo && <Video className="w-5 h-5 text-purple-600" />}
          <span className="font-medium text-slate-800 truncate">
            {file.name}
          </span>
        </div>
        <button
          onClick={onRemove}
          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="relative overflow-hidden rounded-xl bg-slate-100">
        {isImage && preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-48 object-cover"
          />
        )}
        {isVideo && preview && (
          <video src={preview} className="w-full h-48 object-cover" controls />
        )}
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
        <span>{(file.size / 1024 / 1024).toFixed(1)} MB</span>
        <span className="capitalize">{file.type.split("/")[1]}</span>
      </div>
    </div>
  );
};
