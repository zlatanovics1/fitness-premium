import Image from "next/image";
import sup from "@/public/abcsup.png";
import { BiCircle, BiLinkExternal, BiSearch } from "react-icons/bi";
export default function Browser() {
  return (
    <div className="cursor-pointer relative max-w-[42rem] scale-90 rounded-2xl group  border border-primary-light/50">
      <div className="flex items-center gap-2 [&_*]:w-3 [&_*]:h-3 absolute top-3 left-5">
        <BiCircle className="bg-gray-500 rounded-full text-gray-500" />
        <BiCircle className="bg-gray-700 rounded-full text-gray-700" />
        <BiCircle className="bg-gray-800 rounded-full text-gray-800" />
      </div>
      <div className="flex items-center justify-center py-2">
        <div className="border pl-3 pr-14  bg-gray-900 flex items-center gap-2 border-gray-400 text-gray-400 rounded-md">
          <BiSearch />
          <span>abc-supplements.com</span>
        </div>
      </div>
      <div className="px-2 py-1 border-t border-base-300">
        <Image
          src={sup}
          quality={100}
          alt="Abc supplements website"
          className="object-cover invert rounded-md"
        />
      </div>
      <div className="absolute inset-0 p-4 bg-gradient-to-t rounded-2xl from-primary-dark duration-300 opacity-0 group-hover:opacity-70 transition-all  to-transparent">
        <BiLinkExternal className="float-right w-5 h-5 text-primary-light" />
      </div>
    </div>
  );
}
