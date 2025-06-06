const EntityTags = ({ entities, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
        <div className="flex items-center space-x-3 mb-4">
          <Tag className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-slate-800">
            Detected Entities
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse h-8 bg-slate-200 rounded-full w-20"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (!entities || entities.length === 0) return null;

  const getTagColor = (type) => {
    const colors = {
      person: "bg-blue-100 text-blue-800 border-blue-200",
      object: "bg-green-100 text-green-800 border-green-200",
      place: "bg-purple-100 text-purple-800 border-purple-200",
      activity: "bg-orange-100 text-orange-800 border-orange-200",
      emotion: "bg-pink-100 text-pink-800 border-pink-200",
      default: "bg-slate-100 text-slate-800 border-slate-200",
    };
    return colors[type] || colors.default;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
      <div className="flex items-center space-x-3 mb-4">
        <Tag className="w-5 h-5 text-green-600" />
        <h3 className="text-lg font-semibold text-slate-800">
          Detected Entities
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {entities.map((entity, index) => (
          <span
            key={index}
            className={`
              px-3 py-1 rounded-full text-sm font-medium border
              ${getTagColor(entity.type)}
              hover:scale-105 transition-transform cursor-pointer
            `}
            title={
              entity.confidence
                ? `Confidence: ${Math.round(entity.confidence * 100)}%`
                : ""
            }
          >
            {entity.name}
          </span>
        ))}
      </div>
    </div>
  );
};
