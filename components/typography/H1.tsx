export default function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`mb-4 text-4xl font-extrabold tracking-tight text-gray-200 md:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
}
