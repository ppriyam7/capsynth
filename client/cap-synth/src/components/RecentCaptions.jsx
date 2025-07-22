const RecentCaptionsList = ({ captions }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Captions</h2>
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
          <Eye size={16} />
          <span className="text-sm font-medium">View All</span>
        </button>
      </div>
      <div className="space-y-4">
        {captions.map((caption) => (
          <div
            key={caption.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{caption.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Globe size={14} className="mr-1" />
                    {caption.language}
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {caption.duration}
                  </span>
                  <span>{caption.timestamp}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  caption.status
                )}`}
              >
                {caption.status}
              </span>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
