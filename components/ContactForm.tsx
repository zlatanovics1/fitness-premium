import AnimatedButton from "./AnimatedButton";

export default function ContactForm() {
  return (
    <form className="rounded-2xl max-sm:rounded-t-none border-gray-800 sm:border-2  sm:project-image-container relative overflow-hidden">
      <div className="space-y-24 rounded-2xl w-[calc(100%-2px)] scale-y-[.995] translate-x-[1.3px] bg-neutral-950 sm:px-10 px-4 py-20 ">
        <div className="flex max-sm:flex-col sm:gap-20 gap-12 sm:items-center">
          <div className="relative z-0">
            <input
              type="text"
              id="name"
              className=" block py-3 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-900 appearance-none focus:outline-none focus:ring-0 focus:border-primary-light peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className=" absolute text-gray-500 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary-light border-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Name
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="text"
              id="email"
              className=" block py-3 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-900 appearance-none focus:outline-none focus:ring-0 focus:border-primary-light peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className=" absolute text-gray-500 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary-light border-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
          </div>
        </div>
        <div className="relative z-0">
          <textarea
            // type="text"
            id="message"
            spellCheck={false}
            className=" block py-3 h-32 resize-none px-2 w-full text-sm text-gray-500 bg-transparent rounded-md border-2 border-gray-900 appearance-none focus:outline-none focus:ring-0 focus:border-primary-light peer"
            placeholder=" "
          />
          <label
            htmlFor="message"
            className=" absolute  text-gray-500 duration-300 transform -translate-y-12 scale-90 top-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary-light border-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-10 peer-focus:scale-75  peer-focus:-translate-y-12 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Message
          </label>
        </div>
        <AnimatedButton />
      </div>
    </form>
  );
}
