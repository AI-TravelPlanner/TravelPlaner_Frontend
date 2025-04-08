/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PHOTO_REF_URL,
  getPlaceDetail,
} from "@/service/thirdparty/GooglePhotoAPI";

const ActivityCard = ({ activity }) => {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    activity && GetPlacePhoto();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activity]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: activity?.name,
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

  return (
    <Link
      to={"https://www.google.com/maps/search/?q=" + activity?.name}
      target="_blank"
    >
      <div className="grid grid-cols-12 gap-2 rounded-lg w-full h-full min-w-0 min-h-0 ">
        {/* Image Section */}
        <div className="col-span-3 rounded-lg overflow-hidden flex-shrink-0 hover:scale-150 transition-all ">
          <img
            src={photoUrl ? photoUrl : "/Sheraton.jpg"}
            alt="Activity"
            className="w-[60px] h-[55px] rounded-xl object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="col-span-9 p-2 rounded-lg shadow-lg flex-shrink flex flex-col min-w-0 min-h-0">
          <div className="flex flex-col w-full space-y-1">
            <p className="text-xs font-bold">{activity.name}</p>
            <p className="text-xs font-bold">{activity.time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ActivityCard;
