
import { useEffect, useState } from 'react';
import { Fireworks } from '@/components/Fireworks';
import { motion } from 'framer-motion';

const Gift = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 relative overflow-hidden flex items-center justify-center">
      <Fireworks />
      
      {showMessage && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            Happy Birthday Ayushka! 🎉
          </h1>
          <p className="text-xl text-pink-200 max-w-2xl mx-auto leading-relaxed">
            May your day be filled with joy, laughter, and all the love in the world!
            Thank you for being such an amazing friend. Here's to many more years of
            friendship and celebrations! 🎂✨
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Gift;
