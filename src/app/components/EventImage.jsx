import Image from "next/image";
import Link from "next/link";

function EventImage({ src, alt, href }) {
  const content = (
    <div className="relative w-full aspect-[4.2/3] rounded-lg overflow-hidden">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </Link>
  ) : (
    content
  );
}