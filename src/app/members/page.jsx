import TeamCard from "../components/teamCard";

export const metadata = {
  title: "Bbooth メンバー",
  description: "東洋大学ボランティアサークルBboothのメンバー紹介ページ。",
  openGraph: {
    title: "Bbooth メンバー",
    description: "東洋大学ボランティアサークルBboothのメンバー紹介ページ。",
    images: ["/images/10th_img.jpg"],
  },
};

export default function memberIntro() {
  return (
    <section className="py-25">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          PROFILE 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamCard
            name="くう"
            subname="青"
            role="Kuu"
            image="/images/members/rein.jpg"
            description="ダンスボーカルビジュアル担当"
          />
          <TeamCard
            name="新井 快"
            subname="あらいかい"
            role="副代表"
            image="/images/members/kai.jpg"
            description="Bbooth内でとても頼りになる男。代表を支えるリーダー的存在。"
          />
          <TeamCard
            name="増田 朱那"
            subname="ますだしゅな"
            role="副代表"
            image="/images/members/syuna.jpg"
            description="いつも明るく、笑いのセンスが抜群。みんなを笑顔にするヒール役。"
          />
          <TeamCard
            name="白井 一基"
            subname="しらいかずき"
            role="イベント"
            image="/images/members/kazuki.jpg"
            description="大きな声と、抜群の盛り上げ力を持つ。話し方やにっこり笑顔が可愛いと評判。"
          />
          <TeamCard
            name="中村 凛"
            subname="なかむらりん"
            role="イベント"
            image="/images/members/rin.jpg"
            description="ふんわりとした雰囲気で場をなごますのが得意。たまに核心をつく一言を放つ。"
          />
          <TeamCard
            name="齋藤 慶起"
            subname="さいとうひろき"
            role="会計"
            image="/images/members/hiroki.jpg"
            description="長髪がトレードマーク。一見クールに見えるが、発する言葉全てがボケだという。"
          />
          <TeamCard
            name="高野 真実"
            subname="たかのまみ"
            role="会計"
            image="/images/members/mami.jpg"
            description="好きなアイドルの話になると止まらない。ちなみにINIの佐野雄大が大好き。"
          />
        </div>
      </div>
    </section>
  );
}
