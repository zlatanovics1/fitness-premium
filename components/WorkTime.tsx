import Section from "./Section";
import Timer from "./Timer";
import H2 from "./typography/H2";

export default function WorkTime() {
  return (
    <Section>
      <H2 className="text-center upercase">Radno vreme</H2>
      <div className="flex justify-between items-center mt-28">
        <div className=" space-y-10">
          <div className="flex gap-8 items-center">
            <p className="uppercase text-3xl font-bold text-gray-400">
              PON-SUB
            </p>
            <p className="uppercase text-5xl font-bold gold">
              {process.env.NEXT_PUBLIC_OPEN_FROM?.padStart(2, "0")}:00 -{" "}
              {process.env.NEXT_PUBLIC_OPEN_TO?.padStart(2, "0")}:00
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="uppercase text-3xl font-bold text-gray-400">
              nedelja
            </p>
            <p className="uppercase text-5xl font-bold gold">neradan dan</p>
          </div>
        </div>
        <div className="flex gap-20 justify-center items-center">
          <Timer />
        </div>
      </div>
    </Section>
  );
}
