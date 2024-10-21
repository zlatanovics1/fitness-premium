import { TbUserEdit } from "react-icons/tb";
import { CgQuote, CgUser } from "react-icons/cg";
import { BiSolidStar, BiStar, BiUserCircle } from "react-icons/bi";
import { Testimonial } from "@/config/types";
import { useTranslations } from "next-intl";
import { FaRegStarHalf, FaRegStarHalfStroke } from "react-icons/fa6";

export default function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const t = useTranslations("TestimonialsPage");
  return (
    <div className="bg-zinc-950 mx-5 text-gray-300 rounded-3xl min-w-[30rem] border border-neutral-800 px-3 pb-5 pt-8 flex flex-col gap-4">
      <div className="flex items-center">
        <span>
          <CgQuote className="text-7xl -translate-y-7 text-primary-light inline-flex" />
        </span>
        <p className="-ml-3 text-[1.0625rem] mt-4">{t(`${index + 1}`)}</p>
      </div>
      <div className="flex items-center gap-4 px-8">
        <div className="w-16 rounded-full h-16 bg-zinc-800 flex items-center justify-center">
          <TbUserEdit className="w-11 h-11" />
        </div>
        <div>
          <p>{testimonial.name}</p>
          <p className="text-gray-500 text-sm">
            {t(`roles.${testimonial.role || "member"}`)}
          </p>
        </div>
        <div className="ml-auto flex text-primary-light">
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />

          {index && !(index % 2) ? <FaRegStarHalfStroke /> : <BiSolidStar />}
        </div>
      </div>
    </div>
  );
}
