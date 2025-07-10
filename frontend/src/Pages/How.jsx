import { MessageCircle, Video, Users, Shield, Zap, Globe } from "lucide-react"

const How = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "🗨️ Chatroom System",
      items: [
        "Real-time communication in chatrooms",
        "Private chatrooms (creator ↔ editor)",
        "Public topic-based community chatrooms",
        "Typing indicators and optional read receipts",
        "Drag & drop file uploads",
      ],
    },
    {
      icon: Video,
      title: "🎞️ Video File Sharing & Previews",
      items: [
        "Upload large video files with progress tracking",
        "Preview videos directly in chat",
        "Retry failed uploads",
        "Supports thumbnails, scripts, and other assets",
      ],
    },
    {
      icon: Users,
      title: "👥 Collaboration Tools",
      items: [
        "Real-time collaborative editing",
        "Version control and history tracking",
        "Comment and review system",
        "Team member permissions",
        "Project timeline management",
      ],
    },
    {
      icon: Shield,
      title: "🔒 Security & Privacy",
      items: [
        "End-to-end encryption for private chats",
        "Secure file storage and sharing",
        "User authentication and authorization",
        "Data backup and recovery",
        "GDPR compliant privacy controls",
      ],
    },
    {
      icon: Zap,
      title: "⚡ Performance Features",
      items: [
        "Lightning-fast message delivery",
        "Optimized file compression",
        "Offline mode support",
        "Smart caching system",
        "Low bandwidth optimization",
      ],
    },
    {
      icon: Globe,
      title: "🌐 Cross-Platform Support",
      items: [
        "Web, mobile, and desktop apps",
        "Seamless synchronization across devices",
        "Progressive web app capabilities",
        "Multi-language support",
        "Accessibility features",
      ],
    },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-lg sm:text-xl text-primaryText font-semibold max-w-3xl mx-auto">
            Discover the powerful features that make our platform the perfect solution for your communication and
            collaboration needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white/10 border border-amber-100/20 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:bg-white/15 hover:border-amber-100/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-amber-400/20 rounded-full group-hover:bg-amber-400/30 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-amber-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-amber-100 text-xl font-semibold text-center mb-4 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Feature List */}
                  <ul className="text-gray-300 space-y-3 text-sm">
                    {feature.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-purple-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default How


