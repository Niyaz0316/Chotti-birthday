
import { motion } from 'framer-motion';

const photos = [
  "/lovable-uploads/01bb64b8-38f8-4e12-94c9-80f939460c91.png",
  "/lovable-uploads/890d40db-08ff-4435-a676-a1b8c788168c.png",
  "/lovable-uploads/68480093-d551-4081-ae63-b72b3415626f.png",
  "/lovable-uploads/5c7503b7-c142-4d8d-a5df-3e83a798e06f.png",
  "/lovable-uploads/ae4fcba8-3cb1-41cc-a026-771529cb0d12.png",
  "/lovable-uploads/80bc64cb-8ff8-451d-b051-f311505e02c7.png"
];

export const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 max-w-7xl mx-auto">
      {photos.map((photo, index) => (
        <motion.div
          key={photo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <img
            src={photo}
            alt={`Birthday memory ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};
