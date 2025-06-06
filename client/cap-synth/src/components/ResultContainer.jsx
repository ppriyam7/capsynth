const ResultsContainer = ({ children, onExport }) => {
  const handleExport = () => {
    // Mock export functionality
    const results = {
      caption: "Sample caption",
      description: "Sample description",
      entities: ["person", "car", "street"],
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(results, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "capsynth-analysis.json";
    a.click();
    URL.revokeObjectURL(url);

    onExport?.(results);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Analysis Results</h2>
        <button
          onClick={handleExport}
          className="flex items-center space-x-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>

      <div className="space-y-6">{children}</div>
    </div>
  );
};
