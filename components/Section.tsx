export default function Section({
  children,
  nobreak,
}: {
  children: React.ReactNode;
  nobreak?: boolean;
}) {
  return (
    <section className={`container max-xl:px-6 ${!nobreak && "py-32"}`}>
      {children}
    </section>
  );
}
