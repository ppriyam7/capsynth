import React, { useState, useRef, useCallback } from "react";
const InputForm = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState("");
  const [options, setOptions] = useState({
    includeObjects: true,
    includeScene: true,
    includeEmotions: false,
    detailLevel: "medium",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ prompt, options });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Custom Prompt (Optional)
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you'd like to focus on in the analysis..."
            className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Analysis Options
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={options.includeObjects}
                onChange={(e) =>
                  setOptions((prev) => ({
                    ...prev,
                    includeObjects: e.target.checked,
                  }))
                }
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700">Include Objects</span>
            </label>

            <label className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={options.includeScene}
                onChange={(e) =>
                  setOptions((prev) => ({
                    ...prev,
                    includeScene: e.target.checked,
                  }))
                }
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700">Scene Context</span>
            </label>

            <label className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={options.includeEmotions}
                onChange={(e) =>
                  setOptions((prev) => ({
                    ...prev,
                    includeEmotions: e.target.checked,
                  }))
                }
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700">Emotions</span>
            </label>

            <select
              value={options.detailLevel}
              onChange={(e) =>
                setOptions((prev) => ({ ...prev, detailLevel: e.target.value }))
              }
              className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              <option value="low">Low Detail</option>
              <option value="medium">Medium Detail</option>
              <option value="high">High Detail</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
