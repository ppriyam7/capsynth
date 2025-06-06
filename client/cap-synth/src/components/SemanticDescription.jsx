const SemanticDescription = ({ description, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
        <div className="flex items-center space-x-3 mb-4">
          <Eye className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-slate-800">
            Semantic Analysis
          </h3>
        </div>
        <div className="animate-pulse space-y-3">
          <div className="h-3 bg-slate-200 rounded w-full"></div>
          <div className="h-3 bg-slate-200 rounded w-5/6"></div>
          <div className="h-3 bg-slate-200 rounded w-4/5"></div>
          <div className="h-3 bg-slate-200 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (!description) return null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
      <div className="flex items-center space-x-3 mb-4">
        <Eye className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-slate-800">
          Semantic Analysis
        </h3>
      </div>

      <div className="space-y-4">
        {description.split("\n").map(
          (paragraph, index) =>
            paragraph.trim() && (
              <p key={index} className="text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            )
        )}
      </div>
    </div>
  );
};
