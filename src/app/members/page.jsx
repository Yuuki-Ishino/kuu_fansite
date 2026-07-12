import TeamCard from "../components/teamCard";

export const metadata = {
  title: "Dream & Dream | メンバー紹介",
  description: "Dream & Dream のメンバー紹介。アー写クリックで詳細が見れます。",
  openGraph: {
    title: "Dream & Dream | メンバー紹介",
    description: "Dream & Dream のメンバー紹介。アー写クリックで詳細が見れます。",
    images: ["/images/members/dredre_members.PNG"],
  },
};

export default function memberIntro() {
  return (
    <section className="pt-25 bg-img">
      <div className="max-w-2xl mx-auto px-4 pb-3">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          PROFILE 
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
          <TeamCard
            name="くう"
            subname="Kuu"
            color="青"
            image="/images/members/kuu.PNG"
          />

          <TeamCard
            name="あやせ"
            subname="Ayase"
            color="赤"
            image="/images/members/ayase.PNG"
          />

          <TeamCard
            name="ひなせ"
            subname="Hinase"
            color="白"
            image="/images/members/hinase.PNG"
          />

          <TeamCard
            name="しの"
            subname="Sino"
            color="紫"
            image="/images/members/shino.PNG"
          />

          <TeamCard
            name="とらまる"
            subname="Toramaru"
            color="橙"
            image="/images/members/toramaru.PNG"
          />

          <TeamCard
            name="たいよう"
            subname="Taiyou"
            color="黄"
            image="/images/members/taiyou.PNG"
          />

          <TeamCard
            name="かなめ"
            subname="Kaname"
            color="緑"
            image="/images/members/kaname.PNG"
          />
        </div>
      </div>
    </section>
  );
}
