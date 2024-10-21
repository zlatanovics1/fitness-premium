import Image from "next/image";
import supplements from "@/public/supplements.jpg";
import sup1 from "@/public/sup1.jpg";
import sup2 from "@/public/sup2.jpg";
import sup3 from "@/public/sup3.jpg";

const supplementImgs = [supplements, sup1, sup2, sup3];

import { BiCircle, BiLinkExternal, BiSearch } from "react-icons/bi";
export default function Browser() {
  return (
    <a
      href="https://www.abc-supplements.com"
      target="_blank"
      className="cursor-pointer relative max-w-[42rem] scale-90 rounded-2xl group border border-neutral-700 shadow-sm shadow-primary-"
    >
      <div className="flex items-center gap-2 [&_*]:w-3 [&_*]:h-3 absolute top-3 left-5 max-sm:hidden">
        <BiCircle className="bg-neutral-500 rounded-full text-neutral-500" />
        <BiCircle className="bg-neutral-700 rounded-full text-neutral-700" />
        <BiCircle className="bg-neutral-800 rounded-full text-neutral-800" />
      </div>
      <div className="flex items-center justify-center py-2">
        <div className="border pl-3 pr-14  bg-neutral-900 flex items-center gap-2 border-gray-400 text-gray-400 rounded-md">
          <BiSearch />
          <span>abc-supplements.com</span>
        </div>
      </div>
      <div className="p-3 border-t border-base-300 grid grid-cols-2 gap-3">
        {supplementImgs.map((sup, i) => (
          <Image
            key={i}
            src={sup}
            quality={100}
            alt="Abc supplements website"
            className="object-cover rounded-lg brightness-[0.7] h-64 max-sm:h-56"
          />
        ))}
      </div>
      <div className="absolute inset-0 p-4 bg-gradient-to-t rounded-2xl from-primary-dark/70 duration-300 opacity-0 group-hover:opacity-70 transition-all  to-transparent">
        <BiLinkExternal className="float-right w-5 h-5 text-primary-light" />
      </div>
    </a>
  );
}
