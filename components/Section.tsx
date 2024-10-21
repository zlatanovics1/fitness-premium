import AnimateIn from "./AnimateIn";

export default function Section({
  children,
  nobreak,
  nopad,
  id,
  className,
}: {
  children: React.ReactNode;
  nobreak?: boolean;
  nopad?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <AnimateIn>
      <section
        id={id}
        className={`container ${!nopad ? "max-xl:px-6" : ""} ${
          !nobreak ? "py-44" : ""
        } ${className ? className : ""}`}
      >
        {children}
      </section>
    </AnimateIn>
  );
}
