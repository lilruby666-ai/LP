
import React from 'react';

export const Component = () => {
  // Imagens para o scroll infinito - focando apenas em transformações reais de clientes
  const images = [
    "https://i.imgur.com/aRDOtOY.png",
    "https://i.imgur.com/izMIug3.png",
    "https://i.imgur.com/zGReE8f.png",
    "https://i.imgur.com/6F8tG1S.png",
    "https://i.imgur.com/Ct481as.png",
    "https://i.imgur.com/KhslSYG.png",
    "https://i.imgur.com/qEJGt3I.png"
  ];

  // Duplicar imagens para um loop contínuo
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 40s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      {/* Container apenas para as imagens de rolagem */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="scroll-container w-full">
          <div className="infinite-scroll flex gap-6 w-max">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item flex-shrink-0 w-64 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden shadow-lg shadow-black/40"
              >
                <img
                  src={image}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
