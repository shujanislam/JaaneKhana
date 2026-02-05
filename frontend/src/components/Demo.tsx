export default function Demo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Mobile view */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-xs">
              {/* Mobile phone frame */}
              <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-black" style={{aspectRatio: '9/19.5'}}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black rounded-b-3xl w-40 h-6 z-20"></div>
                
                {/* Screen content */}
                <div className="bg-white w-full  h-full overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full  object-cover"
                  >
                    <source src="/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
                See It In Action
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Experience the seamless interface of JaaneKhana. Scan any food label, 
                understand complex ingredients instantly, and make informed choices 
                all in one intuitive platform.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100">
                    <span className="text-green-700 font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Scan & Analyze</h3>
                  <p className="text-gray-600 mt-1">Snap a photo of any food label and get instant AI analysis</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100">
                    <span className="text-green-700 font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Understand Ingredients</h3>
                  <p className="text-gray-600 mt-1">Complex chemicals translated to simple, human-level insights</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100">
                    <span className="text-green-700 font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Make Better Choices</h3>
                  <p className="text-gray-600 mt-1">Get personalized recommendations based on your dietary needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
