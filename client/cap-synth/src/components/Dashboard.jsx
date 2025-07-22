import React, { useState, useEffect } from "react";
import { mockData } from "../lib/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";
import {
  Activity,
  FileText,
  Globe,
  TrendingUp,
  Calendar,
  Filter,
  Search,
  Download,
  Eye,
  Clock,
  Languages,
} from "lucide-react";
const Dashboard = () => {
  const [data] = useState(mockData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <DashboardHeader />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Captions"
            value={data.stats.totalCaptions.toLocaleString()}
            subtitle="All time"
            icon={FileText}
            trend="+12.5%"
            color="blue"
          />
          <StatCard
            title="Today's Captions"
            value={data.stats.todayCaptions}
            subtitle="Generated today"
            icon={Activity}
            trend="+8.2%"
            color="green"
          />
          <StatCard
            title="Active Languages"
            value={data.stats.activeLanguages}
            subtitle="Currently supported"
            icon={Globe}
            color="purple"
          />
          <StatCard
            title="Avg Processing Time"
            value={`${data.stats.avgProcessingTime}s`}
            subtitle="Per minute of video"
            icon={Clock}
            trend="-15.3%"
            color="orange"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <CaptionActivityChart data={data.activityData} />
          <LanguageUsageChart data={data.languageData} />
        </div>

        {/* Recent Captions */}
        <RecentCaptionsList captions={data.recentCaptions} />
      </div>
    </div>
  );
};

export default Dashboard;
