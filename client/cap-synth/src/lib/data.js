const mockData = {
  stats: {
    totalCaptions: 15847,
    todayCaptions: 142,
    activeLanguages: 8,
    avgProcessingTime: 2.3,
  },
  activityData: [
    { date: "2024-06-07", captions: 120 },
    { date: "2024-06-08", captions: 145 },
    { date: "2024-06-09", captions: 98 },
    { date: "2024-06-10", captions: 167 },
    { date: "2024-06-11", captions: 203 },
    { date: "2024-06-12", captions: 156 },
    { date: "2024-06-13", captions: 142 },
  ],
  languageData: [
    { name: "English", value: 45, color: "#3B82F6" },
    { name: "Spanish", value: 20, color: "#EF4444" },
    { name: "French", value: 15, color: "#10B981" },
    { name: "German", value: 10, color: "#F59E0B" },
    { name: "Japanese", value: 6, color: "#8B5CF6" },
    { name: "Others", value: 4, color: "#6B7280" },
  ],
  recentCaptions: [
    {
      id: 1,
      title: "Product Demo Video",
      language: "English",
      duration: "2:34",
      status: "completed",
      timestamp: "2 minutes ago",
    },
    {
      id: 2,
      title: "Conference Presentation",
      language: "Spanish",
      duration: "15:22",
      status: "processing",
      timestamp: "5 minutes ago",
    },
    {
      id: 3,
      title: "Tutorial Series Ep. 1",
      language: "French",
      duration: "8:45",
      status: "completed",
      timestamp: "12 minutes ago",
    },
    {
      id: 4,
      title: "Webinar Recording",
      language: "English",
      duration: "45:18",
      status: "completed",
      timestamp: "1 hour ago",
    },
    {
      id: 5,
      title: "Interview Session",
      language: "German",
      duration: "23:56",
      status: "completed",
      timestamp: "2 hours ago",
    },
  ],
};

export default mockData;
