import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Play,
  Search,
  FileText,
  Mic,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  Users,
  Clock,
  Shield,
  Video,
  Headphones,
  Brain,
  Activity,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);

  const features = [
    {
      icon: <Play className="w-8 h-8" />,
      title: "AI Video Captioning",
      description:
        "Automatically generate accurate captions for your videos with state-of-the-art AI technology",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Semantic Search",
      description:
        "Find exactly what you need with intelligent search that understands context and meaning",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Auto Video Descriptions",
      description:
        "Generate comprehensive video descriptions automatically for better accessibility and SEO",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Live Captioning",
      description:
        "Real-time caption generation for live streams, meetings, and presentations",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Live Translation",
      description:
        "Instant translation of captions into multiple languages for global accessibility",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description:
        "Process videos in seconds with our optimized AI pipeline and cloud infrastructure",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const integrations = [
    {
      name: "YouTube",
      description: "Direct upload with captions",
      icon: <Video className="w-8 h-8 text-red-500" />,
      color: "border-red-500/30 hover:border-red-500/60",
    },
    {
      name: "Zoom",
      description: "Live meeting captions",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      color: "border-blue-500/30 hover:border-blue-500/60",
    },
    {
      name: "Spotify",
      description: "Podcast transcription",
      icon: <Headphones className="w-8 h-8 text-green-500" />,
      color: "border-green-500/30 hover:border-green-500/60",
    },
    {
      name: "Premiere Pro",
      description: "Video editing workflow",
      icon: <Activity className="w-8 h-8 text-purple-500" />,
      color: "border-purple-500/30 hover:border-purple-500/60",
    },
    {
      name: "Twitch",
      description: "Stream captioning",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      color: "border-purple-400/30 hover:border-purple-400/60",
    },
    {
      name: "Discord",
      description: "Voice chat transcription",
      icon: <Mic className="w-8 h-8 text-indigo-500" />,
      color: "border-indigo-500/30 hover:border-indigo-500/60",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      content:
        "CapSynth transformed how I create accessible content. The accuracy is incredible!",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Marcus Johnson",
      role: "Education Director",
      content:
        "Live translation feature is a game-changer for our international conferences.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Manager",
      content:
        "The semantic search helps us find specific moments in hours of video content instantly.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        style={{ y: headerY }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">CapSynth</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Features", "Pricing", "About", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {["Features", "Pricing", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <motion.div
          style={{ y: heroY }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6"
            >
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm">
                Trusted by 10,000+ creators worldwide
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              AI-Powered
              <br />
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Video Captioning
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Transform your videos with intelligent captions, semantic search,
              auto-descriptions, and real-time translation. Make content
              accessible to everyone, everywhere.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Demo Video Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-1 rounded-2xl backdrop-blur-sm">
              <div className="bg-black/50 rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-blue-500/30"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">Live Captioning</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7, duration: 0.8 }}
                    className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-purple-500/30"
                  >
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">120+ Languages</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Works With Your Favorite Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Seamlessly integrate CapSynth with the platforms and tools you
              already use
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border ${integration.color} rounded-2xl p-6 hover:border-opacity-100 transition-all duration-300`}
              >
                <div className="text-center">
                  <motion.div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {integration.icon}
                  </motion.div>

                  <h3 className="text-lg font-bold mb-2 text-white">
                    {integration.name}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {integration.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to make your video content accessible,
              searchable, and globally available
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Loved by Creators
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See what our users have to say about transforming their video
              content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are making their content accessible
              to everyone. Start your free trial today - no credit card
              required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center space-x-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <div className="flex items-center space-x-2 text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No credit card required</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">CapSynth</span>
            </div>

            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-white transition-colors">
                API
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500">
            <p>
              &copy; 2025 CapSynth. All rights reserved. Making video content
              accessible to everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
