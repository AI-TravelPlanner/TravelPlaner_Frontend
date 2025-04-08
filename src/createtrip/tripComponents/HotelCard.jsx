/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PHOTO_REF_URL,
  getPlaceDetail,
} from "@/service/thirdparty/GooglePhotoAPI";

const HotelCard = ({ hotelDetails }) => {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    hotelDetails && GetPlacePhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotelDetails]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotelDetails?.hotelName,
    };

    const result = await getPlaceDetail(data).then((resp) => {
      console.log(resp.data.places[0].photos[3].name + " 1st photo");

      const photoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(photoUrl);
    });
  };

  // This component will display the hotel information in a card format

  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
    }
  }

  return (
    <div
      className={cn(
        "cursor-pointer w-full h-full min-h-0 min-w-0 dark:border-gray-700 dark:bg-gray-800"
      )}
      onClick={handleFlip}
    >
      <motion.div
        className="relative preserve-3d duration-300 hover:scale-105"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 grid grid-row-4 "
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <Link
            to={
              "https://www.google.com/maps/search/?q=" + hotelDetails?.hotelName
            }
            target="_blank"
          >
                <div className="col-span-3 rounded-lg overflow-hidden flex-shrink-0 hover:scale-110 transition-all">
              <img
                src={photoUrl ? photoUrl : "/Sheraton.jpg"}
                alt="Activity"
                className="w-full h-[90px] object-cover"
              />
            </div>
          </Link>
          <h2 className="text-[75%] font-bold">{hotelDetails.hotelName}</h2>
          <p className="text-xs text-gray-600">
            {hotelDetails.pricePerNight}/Night in CAD
          </p>
          {/* <p className="text-xs text-gray-600">{hotelDetails.location}</p> */}
        </div>
      </motion.div>
    </div>
  );
};

export default HotelCard;
