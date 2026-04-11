import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Zap, Database, Search, GitBranch, Users } from "lucide-react";
import { Streamdown } from 'streamdown';

/**
 * Design Philosophy: Modern Data Visualization
 * - Glassmorphic cards with backdrop blur
 * - Gradient color scheme: slate blue → purple → pink
 * - Animated data visualizations
 * - Poppins typography for modern aesthetic
 * - Organic, floating layout
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Github className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              GitHub Connector
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#capabilities" className="text-sm font-medium hover:text-primary transition">
              Capabilities
            </a>
            <a href="#data" className="text-sm font-medium hover:text-primary transition">
              Demo Data
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663419363466/i6zGV8oeSzBKXkKngxah4p/github-hero-iQ4Uufym5w8hBA8VzcEngJ.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
              GitHub Connector Capabilities
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover powerful tools for fetching, analyzing, and visualizing GitHub data with seamless integration and real-time insights.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg transition">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 relative">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Core Capabilities
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            The GitHub connector provides comprehensive access to GitHub's ecosystem through a powerful CLI interface.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Capability Cards */}
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "Authentication Management",
                description: "Securely log in and manage GitHub accounts with support for personal access tokens and OAuth.",
              },
              {
                icon: <GitBranch className="w-6 h-6" />,
                title: "Repository Management",
                description: "List, create, clone, and manage repositories with detailed metadata like stars and update times.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "User & Organization Info",
                description: "Fetch detailed profiles including public repositories, followers, and biographical information.",
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: "Issue & PR Management",
                description: "Search, view, and manage issues and pull requests with advanced filtering capabilities.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Direct API Access",
                description: "Access the GitHub API directly for granular control and custom data queries.",
              },
              {
                icon: <Github className="w-6 h-6" />,
                title: "Shell Integration",
                description: "Seamless integration with shell scripts for automation of GitHub workflows.",
              },
            ].map((capability, idx) => (
              <div
                key={idx}
                className="group relative backdrop-blur-xl bg-white/40 hover:bg-white/60 border border-white/50 hover:border-white/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center text-primary mb-4 group-hover:shadow-lg transition">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Data Section */}
      <section id="data" className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663419363466/i6zGV8oeSzBKXkKngxah4p/capabilities-bg-VdKUpcNPLWe6mGbmdBDF8W.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-white/80" />
        
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Live Data Demonstration
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Real data fetched from the GitHub connector showcasing its powerful capabilities.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* User Profile Card */}
            <div className="backdrop-blur-xl bg-white/50 border border-white/50 rounded-2xl p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                User Profile
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Login</span>
                  <code className="bg-gray-100 px-3 py-1 rounded text-primary font-mono text-sm">
                    SunShineHead
                  </code>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Name</span>
                  <span className="text-gray-900 font-semibold">Debug-Bot</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Public Repos</span>
                  <span className="text-lg font-bold text-primary">7</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Followers</span>
                  <span className="text-lg font-bold text-purple-600">4</span>
                </div>
                <div className="pt-3">
                  <span className="text-gray-600 font-medium block mb-2">Bio</span>
                  <p className="text-gray-700 italic">
                    "Everything is beautiful in its time."
                  </p>
                </div>
              </div>
            </div>

            {/* Repositories Card */}
            <div className="backdrop-blur-xl bg-white/50 border border-white/50 rounded-2xl p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <GitBranch className="w-6 h-6 text-primary" />
                Recent Repositories
              </h3>
              <div className="space-y-3">
                {[
                  { name: "phish.py", stars: 1, desc: "Python Package Using Conda / Test With Pytest" },
                  { name: "OASIS", stars: 1, desc: "Python-Package-In-Conda" },
                  { name: "Python-Package-In-Conda", stars: 1, desc: "@Install PiP with pytest" },
                  { name: "slsa", stars: 0, desc: "Supply-chain Levels for Software Artifacts" },
                ].map((repo, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-lg hover:from-primary/10 hover:to-purple-600/10 transition"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{repo.name}</p>
                        <p className="text-xs text-gray-600 mt-1">{repo.desc}</p>
                      </div>
                      <span className="text-xs font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded whitespace-nowrap">
                        ⭐ {repo.stars}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Issues Table */}
          <div className="mt-8 backdrop-blur-xl bg-white/50 border border-white/50 rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Search className="w-6 h-6 text-primary" />
              Open Issues
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Title</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Repository</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      title: "(MNV)Scikit-Learn-ML-Pipeline",
                      repo: "chinweifly/4sq",
                      url: "https://github.com/chinweifly/4sq/issues/68",
                    },
                    {
                      title: "2026讲解第一:旺 旺 商 聊",
                      repo: "esadx8202/1",
                      url: "https://github.com/esadx8202/1/issues/3665",
                    },
                    {
                      title: "(VKW)Spring-Boot-Microservices",
                      repo: "pkanchouhten/e4t",
                      url: "https://github.com/pkanchouhten/e4t/issues/69",
                    },
                  ].map((issue, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition">
                      <td className="py-3 px-4 text-gray-700 font-medium">{issue.title}</td>
                      <td className="py-3 px-4">
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs text-primary font-mono">
                          {issue.repo}
                        </code>
                      </td>
                      <td className="py-3 px-4">
                        <a
                          href={issue.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-purple-600 font-semibold transition"
                        >
                          View →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Connect with GitHub?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Start leveraging the GitHub connector to automate workflows, fetch data, and streamline your development process.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg transition">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-md py-8">
        <div className="container text-center text-gray-600 text-sm">
          <p>
            GitHub Connector Capabilities Showcase • Built with React & Tailwind CSS
          </p>
          <p className="mt-2">
            Powered by <span className="font-semibold text-primary">Manus</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
