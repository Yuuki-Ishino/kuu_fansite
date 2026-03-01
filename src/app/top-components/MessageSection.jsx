// import App from "next/app";
import Button from "@/app/components/Button.jsx";

function MessageSection() {
  return (
    <section className="text-white pt-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-15 border-b border-white">
        <div className="flex flex-col justify-between">
          {/* メッセージ */}
          <div className="w-[90%] mb-[40px]">
            <p className="text-[20px] font-bold mb-5">For First-Time Visitors</p>
            <p className="text-[35px] font-bold leading-[1.6]">
              初めての方へ
            </p>
          </div>

          {/* サブメッセージ */}
          <div className="">
            <p className="text-[20px] leading-[1.8] mb-10">
              安心してライブにお越しいただけるように情報をまとめました。
            </p>
            <div className="flex justify-center">
              <Button href="/aboutUs">READ MORE</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageSection;
