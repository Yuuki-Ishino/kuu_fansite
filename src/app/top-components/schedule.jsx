"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

export default function TimeSchedule() {
  const [latestItems, setLatestItems] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [onClickTT, setOnClickTT] = useState(false);

  useEffect(() => {
    const fetchActivities = async () => {
      const data = null;
      setLatestItems(data);
    };
    fetchActivities();
  }, []);

  return (
    <section className="text-white pt-20 lg:py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b">
        <h3 className="text-[20px] font-bold mb-5">SCHEDULE</h3>
        <h2 className="text-[30px] font-bold mb-[14px]">活動予定</h2>

        <div className="pt-10  flex justify-center">
          <button
            onClick={() => setOnClickTT(!onClickTT)}
            className="
              inline-block w-[270px] h-[60px] text-[20px] font-bold 
              text-white border border-white rounded-full 
              text-center leading-[60px] transition-colors duration-200
              hover:bg-white hover:text-black active:bg-white active:text-black
            "
          >
            TimeTree
          </button>
        </div>

        {/* タイムツリー */}
        {onClickTT && (
          <div className="pt-10">
            <iframe
              title="カレンダー"
              src="https://timetreeapp.com/public_calendars/latte/embed/monthly?calendar_name=true&frame_color=%2347b2f7"
              style={{
                width: "100%",
                minHeight: "400px",
                aspectRatio: "680 / 720",
                border: "none",
              }}
            ></iframe>
          </div>
        )}

        {selectedActivity && (
          <ActivityModal
            activity={selectedActivity}
            onClose={() => setSelectedActivity(null)}
          />
        )}
      </div>
    </section>
  );
}
