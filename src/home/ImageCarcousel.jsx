import * as React from "react";

// Card components imported for carousel items
import { Card, CardContent } from "@/components/ui/card";

// Carousel components imported for the image carousel functionality
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Array of image carousel
const travelImagesArr = [
  "/src/assets/hero-img/beach.jpeg",
  "/src/assets/hero-img/female-traveler.jpg",
  "/src/assets/hero-img/landmark.jpeg",
  "/src/assets/hero-img/plane.jpg",
  "/src/assets/hero-img/plane2.jpg",
];

// ImageCarousel component
export function ImageCarousel() {
  return (
    <div className="bg-gray-200 min-h-[70vh] py-10 flex justify-center items-center overflow-hidden">
      <Carousel className="w-2/3">
        <CarouselContent>
          {/* Looping through each image in the 'travelImagesArr' array */}
          {travelImagesArr.map((src, count) => (
            <CarouselItem key={count} className="flex justify-center">
              {/* Card component */}
              <Card className="w-full">
                <CardContent className="flex justify-center">
                  {/* Image styling */}
                  <img
                    src={src}
                    alt={`Travel images ${count + 1}`}
                    className="w-full h-100 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Previous button */}
        <CarouselPrevious className="cursor-pointer p-8" />

        {/* Carousel Next button */}
        <CarouselNext className="cursor-pointer p-8" />
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
