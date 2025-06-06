const NoResultsFound = ({ query, onRetry }) => {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
          <Search className="w-10 h-10 text-slate-400" />
        </div>

        <h3 className="text-xl font-semibold text-slate-800 mb-3">
          No results found
        </h3>

        <p className="text-slate-600 mb-6 leading-relaxed">
          {query
            ? `We couldn't find any media matching "${query}". Try adjusting your search terms or filters.`
            : "Try searching for images, videos, or specific topics to get started."}
        </p>

        <div className="space-y-4">
          <div className="text-sm text-slate-500">
            <p className="font-medium mb-2">Suggestions:</p>
            <ul className="space-y-1">
              <li>• Check your spelling</li>
              <li>• Try broader search terms</li>
              <li>• Remove some filters</li>
              <li>• Browse trending content</li>
            </ul>
          </div>

          {onRetry && (
            <button
              onClick={onRetry}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Explore Trending</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
