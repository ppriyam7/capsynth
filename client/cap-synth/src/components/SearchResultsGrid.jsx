const SearchResultsGrid = ({ results, isLoading, onPlay, onLike, onShare }) => {
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (!results || results.length === 0) {
    return <NoResultsFound />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {results.map((result) => (
        <SearchResultCard
          key={result.id}
          result={result}
          onPlay={onPlay}
          onLike={onLike}
          onShare={onShare}
        />
      ))}
    </div>
  );
};
