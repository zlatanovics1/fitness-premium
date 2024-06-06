export default function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`scroll-m-20 text-4xl font-bold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
}
