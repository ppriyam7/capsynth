import { useState } from "react";
const SearchResultCard = ({ result, onPlay, onLike, onShare }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(result.isLiked || false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    onPlay?.(result.id, !isPlaying);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(result.id, !isLiked);
  };

  const getMediaIcon = () => {
    switch (result.type) {
      case "video":
        return <Video className="w-4 h-4" />;
      case "image":
        return <Image className="w-4 h-4" />;
      case "audio":
        return <Volume2 className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
        <img
          src={result.thumbnail}
          alt={result.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay Controls */}
        <div
          className={`
          absolute inset-0 bg-black/50 flex items-center justify-center
          transition-opacity duration-300
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
        >
          <button
            onClick={handlePlay}
            className="bg-white/90 hover:bg-white text-slate-800 p-4 rounded-full transition-all duration-200 hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </button>
        </div>

        {/* Duration Badge */}
        {result.duration && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{formatDuration(result.duration)}</span>
          </div>
        )}

        {/* Media Type Badge */}
        <div className="absolute top-2 left-2 bg-white/90 text-slate-700 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
          {getMediaIcon()}
          <span className="capitalize">{result.type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2 leading-snug">
          {result.title}
        </h3>

        <p className="text-sm text-slate-600 mb-3 line-clamp-2 leading-relaxed">
          {result.caption}
        </p>

        {/* Metadata */}
        <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3">
          <div className="flex items-center space-x-1">
            <Eye className="w-3 h-3" />
            <span>{result.views?.toLocaleString() || "0"}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{result.uploadDate}</span>
          </div>
          {result.language && (
            <div className="flex items-center space-x-1">
              <Globe className="w-3 h-3" />
              <span>{result.language.toUpperCase()}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {result.tags && result.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {result.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            {result.tags.length > 3 && (
              <span className="text-xs text-slate-500 px-2 py-1">
                +{result.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleLike}
              className={`
                flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                ${
                  isLiked
                    ? "bg-red-50 text-red-600 hover:bg-red-100"
                    : "text-slate-600 hover:bg-slate-100"
                }
              `}
            >
              <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
              <span>{result.likes + (isLiked ? 1 : 0)}</span>
            </button>

            <button
              onClick={() => onShare?.(result.id)}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          <button className="flex items-center space-x-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
            <Download className="w-4 h-4" />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};
