import React from "react";
import { useEffect } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function BottomSheet({ isOpen, onClose, title, children }: BottomSheetProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-5xl">
        <div className="h-[90vh] rounded-t-3xl bg-white dark:bg-gray-900 shadow-2xl overflow-auto transform transition-transform duration-300">
          <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">{title}</h3>
            <button onClick={onClose} className="text-sm text-gray-500">Close</button>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
