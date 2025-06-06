const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
        >
          {/* Thumbnail Skeleton */}
          <div className="aspect-video bg-slate-200 animate-pulse"></div>

          {/* Content Skeleton */}
          <div className="p-4 space-y-3">
            <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-3 bg-slate-200 rounded w-full animate-pulse"></div>
              <div className="h-3 bg-slate-200 rounded w-2/3 animate-pulse"></div>
            </div>
            <div className="flex space-x-2">
              <div className="h-6 bg-slate-200 rounded-full w-16 animate-pulse"></div>
              <div className="h-6 bg-slate-200 rounded-full w-12 animate-pulse"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-8 bg-slate-200 rounded w-20 animate-pulse"></div>
              <div className="h-8 bg-slate-200 rounded w-16 animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
