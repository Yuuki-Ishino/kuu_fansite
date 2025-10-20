import ActivitySection from "./ActivitySection";

export const metadata = {
  title: "Bbooth 活動一覧",
  description: "東洋大学ボランティアサークルBboothの活動一覧。",
  openGraph: {
    title: "Bbooth 活動一覧",
    description: "東洋大学ボランティアサークルBboothの活動一覧。",
    images: ["/images/logo01.jpg"],
  },
};

export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <section className="pt-[70px]">
        <ActivitySection />
      </section>
    </>
  );
}
