
import { motion } from 'framer-motion';

const photos = [
  "/lovable-uploads/01bb64b8-38f8-4e12-94c9-80f939460c91.png",
  "/lovable-uploads/890d40db-08ff-4435-a676-a1b8c788168c.png",
  "/lovable-uploads/68480093-d551-4081-ae63-b72b3415626f.png"
];

export const PhotoGallery = () => {
  return (
    <div className="relative max-w-5xl mx-auto p-8">
      <motion.div 
        className="relative p-8 rounded-xl bg-white/10 backdrop-blur-sm border-4 border-pink-300 shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 px-8 py-2 rounded-full shadow-lg">
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative aspect-square rounded-lg overflow-hidden border-2 border-pink-200 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={photo}
                alt={`Birthday Girl ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 px-6 py-1 rounded-full shadow-lg">
          
        </div>
      </motion.div>
    </div>
  );
};
