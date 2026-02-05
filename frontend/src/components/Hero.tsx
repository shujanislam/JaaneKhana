import { Button } from '@/components/ui/button';

export default function Hero() {

  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-32 pb-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Robot Doctor with floating animation */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md animate-float">
              <img
                src="/doc.png"
                alt="Robot Doctor"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
                Jaane<span className='text-blue-700'>Khana</span><span className='text-green-500'></span> 
              </h1>
              <span className="text-3xl font-bold text-blue-900">Your AI Companion</span>
                <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                Experience healthcare reimagined with cutting-edge AI. Get instant medical guidance, personalized health insights, and 24/7 support from your intelligent doctor.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-6 text-base">
                Start Free Consultation
              </Button>
              <Button
                variant="outline"
                className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-6 text-base bg-transparent hover:text-blue-900"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
