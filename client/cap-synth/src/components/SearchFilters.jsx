const { useState } = require("react");

import(useState);
const SearchFilters = ({ filters, onFiltersChange, resultCount }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (key, value) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      type: "all",
      duration: "any",
      language: "any",
      quality: "any",
      sortBy: "relevance",
    });
  };

  const activeFiltersCount = Object.values(filters).filter(
    (v) => v !== "all" && v !== "any" && v !== "relevance"
  ).length;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Filter className="w-5 h-5 text-slate-600" />
          <h3 className="font-semibold text-slate-800">Filters</h3>
          {activeFiltersCount > 0 && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-3">
          {resultCount !== undefined && (
            <span className="text-sm text-slate-500">
              {resultCount.toLocaleString()} results
            </span>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            {isExpanded ? "Less" : "More"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {/* Media Type Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange("type", e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Media</option>
            <option value="image">Images</option>
            <option value="video">Videos</option>
            <option value="audio">Audio</option>
          </select>
        </div>

        {/* Duration Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Duration
          </label>
          <select
            value={filters.duration}
            onChange={(e) => handleFilterChange("duration", e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="any">Any Length</option>
            <option value="short">Under 1 min</option>
            <option value="medium">1-5 min</option>
            <option value="long">5+ min</option>
          </select>
        </div>

        {/* Language Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Language
          </label>
          <select
            value={filters.language}
            onChange={(e) => handleFilterChange("language", e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="any">Any Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange("sortBy", e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="popular">Most Popular</option>
            <option value="duration">Duration</option>
          </select>
        </div>
      </div>

      {/* Expanded Filters */}
      {isExpanded && (
        <div className="border-t border-slate-200 pt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Quality
              </label>
              <select
                value={filters.quality}
                onChange={(e) => handleFilterChange("quality", e.target.value)}
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="any">Any Quality</option>
                <option value="hd">HD (720p+)</option>
                <option value="fhd">Full HD (1080p+)</option>
                <option value="4k">4K (2160p+)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Upload Date
              </label>
              <select
                value={filters.uploadDate}
                onChange={(e) =>
                  handleFilterChange("uploadDate", e.target.value)
                }
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="any">Any Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors border border-slate-300"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
