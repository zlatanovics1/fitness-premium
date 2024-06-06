import Image from "next/image";
import H1 from "./typography/H1";

export default function Hero() {
  return (
    <header className="h-[100vh] max-sm:h-[95vh] flex items-center relative">
      <Image
        src="https://images.unsplash.com/photo-1701122640209-26d07d4f35ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fill
        priority
        quality={100}
        className="object-cover -z-20"
        alt="Gym entrance photo"
      />
      <div className="absolute inset-0 sm:bg-gradient-to-r bg-gradient-to-b from-neutral-950 from-15% via-neutral-950/85 via-45% to-neutral-950/30 -z-10 to-100%" />
      <div className="container px-10 max-sm:-translate-y-40">
        <div className="flex flex-col gap-8 xl:max-w-[80%]">
          <H1 className="max-sm:text-3xl max-sm:text-center">
            Doživite Vrhunski Fitness u{" "}
            <span className="bg-gradient-to-r from-primary-dark to-primary-light text-transparent bg-clip-text">
              Ekskluzivnom
            </span>{" "}
            Ambijentu.
          </H1>
          {/* <P className="xl:max-w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ipsa
          provident ratione eaque atque! Quis quod obcaecati veniam. Minima,
          asperiores.
        </P> */}
        </div>
      </div>
      {/* <div className="rotate-180 absolute left-0 w-full bottom-0">
        <Blob />
      </div> */}
    </header>
  );
}
