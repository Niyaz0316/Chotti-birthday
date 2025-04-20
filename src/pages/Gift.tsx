
import { useEffect, useState } from 'react';
import { Fireworks } from '@/components/Fireworks';
import { PhotoGallery } from '@/components/PhotoGallery';
import { motion } from 'framer-motion';

const Gift = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 1000);
    setTimeout(() => setShowPhotos(true), 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 relative overflow-x-hidden pb-12">
      <Fireworks />
      
      {showMessage && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10 relative pt-8 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow-lg">
            Happy Birthday Ayushka 🎉
          </h1>
          <p className="text-lg md:text-xl text-pink-200 max-w-2xl mx-auto leading-relaxed mb-8">
            “ Many more happy returns of the day Chotti!! 🥳. May your day be filled with joy 🤩, laughter, and all the love in the world!. Here's to another fabulous year ahead! Enjoy your special day to the fullest!. And Don’t forget to give Party!!! 😉 “
          </p>
        </motion.div>
      )}

      {showPhotos && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <PhotoGallery />
        </motion.div>
      )}
    </div>
  );
};

export default Gift;
