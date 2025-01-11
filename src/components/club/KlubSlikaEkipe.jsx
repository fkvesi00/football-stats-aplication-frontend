import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


function KlubSlikaEkipe({logo}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSize = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className="flex justify-center items-center my-8">
          <AnimatePresence>
            {!isOpen && (
              <motion.img
                src={logo}
                alt="Squad"
                className="cursor-pointer"
                style={{
                  borderRadius: '10px',
                  padding: '20px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  maxWidth: '300px', // Matches the size of KlubInformacije
                  width: '100%',
                  objectFit: 'cover',
                }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                onClick={toggleSize}
              />
            )}
    
            {isOpen && (
              <motion.div
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleSize}
              >
                <motion.img
                  src={logo}
                  alt="Squad Enlarged"
                  className="rounded-lg shadow-lg cursor-pointer"
                  style={{
                    maxWidth: '90%',
                    maxHeight: '90%',
                  }}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

export default KlubSlikaEkipe
