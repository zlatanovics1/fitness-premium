import Browser from "./Browser";
import Section from "./Section";
import H1 from "./typography/H1";
import H2 from "./typography/H2";

export default function Features() {
  return (
    <Section>
      <div className="flex max-xl:flex-col max-xl:gap-10 justify-between">
        <H2 className="max-sm:text-3xl">
          Vrhunska <br className="xsm:hidden" />
          <span className="px-5 rounded-sm mb-2 xsm:mb-4 max-xsm:mt-2 xsm:mx-2 py-[2px] bg-gradient-to-r from-primary-dark to-primary-light/85 -skew-x-12 inline-block">
            suplementacija
          </span>{" "}
          <br className="xsm:hidden" />
          kao
          <br className="xsm:hidden" />
          <span className="px-5 rounded-xsm max-xsm:mb-2 py-[2px] max-xsm:mt-2 xsm:mx-2 bg-gradient-to-r from-primary-dark to-primary-light/85 -skew-x-12 inline-block">
            neizostavni
          </span>{" "}
          <br className="xsm:hidden" />
          deo treninga
        </H2>
        <Browser />
      </div>
    </Section>
  );
}
