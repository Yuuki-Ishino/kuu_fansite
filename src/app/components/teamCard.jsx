import Image from "next/image";
import Link from "next/link";

export default function TeamCard({ name, subname, color, birth, brood, favo, nfavo, image, description, }) {
  return (
    <Link href={`/members/${subname}`}>
      <div className="transition cursor-pointer overflow-hidden bg-black/90">
        <div className="w-full aspect-[3/4] overflow-hidden mb-2 relative">
          <Image src={image} alt={name} fill className="object-cover"/>
        </div>
        <div className="px-4">
          <p className="text-center text-white font-semibold text-lg mb-2">
            {subname}
          </p>
        </div>
      </div>
    </Link>
  );
}
