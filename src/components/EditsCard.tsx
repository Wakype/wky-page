"use client";

import { CardContent } from "@/components/ui/card";
import { CardHeaderComponent } from "@/components/CardHeaderComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { FaLayerGroup } from "react-icons/fa6";
import Fade from "embla-carousel-fade";

interface EditsCardProps {
  images: { src: string; alt: string }[];
}

export const EditsCard: React.FC<EditsCardProps> = ({ images }) => {
  return (
    <>
      <CardHeaderComponent
        icon={<FaLayerGroup />}
        title="Edits"
        subtitle="Click to view full size"
      />
      <CardContent className="w-full h-full">
        <Carousel
          opts={{
            loop: true,
            containScroll: false,
          }}
          plugins={[
            Autoplay({
              stopOnInteraction: false,
            }),
            Fade({}),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="w-full h-full">
            {images.map((image, index) => (
              <CarouselItem key={index} className="relative my-2 w-full">
                <div className="w-full h-full transition-all flex items-center justify-center ease-in-out group-hover:bg-[#000000be] z-20 absolute top-0 left-0 rounded-lg">
                  <p className="group-hover:opacity-100 opacity-0">View full size</p>
                </div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </>
  );
};
