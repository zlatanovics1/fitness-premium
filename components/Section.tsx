export default function Section({
  children,
  nobreak,
  nopad,
}: {
  children: React.ReactNode;
  nobreak?: boolean;
  nopad?: boolean;
}) {
  return (
    <section
      className={`container ${!nopad && "max-xl:px-6"} ${!nobreak && "py-40"}`}
    >
      {children}
    </section>
  );
}
