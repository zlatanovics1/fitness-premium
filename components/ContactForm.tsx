import { useTranslations } from "next-intl";
import AnimatedButton from "./AnimatedButton";

async function sendMessage(data: FormData) {
  "use server";
}

export default function ContactForm() {
  const t = useTranslations("ContactPage");
  return (
    <form className="flex gap-20 flex-col h-full" action={sendMessage}>
      <div className="flex max-sm:flex-col sm:gap-20 gap-8  sm:items-center">
        <div className="relative z-0">
          <input
            type="text"
            id="name"
            className=" block py-3 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-neutral-700/70 appearance-none focus:outline-none focus:ring-0 focus:border-primary-light peer"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className=" absolute text-gray-500 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary-light border-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            {t("name")}
          </label>
        </div>
        <div className="relative z-0">
          <input
            type="text"
            id="email"
            className=" block py-3 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-neutral-700/70 appearance-none focus:outline-none focus:ring-0 focus:border-primary-light peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className=" absolute text-gray-500 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary-light border-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            {t("email")}
          </label>
        </div>
      </div>
      <div className="relative z-0 flex flex-col grow">
        <textarea
          // type="text"
          id="message"
          spellCheck={false}
          className=" block py-3 h-48 resize-none px-2 w-full text-sm text-gray-500 bg-transparent rounded-md border-2 border-neutral-700/70 appearance-none focus:outline-none focus:ring-0 focus:border-primary-light peer"
          placeholder=" "
        />
        <label
          htmlFor="message"
          className=" absolute  text-gray-500 duration-300 transform -translate-y-12 scale-90 top-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary-light border-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-10 peer-focus:scale-75  peer-focus:-translate-y-12 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {t("message")}
        </label>
        <AnimatedButton label={t("send")} />
      </div>
    </form>
  );
}
