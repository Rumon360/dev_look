import { Monitor, Smartphone } from "lucide-react";
import React from "react";

function MobieView() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center space-y-6">
        <div className="flex justify-center space-x-6">
          <div className="relative">
            <Smartphone className="w-12 h-12 text-red-500" />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✕</span>
            </div>
          </div>
          <Monitor className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Desktop Only</h1>
        <div className="space-y-4">
          <p className="text-gray-600">
            We apologize, but this website is not yet optimized for mobile
            devices.
          </p>
          <p className="text-gray-600">
            Please use a desktop or laptop computer for the best experience.
          </p>
        </div>

        <div className="pt-4">
          <div className="inline-block bg-blue-50 rounded-lg px-4 py-2">
            <p className="text-sm text-blue-700">
              We&apos;re working on making this site mobile-friendly!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobieView;
