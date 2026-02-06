interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-shadow-green-200 hover:text-green-400"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
