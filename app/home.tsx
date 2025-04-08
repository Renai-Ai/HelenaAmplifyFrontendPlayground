import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full" />
          <span className="text-xl font-bold">
            Deep<span className="text-orange-400">TLDR</span>
          </span>
        </div>
        <div className="flex items-center space-x-8">
          <Link href="/features" className="text-white hover:text-orange-400">
            Features
          </Link>
          <Link href="/about" className="text-white hover:text-orange-400">
            About
          </Link>
          <Link
            href="/signup"
            className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500"
          >
            Sign Up for Early Access
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-bold mb-6">
              AI-Powered Research
              <br />
              <span className="text-orange-400">At Your Fingertips</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Built for developers, individuals, and teams, DeepTLDR automates
              content monitoring and summarization with powerful APIs, flexible
              triggers, and smart notifications.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <div className="relative w-[600px] h-[400px]">
              <Image
                src="/laptop-mockup.png"
                alt="DeepTLDR Platform"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-orange-400 text-sm uppercase tracking-wider">
            About
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-8">
            Automate Web Monitoring with DeepTLDR
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            DeepTLDR is a Software as a Service (SaaS) designed to monitor
            websites and web search topics systematically and efficiently. It
            provides developers easy-to-use APIs in Python and JavaScript to
            facilitate the integration of automated monitoring and summarization
            functionalities into their applications or AI agents.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <span className="text-orange-400 text-sm uppercase tracking-wider block text-center">
            Features
          </span>
          <h2 className="text-4xl font-bold text-center mt-4 mb-4">
            Key Features of Our Platform
          </h2>
          <p className="text-gray-400 text-center mb-16">
            Discover our cutting-edge AI-powered solutions.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Website Monitoring */}
            <div className="bg-gray-900 rounded-xl p-8 col-span-3">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <Image
                    src="/monitoring-devices.png"
                    alt="Website Monitoring"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">
                    Website and Topic Monitoring
                  </h3>
                  <p className="text-gray-400">
                    Easily monitor specified websites and search topics in
                    real-time with flexible tracking options. Whether you need
                    updates every few minutes or on a monthly basis, this
                    feature ensures you stay informed.
                  </p>
                </div>
              </div>
            </div>

            {/* API Integration */}
            <div className="bg-gray-900 rounded-xl p-8">
              <div className="flex flex-col gap-4">
                <Image
                  src="/api-icon.png"
                  alt="API Integration"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
                <h3 className="text-2xl font-bold">API and Integration</h3>
                <p className="text-gray-400">
                  A developer-friendly API for seamless integration, enabling
                  programmatic control of monitoring agents in Python or
                  JavaScript. Use your own API keys for various LLMs and
                  notifications platforms, or use our keys.
                </p>
              </div>
            </div>

            {/* Web Platform */}
            <div className="bg-gray-900 rounded-xl p-8">
              <div className="flex flex-col gap-4">
                <Image
                  src="/web-platform.png"
                  alt="Web Platform"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
                <h3 className="text-2xl font-bold">Web-based Platform</h3>
                <p className="text-gray-400">
                  We support natural language statement to create agent as well
                  as comprehensive no-code monitoring platform with budgeting
                  for tracking agent results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Team</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">
                We are a MIT and Harvard based startup
              </h3>
              <p className="text-gray-400 mb-6">
                We are a MIT and Harvard based startup with a talented
                multi-disciplinary team of AI, Cloud, Simulation, and optical
                computing experts.
              </p>
              <Link
                href="/team"
                className="text-orange-400 hover:text-orange-500"
              >
                More here
              </Link>
            </div>
            <div className="flex items-center gap-8">
              <Image
                src="/mit-logo.png"
                alt="MIT"
                width={120}
                height={60}
                className="object-contain"
              />
              <Image
                src="/harvard-logo.png"
                alt="Harvard University"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              © 2023-2025, DeepTLDR by RenAI, A Simulate Anything Inc. Company.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
