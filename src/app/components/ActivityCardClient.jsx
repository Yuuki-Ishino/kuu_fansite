"use client";

import { useState } from "react";
import dayjs from "dayjs";
import ActivityModal from "./ActivityModal";

export default function ActivityCardClient({ activity }) {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const weekday = weekdays[dayjs(activity.date).day()];

  return (
    <>
      <div
        className="relative mb-14"
        onClick={() => setSelectedActivity(activity)}
      >
        <img
          src={activity.imageUrl}
          alt={activity.title}
          className="w-full h-[225px] rounded-[20px] object-cover hover:opacity-70 active:opacity-70"
        />
        <p className="bg-white text-black font-bold inline-block border-2 absolute bottom-[6px] left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-[10px]">
          {activity.title}
        </p>
        <p className="bg-white text-black font-bold inline-block border-2 absolute top-[10px] right-[10px] px-1.5 py-2 rounded-[10px]">
          {activity.date} ({weekday})
        </p>
      </div>

      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </>
  );
}
