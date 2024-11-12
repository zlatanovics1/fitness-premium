import Image from "next/image";
import Section from "./Section";
import H2 from "./typography/H2";

import pic1 from "@/public/1.jpg";
import pic2 from "@/public/2.jpg";
import pic3 from "@/public/3.jpg";
import pic4 from "@/public/4.jpg";
import pic5 from "@/public/5.jpg";
import pic6 from "@/public/6.jpg";
import pic7 from "@/public/7.jpg";
import pic8 from "@/public/9.jpg";
import pic9 from "@/public/8.jpg";
import { useTranslations } from "next-intl";

const pics = [pic1, pic2, pic3, pic6, pic4, pic5, pic7, pic8, pic9];

export default function Gallery() {
  const styles =
    "border-2 border-zinc-800  rounded-xl overflow-hidden  cursor-pointer";
  const t = useTranslations("GalleryPage");
  return (
    <Section id="gallery">
      <H2>{t("headline")}</H2>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mt-10 ">
        <div
          className={`${styles} lg:col-span-2 lg:row-span-3 brightness-[0.7] h-ful row-span-2`}
        >
          <video className="object-cover h-full" playsInline autoPlay muted>
            <source src="/fitnessVideo.mp4" type="video/mp4" />
          </video>
        </div>
        {pics.map((pic, i) => (
          <div
            className={`${styles} ${
              i === pics.length - 1 ? "max-lg:hidden" : ""
            } ${i === 3 || i === 5 ? "max-lg:row-span-2" : "max-lg:h-80"} 
           
             `}
            key={i}
          >
            <Image
              src={pic}
              alt="Gym enterior"
              className="object-cover h-full hover:scale-105 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
