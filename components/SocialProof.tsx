import Image from "next/image";
import Blob from "./Blob";
import Section from "./Section";
import P from "./typography/P";
// images
import kevinLevrone from "@/public/kevin.webp";
import fa from "@/public/fa.png";
import hype from "@/public/hype.png";
import warrior from "@/public/warrior.webp";
import lifeFitness from "@/public/life_fitness.png";
import React from "react";
import BlobLine from "./BlobLine";

const images = [
  { src: kevinLevrone, alt: "Kevin Levrone Signature Series Logo" },
  { src: fa, alt: "Fitness Authority Logo" },
  { src: hype, alt: "Hype Drink Logo" },
  { src: warrior, alt: "Warrior supplements logo" },
  { src: lifeFitness, alt: "Life fitness Logo" },
];

export default function SocialProof() {
  return (
    <>
      <div className="relative max-sm:-translate-y-8 ">
        <BlobLine reverse={false} />
      </div>

      <Section nobreak className="mt-14">
        <P className="font-bold text-center sm:text-3xl max-sm:-translate-y-4  gold">
          Trusted By
        </P>
        <div className="flex items-center justify-center">
          {images.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              className={`object-contain inline-block grayscale brightness-75 opacity-65 invert xl:h-52 ${
                i % 2 === 1 && "scale-50"
              } w-1/5`}
              alt={img.alt}
            />
          ))}
        </div>
      </Section>
      {/* <TrustedBy /> */}
    </>
  );
}
