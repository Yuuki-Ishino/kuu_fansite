import ActivityCardClient from "../components/ActivityCardClient";
import { getAllActivities } from "$/services/supabaseApi";

export default async function ActivitySection() {
  const activities = await getAllActivities();
  return (
    <section className="text-white lg:py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b border-white">
        {/* サブタイトル */}
        <p className="text-[20px] font-bold mb-5">ACTIVITIES</p>

        {/* タイトル */}
        <p className="text-[30px] font-bold mb-[14px]">活動一覧</p>

        {/* カード一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((item) => (
            <ActivityCardClient key={item.id} activity={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
