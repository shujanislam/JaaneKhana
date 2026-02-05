export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to make informed food choices in one intelligent platform
          </p>
        </div>

        {/* Feature boxes grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ingredient Analysis Box */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-green-100 mb-6">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Ingredient Analysis
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Upload food labels and get instant AI-powered analysis. Our smart system decodes complex chemical names, additives, and provides clear insights about what you're eating.
            </p>
          </div>

          {/* Voice Explanation Box */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-green-100 mb-6">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Voice Explanations
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get responses in natural, conversational voice. Ask about ingredients and receive clear audio explanations, making food information accessible while you shop.
            </p>
          </div>

          {/* Health Insights Box */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-green-100 mb-6">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Smart Insights
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get personalized health insights based on your dietary preferences and concerns. Our AI highlights potential allergens, trade-offs, and what actually matters to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
