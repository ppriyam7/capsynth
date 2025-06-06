import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Filter,
  X,
  Play,
  Pause,
  Volume2,
  Clock,
  Calendar,
  Globe,
  Image,
  Video,
  FileText,
  Zap,
  Sparkles,
  TrendingUp,
  Eye,
  Download,
  Heart,
  Share2,
} from "lucide-react";

// SearchBar Component
const SearchBar = ({
  onSearch,
  placeholder = "Search for media, captions, or topics...",
  isLoading,
}) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions] = useState([
    "sunset landscape photography",
    "business meeting presentation",
    "cooking tutorial videos",
    "wildlife documentary clips",
    "urban street photography",
  ]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (searchQuery = query) => {
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      inputRef.current?.blur();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    handleSubmit(suggestion);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div
        className={`
        relative flex items-center bg-white rounded-2xl shadow-lg border-2 transition-all duration-300
        ${
          isFocused
            ? "border-blue-500 shadow-xl scale-[1.02]"
            : "border-slate-200 hover:border-slate-300"
        }
      `}
      >
        <div className="absolute left-4 flex items-center">
          <Search
            className={`w-5 h-5 transition-colors ${
              isFocused ? "text-blue-500" : "text-slate-400"
            }`}
          />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setIsFocused(true);
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setIsFocused(false);
            // Delay hiding suggestions to allow clicks
            setTimeout(() => setShowSuggestions(false), 200);
          }}
          placeholder={placeholder}
          className="w-full pl-12 pr-16 py-4 text-lg bg-transparent border-none outline-none placeholder-slate-400"
        />

        {query && (
          <button
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-16 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => handleSubmit()}
          disabled={isLoading || !query.trim()}
          className={`
            absolute right-2 p-3 rounded-xl font-medium transition-all duration-200
            ${
              query.trim() && !isLoading
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
            }
          `}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Zap className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Search Suggestions */}
      {showSuggestions && query.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-slate-200 z-50 overflow-hidden">
          <div className="p-2">
            <div className="text-xs font-medium text-slate-500 px-3 py-2">
              Suggestions
            </div>
            {suggestions
              .filter((s) => s.toLowerCase().includes(query.toLowerCase()))
              .slice(0, 5)
              .map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <Search className="w-4 h-4 text-slate-400" />
                  <span>{suggestion}</span>
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
