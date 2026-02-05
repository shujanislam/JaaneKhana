export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="JaaneKhana logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-semibold">JaaneKhana</span>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed">
              Your AI food copilot. Instantly understand food ingredients and make informed choices about what you eat.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/></svg>
              </a>
              <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"/></svg>
              </a>
              <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Security</a></li>
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Terms</a></li>
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Data Policy</a></li>
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-300 text-sm">
              &copy; 2026 JaaneKhana. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Status</a>
              <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Accessibility</a>
              <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors text-sm">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
