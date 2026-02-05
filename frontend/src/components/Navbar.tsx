import { Button } from '@/components/ui/button';
import { useState, memo } from 'react';
import Model from "@/components/ui/Model"
import DragDropDemo from './ui/Try';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <nav className="sticky top-0 z-50 border-b border-blue-200 bg-white backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
           <a href="/" className="flex items-center gap-2 text-blue-900">
            <img
              src="/logo.png"
              alt="JaaneKhana logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold tracking-tight">JaaneKhana</span>
          </a>

          {/* Right: CTA buttons */}
          {/* Demo */}

          <div>
            <div className="flex items-center gap-4">
              <Button size="sm" className="bg-white border-2 px-5 text-blue-900 border-blue-900 hover:bg-white"
              onClick={() => setIsModalOpen(true)}>
                Try It
              </Button>
              <Button size="sm" className="bg-blue-900 text-white hover:bg-blue-800">
                Get started
              </Button>
            </div>
         </div>
        </div>
      </div>
    </nav>

    <Model isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <DragDropDemo />
    </Model>
    </>
  );
}

export default memo(Navbar);
