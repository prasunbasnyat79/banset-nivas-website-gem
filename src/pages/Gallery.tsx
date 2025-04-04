
import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: "house.jpg",
      alt: "Banset Niwās Front View",
    },
    {
      src: "house-image1.jpg",
      alt: "Banset Niwās Side View",
    },
    {
      src: "house-image2.jpg",
      alt: "Living Room",
    },
    {
      src: "house-image3.jpg",
      alt: "Study Room",
    },
    {
      src: "house-image4.jpg",
      alt: "Garden View",
    },
    {
      src: "house-image5.jpg",
      alt: "Another View of Banset Niwās",
    },
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <PageLayout>
      <div className="page-container">
        <div className="container">
          <h1 className="page-title text-center">Gallery</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 max-w-6xl mx-auto">
            {images.map((image, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-500",
                    "group-hover:scale-110"
                  )}
                />
              </div>
            ))}
          </div>

          <Dialog open={!!selectedImage} onOpenChange={() => closeLightbox()}>
            <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/90 border-none">
              <button
                onClick={closeLightbox}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-2 text-white hover:bg-black/40 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </PageLayout>
  );
};

export default Gallery;
