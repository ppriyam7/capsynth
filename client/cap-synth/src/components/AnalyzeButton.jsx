import React from "react";
const AnalyzeButton = ({ onClick, isLoading, disabled, file }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading || !file}
      className={`
        w-full py-4 px-6 rounded-2xl font-semibold text-white text-lg
        transition-all duration-300 transform hover:scale-105 active:scale-95
        ${
          disabled || !file
            ? "bg-slate-300 cursor-not-allowed"
            : isLoading
            ? "bg-blue-500 cursor-wait"
            : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
        }
      `}
    >
      <div className="flex items-center justify-center space-x-3">
        {isLoading ? (
          <>
            <Loader2 className="w-6 h-6 animate-spin" />
            <span>Analyzing...</span>
          </>
        ) : (
          <>
            <Zap className="w-6 h-6" />
            <span>Analyze with CapSynth</span>
          </>
        )}
      </div>
    </button>
  );
};

export default AnalyzeButton;
