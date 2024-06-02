import H1 from "./typography/H1";
import P from "./typography/P";

export default function Hero() {
  return (
    <header className="container h-[90vh] flex items-center">
      <div className="flex flex-col gap-8 xl:max-w-[60%] -translate-y-10">
        <H1>
          Doživite Vrhunski Fitness u{" "}
          <span className="bg-gradient text-transparent bg-clip-text">
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
    </header>
  );
}
