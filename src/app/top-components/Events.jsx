import Image from "next/image";
import Link from "next/link";

function EventImage({ src, alt, href }) {
  const image = (
    <div className="relative w-full aspect-[4.4/3] rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );

  if (!href) return image;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {image}
    </Link>
  );
}

const events = [
  {
    src: "/images/events/e20260707.jpeg",
    alt: "e5_schedule",
    href: "https://x.com/Latte_2025/status/2070908523278651549?s=20",
  },
  {
    src: "/images/events/e20260720.jpg",
    alt: "e6_schedule",
    href: "https://x.com/Latte_2025?s=20",
  },
  {
    src: "/images/events/e20260701.jpeg",
    alt: "e7_schedule",
    href: "https://x.com/dredre_latte/status/2074500408345829832?s=20",
  },
];

export default function Events() {
  return (
    <section className="text-white pt-20 lg:py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b">
        <h3 className="text-[20px] font-bold">EVENTS</h3>
        {/* <h2 className="text-[30px] font-bold my-5">イベントカレンダー</h2>

        <EventImage
          src="/images/events/202604.JPG"
          alt="イベントカレンダー"
        /> */}

        <h2 className="text-[30px] font-bold my-5">イベント</h2>

        <div className="space-y-5">
          {events.map((event) => (
            <EventImage
              key={event.src}
              src={event.src}
              alt={event.alt}
              href={event.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}