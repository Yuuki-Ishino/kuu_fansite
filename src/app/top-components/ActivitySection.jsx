import Button from "../components/Button";
import ActivityCardClient from "../components/ActivityCardClient";
import { getPastActivities, getLatestActivities } from "$/services/supabaseApi";

export default async function ActivitySection() {
  const pastItems = await getPastActivities(3);
  const latestItems = await getLatestActivities(3);

  return (
    <section className="text-white pt-20 lg:py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b border-white">
        <h3 className="text-[20px] font-bold mb-5">PAST ACTIVITIES</h3>
        <h2 className="text-[30px] font-bold mb-[14px]">今までの活動</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {pastItems.map((item) => (
            <ActivityCardClient key={item.id} activity={item} />
          ))}
        </div>
        {/* MOREボタン */}
        <div className="text-center pb-14">
          <Button href="/activities" timeFilter="past">
            SEE MORE
          </Button>
        </div>

        <h3 className="text-[20px] font-bold mb-5">UPCOMING ACTIVITIES</h3>
        <h2 className="text-[30px] font-bold mb-[14px]">これからの活動</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {latestItems.map((item) => (
            <ActivityCardClient key={item.id} activity={item} />
          ))}
        </div>
        {/* MOREボタン */}
        <div className="text-center">
          <Button href="/activities" timeFilter="future">
            SEE MORE
          </Button>
        </div>
      </div>
    </section>
  );
}
