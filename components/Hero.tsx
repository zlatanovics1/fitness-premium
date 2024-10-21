import Image from "next/image";
import H1 from "./typography/H1";
import heroImage from "@/public/herofitness.jpg";
import { useTranslations } from "next-intl";
import BlobLine from "./BlobLine";

export default function Hero() {
  const t = useTranslations("HeroPage");
  return (
    <header className="min-h-[100vh] max-sm:min-h-[95vh] flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0  bg-gradient-to-b from-neutral-950 from-15% via-neutral-950/85 via-45% to-neutral-950/30 -z-10 to-100%" />
      <div className="absolute inset-0 -z-20 hidde sm:block">
        <Image
          // src="https://images.unsplash.com/photo-1701122640209-26d07d4f35ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src={heroImage}
          priority
          quality={100}
          className="object-cover w-full h-full rounded-xl"
          alt="Gym entrance photo"
        />
      </div>
      {/* <div className="absolute inset-0 sm:bg-gradient-to-r bg-gradient-to-b from-neutral-950 from-15% via-neutral-950/85 via-45% to-neutral-950/30 -z-10 to-100%" /> */}
      <div className="container px-10 max-sm:-translate-y-10 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 xl:max-w-[80%]">
          <H1 className="max-sm:text-3xl max-sm:text-center text-center">
            {t("headlineStart")}{" "}
            <span className="bg-gradient-to-r from-primary-dark to-primary-light text-transparent bg-clip-text">
              {t("headlineGradient")}
            </span>{" "}
            {t("headlineEnd")}
          </H1>
        </div>
        {/* <div className="mt-40"></div> */}
        {/* <Image
          // src="https://images.unsplash.com/photo-1701122640209-26d07d4f35ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src={heroImage}
          priority
          quality={100}
          className="object-cover w-[30%] z-20 h-3/5 rounded-xl sm:hidden"
          alt="Gym entrance photo"
        /> */}
      </div>
      <BlobLine />
      <BlobLine reverse={false} />
    </header>
  );
}
