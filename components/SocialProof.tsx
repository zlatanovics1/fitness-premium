import Image from "next/image";
import Blob from "./Blob";
import Section from "./Section";
import P from "./typography/P";
import kevinLevrone from "@/public/kevin.webp";
import fa from "@/public/fa.png";
import hype from "@/public/hype.png";
import warrior from "@/public/warrior.webp";

// const images = new Array(5).fill(kevinLevrone);
const images = [kevinLevrone, fa, hype, warrior];

export default function SocialProof() {
  return (
    <>
      <Blob />
      {/* <div className="hidden -translate-y-10 scale-x-[-1] max-sm:block">
        <Blob />
      </div> */}
      {/* <div className="rotate-180 sm:-translate-y-64">
        <Blob />
      </div> */}
      <Section>
        <P className="font-bold text-center sm:text-3xl max-sm:-translate-y-6 -translate-y-2  gold">
          Trusted By
        </P>
        <div className="flex items-center justify-center">
          {images.map((img, i) => (
            <Image
              key={i}
              src={img}
              className={`object-contain inline-block grayscale brightness-75 opacity-65 invert xl:h-52 ${
                i % 2 === 1 && "scale-50"
              } w-1/5`}
              alt="Kevin Levrone Signature Series logo"
            />
          ))}
        </div>
      </Section>
      {/* <TrustedBy /> */}
    </>
  );
}
