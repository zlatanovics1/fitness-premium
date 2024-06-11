import Image from "next/image";
import sup from "@/public/abcsup.png";
import { BiLinkExternal } from "react-icons/bi";
export default function Browser() {
  return (
    <div className="cursor-pointer relative max-w-[42rem] scale-90  group  border border-primary-light/50">
      <div className="">
        <div className="input border border-base-300 text-gray-400">
          https://abc-supplements.com
        </div>
      </div>
      <div className="px-4 py-1 border-t border-base-300">
        <Image
          src={sup}
          quality={100}
          alt="Abc supplements website"
          className="object-cover invert rounded-md"
        />
      </div>
      <div className="absolute inset-0 p-4 bg-gradient-to-t from-primary-dark duration-300 opacity-0 group-hover:opacity-100 transition-all  to-transparent">
        <BiLinkExternal className="float-right w-5 h-5 text-primary-light" />
      </div>
    </div>
  );
}
