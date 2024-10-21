import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function I18NSwitcher({ locale }: { locale: string }) {
  const oppositeLocale = locale === "en" ? `sr` : `en`;

  return (
    <Link
      href="/"
      locale={oppositeLocale}
      className="border rounded-md px-2 py-1 text-sm uppercase flex flex-col items-center"
    >
      <p>{oppositeLocale}</p>
      <BsArrowRight className="w-3 h-3 -mt-1" />
    </Link>
  );
}
